// Turns data/api.json + data/sources into Markdown reference pages under docs/api.
//
// Usage: node scripts/generate.js
//
// Two data sources are combined:
//  - data/api.json: the editor's autocomplete metadata (descriptions, defaults, block text)
//  - data/sources/**/*.ts: the real declarations, parsed with TypeScript for exact signatures

const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const ROOT = path.join(__dirname, "..");
const DATA = path.join(ROOT, "data");
const OUT = path.join(ROOT, "docs", "api");

const apiByLib = JSON.parse(fs.readFileSync(path.join(DATA, "api.json"), "utf8"));
const version = JSON.parse(fs.readFileSync(path.join(DATA, "version.json"), "utf8"));
const api = Object.assign({}, ...Object.values(apiByLib));
for (const q in api) api[q].attributes ??= {};

// Which library each symbol comes from. A new Minecraft Education project loads
// core, builder and shapes; the rest must be added as extensions (or aren't available).
const libOf = {};
for (const lib in apiByLib) for (const q in apiByLib[lib]) libOf[q] ??= lib.replace("libs/", "");
const LIB_NOTES = {
    events: "> **Extension:** add **Events** from Extensions in Code Builder first.",
    file: "> **Extension:** add **File Read & Write** from Extensions in Code Builder first.",
    nether: "> **Not available by default:** this comes from the `nether` library, which Minecraft Education projects don't load.",
};

// ---------------------------------------------------------------- declarations

// qName -> { params: [{name, type, optional}], ret }
const decls = {};

function parseSources() {
    const dir = path.join(DATA, "sources");
    for (const pkg of fs.readdirSync(dir)) {
        for (const file of fs.readdirSync(path.join(dir, pkg))) {
            if (!file.endsWith(".ts")) continue;
            const text = fs.readFileSync(path.join(dir, pkg, file), "utf8");
            const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true);
            sf.statements.forEach(st => walk(st, [], sf));
        }
    }
}

function walk(node, scope, sf) {
    const txt = n => (n ? n.getText(sf).replace(/\s+/g, " ") : undefined);
    const record = (name, fn) => {
        const q = [...scope, name].join(".");
        if (decls[q]) return; // keep the first (declaration files usually come first)
        decls[q] = {
            params: (fn.parameters || []).map(p => ({
                name: txt(p.name),
                type: txt(p.type) || "any",
                optional: !!(p.questionToken || p.initializer),
                rest: !!p.dotDotDotToken,
            })),
            ret: txt(fn.type) || "void",
        };
    };
    if (ts.isModuleDeclaration(node)) {
        let body = node.body, s = [...scope, node.name.text];
        while (body && ts.isModuleDeclaration(body)) { s.push(body.name.text); body = body.body; }
        if (body) body.statements.forEach(st => walk(st, s, sf));
        return;
    }
    if ((ts.isClassDeclaration(node) || ts.isInterfaceDeclaration(node)) && node.name) {
        const s = [...scope, node.name.text];
        node.members.forEach(m => {
            if (!m.name) return;
            const n = txt(m.name);
            if (ts.isMethodDeclaration(m) || ts.isMethodSignature(m)) walk2(s, n, m);
            else if (ts.isPropertyDeclaration(m) || ts.isPropertySignature(m) || ts.isGetAccessor(m))
                decls[[...s, n].join(".")] ??= { prop: true, ret: txt(m.type) || "any" };
        });
        return;
    }
    if (ts.isFunctionDeclaration(node) && node.name) record(node.name.text, node);
    function walk2(s, n, m) {
        const q = [...s, n].join(".");
        decls[q] ??= {
            params: m.parameters.map(p => ({ name: txt(p.name), type: txt(p.type) || "any", optional: !!(p.questionToken || p.initializer), rest: !!p.dotDotDotToken })),
            ret: txt(m.type) || "void",
        };
    }
}

// ---------------------------------------------------------------- helpers

const byBlockId = {};
for (const q in api) {
    const id = api[q].attributes && api[q].attributes.blockId;
    if (id) byBlockId[id] = q;
}

const enumNames = new Set(Object.keys(api).filter(q => api[q].kind === 6));

