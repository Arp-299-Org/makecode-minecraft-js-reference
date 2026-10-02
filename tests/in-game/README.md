# In-game tests

These programs check the claims in [the JavaScript guide](../../docs/javascript-guide.md) inside real Minecraft Education. Paste each one into Code Builder's JavaScript view and press Run.

- `works.ts`: every "Works ✅" row. After Run, type `check` in chat; each row prints PASS or FAIL.
- `doesnt-work/*.ts`: one program per "doesn't work" or "watch out" row. Each either shows an error in the Problems panel or prints what it actually did.

## Last run: October 2, 2026, Minecraft Education 26.32 (MakeCode v2.1.27, macOS)

| Test | Result |
|---|---|
| Every "Works ✅" row | All passed |
| Object destructuring | Works (the guide used to say it gives `undefined`; corrected) |
| Optional chaining | `Expression expected` |
| Spread | Compiles, but the spread part comes out empty (`",3"`); moved to "Watch out" |
| `async` / `await` | No error shown; Run does nothing |
| Regular expressions | Compiles, but the value is `undefined`; moved to "Watch out" |
| `JSON` | `Cannot find name 'JSON'` |
| `Map` | `Cannot find name 'Map'. Did you mean 'MAP'?` |
| `setTimeout` | `Cannot find name 'setTimeout'` |
| `Date` | `Cannot find name 'Date'` |
