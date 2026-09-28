// Downloads the API data that the Minecraft MakeCode editor ships with
// (the same data that powers its autocomplete) and saves it under data/.
//
// Usage: node scripts/fetch.js

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const EDITOR_URL = "https://minecraft.makecode.com/";
const DATA_DIR = path.join(__dirname, "..", "data");

async function get(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
    return res.text();
}

async function main() {
    const html = await get(EDITOR_URL);
    const m = html.match(/https:\/\/[^"' ]+\/target\.js/);
    if (!m) throw new Error("Could not find target.js in the editor page");
    console.log("target bundle:", m[0]);

    const js = await get(m[0]);
    const sandbox = { window: {} };
    vm.runInNewContext(js, sandbox);
    const bundle = sandbox.window.pxtTargetBundle || sandbox.pxtTargetBundle;
    if (!bundle) throw new Error("target.js did not define pxtTargetBundle");

    fs.rmSync(DATA_DIR, { recursive: true, force: true });
    fs.mkdirSync(DATA_DIR, { recursive: true });

    const apis = {};
    for (const lib in bundle.apiInfo) {
        if (lib.endsWith("prj")) continue; // project templates, duplicates of core
        apis[lib] = bundle.apiInfo[lib].apis.byQName;
    }
    fs.writeFileSync(path.join(DATA_DIR, "api.json"), JSON.stringify(apis, null, 1));
    fs.writeFileSync(path.join(DATA_DIR, "version.json"),
        JSON.stringify({ ...bundle.versions, source: m[0], fetched: new Date().toISOString() }, null, 2));

    for (const pkg in bundle.bundledpkgs) {
        const dir = path.join(DATA_DIR, "sources", pkg);
        fs.mkdirSync(dir, { recursive: true });
        for (const file in bundle.bundledpkgs[pkg]) {
            if (/\.(ts|json|md)$/.test(file))
                fs.writeFileSync(path.join(dir, file), bundle.bundledpkgs[pkg][file]);
        }
    }
    console.log("MakeCode for Minecraft", bundle.versions.target, "saved to data/");
}

main().catch(e => { console.error(e); process.exit(1); });