// Map a shadow block (the dropdown a parameter uses in blocks) to the enum it offers.
function shadowEnum(shadowId) {
    const q = byBlockId[shadowId];
    if (!q) return undefined;
    const d = decls[q];
    if (d && d.params && d.params.length === 1 && enumNames.has(d.params[0].type)) return d.params[0].type;
    const s = api[q];
    if (s && enumNames.has(s.retType)) return s.retType;
    return undefined;
}

function enumMembers(e) {
    return Object.keys(api)
        .filter(q => q.startsWith(e + ".") && q.split(".").length === 2)
        .map(q => ({ q, name: q.slice(e.length + 1), s: api[q] }))
        .sort((a, b) => (+a.s.attributes.enumval || 0) - (+b.s.attributes.enumval || 0));
}

function firstConstant(e) {
    const m = enumMembers(e).find(m => !m.s.attributes.deprecated && !m.s.attributes.blockHidden && m.name !== "Air");
    if (!m) return undefined;
    return m.s.attributes.alias || m.q;
}

const isHidden = (q, s) => {
    const a = s.attributes || {};
    const last = q.split(".").pop();
    return a.deprecated || last.startsWith("_") || /@/.test(q);
};

// jsDoc text sometimes still carries "* @param" lines; split them out.
function doc(s) {
    const raw = (a(s).jsDoc || "").replace(/(^|\s)\*(?=\s)/g, " ");
    const [text, ...rest] = raw.split(/\s@param\s+/);
    const params = {};
    for (const r of rest) {
        const m = r.match(/^(\w+)\s+([\s\S]*)$/);
        if (m) params[m[1]] = clean(m[2].split(/\s@\w+/)[0]);
    }
    return { text: clean(text.split(/\s@\w+/)[0]), params };
}

// Some blocks are defined on a hidden helper that points at the real function.
const aliasBlocks = {};
for (const q in api) {
    const t = api[q].attributes.blockAliasFor;
    if (t) aliasBlocks[t] = api[q];
}

const OWNER_DOCS = {
    events: "Run code when things happen in the world: blocks broken or placed, items crafted, mobs killed, players moving, and more.",
    file: "Read and write text or CSV files chosen with a file picker.",
    loops: "Repeat code and pause.",
    Number: "Number helpers.",
    console: "Write debugging output.",
    Object: "Object helpers.",
};

const isInstanceMember = (owner, s) =>
    !!owner && (s.isInstance || ([8, 9].includes((api[owner] || {}).kind) && [1, 2, -1].includes(s.kind)));

const clean = s => (s || "").replace(/\s+/g, " ").replace(/\|/g, "\\|").trim();
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Type shown to readers: prefer the enum a dropdown really offers over "number".
function paramInfo(q, s) {
    const d = decls[q] || {};
    const a = s.attributes || {};
    const defs = (a._def && a._def.parameters) || [];
    return (s.parameters || []).map((p, i) => {
        const dp = (d.params || []).find(x => x.name === p.name) || (d.params || [])[i] || {};
        let type = p.type || dp.type || "any";
        // Block parameter names can differ from the function's (e.g. %entity for mob),
        // in which case they line up by position.
        const bp = defs.find(x => x.name === p.name) ||
            (defs.length === s.parameters.length && !s.isInstance ? defs[i] : {}) || {};
        const shadow = (a._shadowOverrides || {})[p.name] || (a._shadowOverrides || {})[bp.name] || bp.shadowBlockId;
        const en = shadow && shadowEnum(shadow);
        if (en && (type === "number" || type === "any")) type = en;
        let desc = clean(p.description || (a.paramHelp || {})[p.name]).replace(/,?\s*eg:.*$/, "");
        if (desc && !/[.!?]$/.test(desc)) desc += ".";
        return {
            name: p.name,
            type,
            optional: dp.optional !== undefined ? dp.optional : p.initializer !== undefined,
            rest: dp.rest,
            desc: desc.charAt(0).toUpperCase() + desc.slice(1),
            def: p.default !== undefined ? p.default : (a.paramDefl || {})[p.name],
            handler: p.handlerParameters,
        };
    });
}

