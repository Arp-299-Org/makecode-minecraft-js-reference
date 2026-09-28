# MakeCode for Minecraft: JavaScript Reference

An unofficial, complete reference for writing **JavaScript** in **Minecraft Education's Code Builder** (Microsoft MakeCode for Minecraft).

There's no official list of every function you can call from JavaScript. This repo generates one from the same API data that powers the editor's autocomplete, so it covers everything the editor knows about, with signatures, parameter descriptions, default values, and the matching block.

**Covers MakeCode for Minecraft v2.1.27** (MakeCode 12.1.17), the version in Minecraft Education as of September 2026.

**Read it online:** https://arp-299-org.github.io/makecode-minecraft-js-reference/

## Start here

- **[JavaScript guide](docs/javascript-guide.md)**: how programs run, positions, constants, and which JavaScript features work. Every feature was tested in Minecraft Education.
- **[API reference](docs/api/README.md)**: every namespace and function
  - [player](docs/api/player.md) · [agent](docs/api/agent.md) · [blocks](docs/api/blocks.md) · [mobs](docs/api/mobs.md) · [gameplay](docs/api/gameplay.md) · [positions](docs/api/positions.md) · [builder](docs/api/builder.md) · [shapes](docs/api/shapes.md) · [events](docs/api/events.md)
  - [loops](docs/api/loops.md) · [Math](docs/api/Math.md) · [String](docs/api/String.md) · [Array](docs/api/Array.md)
  - [Global functions](docs/api/globals.md) (`pos`, `world`, `randint`, …)
  - [Enums and constants](docs/api/enums.md): every block, item, mob, and direction

## For AI agents and tools

- [llms.txt](llms.txt): a short index with links to every page as plain Markdown ([llmstxt.org](https://llmstxt.org))
- [llms-full.txt](llms-full.txt): the guide and the whole API reference in one file

Point your coding assistant at `llms-full.txt` before it writes Code Builder JavaScript.

## Quick example

```typescript
player.onChat("tower", function (height) {
    for (let i = 0; i < height; i++) {
        blocks.place(GOLD_BLOCK, pos(2, i, 2))
    }
    player.say(`Built a tower ${height} blocks tall`)
})
```

In the game, press **T** and type `tower 5`.

## How it's made

1. `scripts/fetch.js` loads the editor at [minecraft.makecode.com](https://minecraft.makecode.com), downloads its `target.js` bundle, and saves the API metadata and library sources to `data/`. That folder is Microsoft's code and data, so it isn't committed here: the script downloads it fresh each time.
2. `scripts/generate.js` combines the metadata (descriptions, defaults, block text) with the TypeScript declarations (exact signatures) and writes Markdown to `docs/api/`, plus `llms.txt` and `llms-full.txt`.

`docs/javascript-guide.md` is written by hand.

### Updating for a new Minecraft Education version

Requires [Node.js](https://nodejs.org) 18 or later.

```bash
npm install
npm run update
```

`npm run update` runs both scripts. Check the version in Code Builder under **⚙ → About** to confirm it matches the new `data/version.json`.

## License

- **Scripts** (`scripts/`): [MIT](https://github.com/Arp-299-Org/makecode-minecraft-js-reference/blob/main/LICENSE)
- **Documentation** (`docs/`, `llms.txt`, `llms-full.txt`): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Share and adapt it freely, with credit and a link back here.

The function descriptions, parameter descriptions, and block text in the API pages come from the MakeCode for Minecraft editor and belong to Microsoft; they aren't covered by these licenses.

## Disclaimer

This is an unofficial community project, not affiliated with or endorsed by Microsoft or Mojang. Minecraft is a trademark of Mojang Synergies AB. MakeCode is a trademark of Microsoft Corporation.