function exampleArg(p) {
    if (p.handler || /=>/.test(p.type)) {
        const args = (p.handler || []).map(h => h.name).join(", ");
        return `(${args}) => {\n    // your code here\n}`;
    }
    if (p.def !== undefined && p.def !== "") {
        const v = String(p.def);
        if (p.type === "string" && !/^["'`]/.test(v)) return JSON.stringify(v);
        return v;
    }
    if (enumNames.has(p.type)) return firstConstant(p.type) || p.type;
    switch (p.type) {
        case "number": return "0";
        case "string": return '"hello"';
        case "boolean": return "true";
        case "Position": return "pos(0, 0, 0)";
        case "TargetSelector": return "mobs.target(LOCAL_PLAYER)";
        case "number[]": return "[1, 2, 3]";
        case "string[]": return '["a", "b"]';
        case "any": return '"hello"';
    }
    if (/\[\]$/.test(p.type)) return "[]";
    return p.name;
}

function signature(q, s, params, owner) {
    const d = decls[q] || {};
    const ret = s.retType || d.ret || "void";
    const name = isInstanceMember(owner, s) ? `${instanceName(owner)}.${q.split(".").pop()}` : q;
    if (s.kind === 2 || s.kind === 4 || d.prop) return `${name}: ${ret}`;
    const ps = params.map(p => `${p.rest ? "..." : ""}${p.name}${p.optional ? "?" : ""}: ${p.type}`).join(", ");
    return `${name}(${ps}): ${ret}`;
}

function instanceName(owner) {
    const n = owner.split(".").pop();
    return { Array: "list", String: "text", Number: "num", Position: "position", ChatCommandArguments: "args", Enchantment: "enchantment" }[n]
        || n.charAt(0).toLowerCase() + n.slice(1);
}

function example(q, s, params, owner) {
    const name = isInstanceMember(owner, s) ? `${instanceName(owner)}.${q.split(".").pop()}` : q;
    if (s.kind === 2 || s.kind === 4 || (decls[q] || {}).prop) return `let value = ${name}`;
    const required = params.filter(p => !p.optional || p.handler);
    const args = required.map(exampleArg);
    const call = args.some(a => a.includes("\n"))
        ? `${name}(${args.join(", ")})`
        : `${name}(${args.join(", ")})`;
    const ret = s.retType || (decls[q] || {}).ret;
    return ret && ret !== "void" && !a(s).forceStatement ? `let result = ${call}` : call;
}
const a = s => s.attributes || {};

function blockText(q, s) {
    const d = a(aliasBlocks[q] || s)._def;
    if (!d) return undefined;
    return d.parts.map(p => p.kind === "label" ? p.text : p.kind === "param" ? `[${p.name}]` : " ").join("").replace(/\s+/g, " ").trim();
}

// ---------------------------------------------------------------- pages

const SECTIONS = [
    { title: "Minecraft", names: ["player", "agent", "blocks", "mobs", "gameplay", "positions", "builder", "shapes", "events"] },
    { title: "Extensions", names: ["file"], note: "Not part of a new project. Add **File Read & Write** from **Extensions** in Code Builder first." },
    { title: "Alternate names (not available by default)", names: ["user", "exploration"], note: "These come from the `nether` library bundled with the editor. It is not loaded in Minecraft Education projects, so `user.` and `exploration.` give an error. They mirror the player/gameplay APIs under different names." },
    { title: "Language basics", names: ["loops", "Math", "String", "Array", "Number", "console", "control", "Object", "Buffer"] },
    { title: "Types", names: ["Position", "player.ChatCommandArguments", "TargetSelector", "QueryTargetResult", "events.Enchantment"] },
];

function membersOf(owner) {
    return Object.keys(api)
        .filter(q => q.startsWith(owner + ".") && q.split(".").length === owner.split(".").length + 1)
        .filter(q => !isHidden(q, api[q]))
        .filter(q => { const k = api[q].kind; return ![5, 6, 8, 9, undefined].includes(k); });
}

function orderMembers(qs) {
    return qs.sort((x, y) => {
        const wx = +a(api[x]).weight || 0, wy = +a(api[y]).weight || 0;
        return wy - wx || x.localeCompare(y);
    });
}

function renderOwner(owner) {
    const s = api[owner];
    if (!s) return undefined;
    const members = orderMembers(membersOf(owner));
    if (!members.length) return undefined;

    const lines = [];
    lines.push(`# ${owner}`, "");
    if (LIB_NOTES[libOf[owner]]) lines.push(LIB_NOTES[libOf[owner]], "");
    const od = doc(s).text || OWNER_DOCS[owner];
    if (od) lines.push(od, "");
    if (s.kind === 8 || s.kind === 9) lines.push(`\`${owner}\` is a ${s.kind === 8 ? "class" : "type"}. In the examples below, \`${instanceName(owner)}\` stands for a value of this type.`, "");

    lines.push("| Member | Description |", "|---|---|");
    for (const q of members) {
        const n = q.split(".").pop();
        lines.push(`| [\`${n}\`](#${slug(n)}) | ${doc(api[q]).text.split(/(?<=\.)\s/)[0]} |`);
    }
    lines.push("");

    for (const q of members) {
        const m = api[q];
        const n = q.split(".").pop();
        const params = paramInfo(q, m);
        const md = doc(m);
        lines.push(`## ${n}`, "");
        if (LIB_NOTES[libOf[q]] && libOf[q] !== libOf[owner]) lines.push(LIB_NOTES[libOf[q]], "");
        if (md.text) lines.push(md.text.replace(/\\\|/g, "|"), "");
        lines.push("```typescript", signature(q, m, params, owner), "```", "");
        if (params.length) {
            lines.push("| Parameter | Type | Description |", "|---|---|---|");
            for (const p of params) {
                const t = enumNames.has(p.type) ? `[\`${p.type}\`](enums.md#${slug(p.type)})` : `\`${clean(p.type)}\``;
                const def = p.def !== undefined && p.def !== "" && !p.handler ? ` Default: \`${clean(String(p.def))}\`.` : "";
                const pd = p.desc || (p.handler && p.handler.length ? "Code to run. It receives the values below." : p.handler ? "Code to run." : "");
                lines.push(`| \`${p.name}\`${p.optional ? " *(optional)*" : ""} | ${t} | ${pd}${def} |`);
                for (const h of p.handler || []) {
                    const hd = md.params[h.name] ? md.params[h.name].replace(/\.?$/, ".") : "";
                    lines.push(`| ↳ \`${h.name}\` | \`${clean(h.type)}\` | ${hd} |`);
                }
            }
            lines.push("");
        }
        const ret = m.retType || (decls[q] || {}).ret;
        if (ret && ret !== "void" && m.kind !== 2 && m.kind !== 4) lines.push(`**Returns:** \`${ret}\``, "");
        const bt = blockText(q, m);
        if (bt && (!a(m).blockHidden || aliasBlocks[q])) lines.push(`**Block:** ${bt}`, "");
        else lines.push("**Block:** none. This is available in JavaScript only.", "");
        lines.push("```typescript", example(q, m, params, owner), "```", "");
    }
    return lines.join("\n");
}

function renderEnums(used) {
    const lines = ["# Enums and constants", "",
        "Many functions take a value from a fixed list, like a direction, a block, or a mob.",
        "In JavaScript you can write either the **constant** (for example `FORWARD`) or the full **enum name** (for example `SixDirection.Forward`). They mean the same thing. The editor uses the constants when it converts blocks to JavaScript.", ""];
    const names = [...enumNames].filter(e => !e.startsWith("_") && enumMembers(e).length).sort();
    lines.push(names.map(e => `[${e}](#${slug(e)})`).join(" · "), "");
    for (const e of names) {
        const s = api[e];
        lines.push(`## ${e}`, "");
        if (a(s).jsDoc) lines.push(clean(a(s).jsDoc), "");
        lines.push("| Constant | Enum member | Shown in blocks as |", "|---|---|---|");
        for (const m of enumMembers(e)) {
            if (a(m.s).deprecated) continue;
            lines.push(`| ${a(m.s).alias ? "`" + a(m.s).alias + "`" : ""} | \`${m.q}\` | ${clean(a(m.s).block)} |`);
        }
        lines.push("");
    }
    return lines.join("\n");
}

function renderGlobals() {
    const lines = ["# Global functions", "", "These can be called without a namespace.", ""];
    const qs = Object.keys(api).filter(q => !q.includes(".") && [3, -3].includes(api[q].kind) && !isHidden(q, api[q]));
    for (const q of qs.sort()) {
        const m = api[q];
        const params = paramInfo(q, m);
        lines.push(`## ${q}`, "");
        if (a(m).jsDoc) lines.push(clean(a(m).jsDoc), "");
        lines.push("```typescript", signature(q, m, params), "```", "");
        if (params.length) {
            lines.push("| Parameter | Type | Description |", "|---|---|---|");
            for (const p of params) lines.push(`| \`${p.name}\` | \`${p.type}\` | ${p.desc} |`);
            lines.push("");
        }
        lines.push("```typescript", example(q, m, params), "```", "");
    }
    return lines.join("\n");
}

function main() {
    parseSources();
    fs.rmSync(OUT, { recursive: true, force: true });
    fs.mkdirSync(OUT, { recursive: true });

    const index = ["# API reference", "",
        `Generated from MakeCode for Minecraft **v${version.target}** (pxt ${version.pxt}), the editor used by Minecraft Education's Code Builder.`, ""];
    let total = 0;
    const pages = []; // { section, name, desc } in reading order, for llms.txt
    for (const sec of SECTIONS) {
        index.push(`## ${sec.title}`, "");
        if (sec.note) index.push(sec.note, "");
        for (const owner of sec.names) {
            const page = renderOwner(owner);
            if (!page) continue;
            const count = membersOf(owner).length;
            total += count;
            fs.writeFileSync(path.join(OUT, `${owner}.md`), page);
            const desc = (doc(api[owner]).text || OWNER_DOCS[owner] || "").split(/(?<=\.)\s/)[0];
            index.push(`- [${owner}](${owner}.md) (${count}) ${desc ? "- " + desc : ""}`);
            pages.push({ section: sec.title, name: owner, desc });
        }
        index.push("");
    }
    fs.writeFileSync(path.join(OUT, "globals.md"), renderGlobals());
    fs.writeFileSync(path.join(OUT, "enums.md"), renderEnums());
    index.push("## Other", "", "- [Global functions](globals.md): `pos`, `randint`, `parseInt`, and more",
        "- [Enums and constants](enums.md): every block, item, mob, direction, and other value list", "");
    pages.push({ section: "Other", name: "globals", desc: "Global functions: `pos`, `randint`, `parseInt`, and more" },
        { section: "Other", name: "enums", desc: "Every block, item, mob, direction, and other value list" });
    fs.writeFileSync(path.join(OUT, "README.md"), index.join("\n"));
    console.log(`Wrote ${total} members to docs/api`);
    writeLlms(pages);
}

// ---------------------------------------------------------------- llms.txt

// llms.txt is a short, linked index for AI agents (https://llmstxt.org);
// llms-full.txt is the whole reference in one file, so an agent needs a single fetch.
const RAW = "https://raw.githubusercontent.com/Arp-299-Org/makecode-minecraft-js-reference/main";

function writeLlms(pages) {
    const summary = `Unofficial reference for writing JavaScript in Minecraft Education's Code Builder ` +
        `(Microsoft MakeCode for Minecraft v${version.target}): every namespace, function, signature, ` +
        `parameter, default value and constant, generated from the editor's own API data.`;
    const guide = "docs/javascript-guide.md";

    const idx = ["# MakeCode for Minecraft: JavaScript Reference", "", `> ${summary}`, "",
        "Start with the JavaScript guide: MakeCode's JavaScript is a TypeScript subset, and the guide covers how programs run, " +
        "positions, which language features work and which don't, background loops, and debugging. Then look up functions in the API pages.", "",
        "## Guide", "", `- [JavaScript guide](${RAW}/${guide}): how programs run, positions, constants, and supported JavaScript features`,
        `- [Everything in one file](${RAW}/llms-full.txt): the guide and every API page together`, ""];
    let section;
    for (const p of pages) {
        if (p.section !== section) idx.push("", `## ${(section = p.section)}`, "");
        idx.push(`- [${p.name}](${RAW}/docs/api/${p.name}.md)${p.desc ? ": " + p.desc : ""}`);
    }
    fs.writeFileSync(path.join(ROOT, "llms.txt"), idx.join("\n").replace(/\n{3,}/g, "\n\n") + "\n");

    const full = [`# MakeCode for Minecraft: JavaScript Reference (v${version.target})`, "", `> ${summary}`, "",
        fs.readFileSync(path.join(ROOT, guide), "utf8"),
        fs.readFileSync(path.join(OUT, "README.md"), "utf8"),
        ...pages.map(p => fs.readFileSync(path.join(OUT, `${p.name}.md`), "utf8"))];
    fs.writeFileSync(path.join(ROOT, "llms-full.txt"), full.join("\n\n---\n\n"));
    console.log("Wrote llms.txt and llms-full.txt");
}

main();
