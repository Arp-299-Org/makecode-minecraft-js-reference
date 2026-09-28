# JavaScript in Minecraft Education (MakeCode)

Code Builder's JavaScript view doesn't run full JavaScript. It runs **Static TypeScript**, a subset of TypeScript that MakeCode compiles ahead of time. Most everyday JavaScript works, but some features are missing.

Everything marked ✅ or ❌ on this page was tested in Minecraft Education with MakeCode for Minecraft **v2.1.27**.

## How a program runs

- Code at the top level runs once, when you press the green **Run** button. This is the same as the `on start` block.
- Event handlers, like `player.onChat`, run later, every time the event happens.
- Minecraft commands such as `agent.move` or `blocks.fill` wait until the game has finished them before your next line runs. You don't need `await`, and it isn't supported anyway.

```typescript
player.say("Program started")          // runs once, on Run

player.onChat("jump", function () {     // runs every time you type "jump" in chat
    player.teleport(pos(0, 10, 0))
})
```

Open chat with **T** and type the command. Numbers after the command are passed to the handler:

```typescript
player.onChat("tower", function (num1) {   // "tower 5" makes num1 = 5
    for (let i = 0; i < num1; i++) {
        blocks.place(GOLD_BLOCK, pos(2, i, 2))
    }
})
```

When you switch from Blocks to JavaScript, the editor writes handlers as `function () { }`. Arrow functions `() => { }` work too.

## Positions

Most commands take a `Position`. There are three ways to make one:

| Code | Meaning |
|---|---|
| `pos(x, y, z)` | **Relative** to the player (`~x ~y ~z`). `pos(0, 0, 0)` is where the player stands. |
| `world(x, y, z)` | **Absolute** world coordinates. |
| `posLocal(x, y, z)` | **Local** to where the player faces (`^x ^y ^z`). |

`x` is east (+) and west (−), `y` is up (+) and down (−), and `z` is south (+) and north (−).

```typescript
blocks.fill(STONE, pos(-2, 0, -2), pos(2, 0, 2), FillOperation.Replace)
let spot = pos(0, 0, 3).add(pos(0, 2, 0))   // positions can be added
```

See [Position](api/Position.md) for more.

## Blocks, items, mobs, and other values

Values from a fixed list use UPPERCASE constants, for example `GRASS`, `DIAMOND_SWORD`, `CHICKEN`, `FORWARD`, or `SURVIVAL`. The long form works too (`Block.Grass`, `SixDirection.Forward`). The full lists are in [Enums and constants](api/enums.md).

```typescript
agent.move(FORWARD, 3)
mobs.spawn(CHICKEN, pos(0, 0, 2))
blocks.place(DIAMOND_BLOCK, pos(1, 0, 0))
gameplay.setGameMode(CREATIVE, mobs.target(LOCAL_PLAYER))
```

## Language features

### Works ✅

| Feature | Example |
|---|---|
| Variables | `let n = 5`, `const name = "Steve"` |
| Type annotations | `let n: number = 5`, `function f(a: number): string` |
| Numbers, strings, booleans | `3.5`, `"text"`, `true` |
| Template strings | `` `Score: ${score}` `` |
| `if` / `else`, ternary | `let s = n > 3 ? "big" : "small"` |
| `for`, `for...of`, `while`, `do...while` | `for (let x of list) { }` |
| `switch` | `switch (k) { case 5: ...; break; default: ... }` |
| Functions with default parameters | `function add(a: number, b = 2) { return a + b }` |
| Arrow functions | `let f = (v: number) => v + 1` |
| Arrays and array methods | `list.push(4)`, `list.map(x => x * 2).filter(x => x > 2)`, `list.reduce((a, v) => a + v, 0)`, `list.join(",")` |
| String methods | `"abc".toUpperCase()`, `"abc".includes("b")` |
| Classes with constructors and methods | `class Tower { height: number; constructor(h: number) { this.height = h } }` |
| Enums | `enum Mode { Easy, Hard }` |
| Interfaces and object literals | `interface Pt { x: number; y: number }`, `let p: Pt = { x: 1, y: 2 }` |
| Generics | `function id<T>(v: T): T { return v }` |
| Union types | `let u: number \| string = 3` |
| `try` / `catch` / `throw` | `try { throw "oops" } catch (e) { }` |
| `typeof` | `typeof list` gives `"object"` |
| Array destructuring | `let [a, b] = list` |
| `any` objects | `let o: any = {}; o.foo = 3` |

### Doesn't work ❌

| Feature | Error you'll see | Use instead |
|---|---|---|
| Optional chaining `a?.b` | `Expression expected` | `if (a) { a.b }` |
| Spread `[...list, 3]` | `SpreadElement not supported` | `list.concat([3])` |
| `async` / `await` | `AwaitExpression not supported` | Nothing needed: commands already wait |
| Regular expressions `/ab+/` | `RegularExpressionLiteral not supported` | String methods like `includes`, `indexOf`, `split` |
| `JSON` | `Cannot find name 'JSON'` | Build strings yourself |
| `Map` | `Cannot find name 'Map'` | Arrays, or an object with `any` |
| `setTimeout` | `Cannot find name 'setTimeout'` | `loops.pause(ms)` |
| `Date` | `Cannot find name 'Date'` | `gameplay.timeQuery(...)` for game time |

### Watch out ⚠️

**Object destructuring compiles but doesn't work.** In this code, `x` ends up `undefined`, with no error:

```typescript
let { x, y } = { x: 1, y: 2 }   // x is undefined!
```

Write it out instead:

```typescript
let point = { x: 1, y: 2 }
let x = point.x
```

## Loops that run in the background

```typescript
loops.forever(function () {
    // runs again and again, forever
    loops.pause(1000)   // wait 1 second
})
```

## Debugging tips

- Press **Run** to see compile errors. They show up in the **Problems** panel under the code. The red underlines in the editor don't show everything.
- `player.say(value)` is the easiest way to print a value.
- If the editor can't turn your code back into blocks, it stays in JavaScript. That's fine: the code still runs.

## Full API reference

See the [API reference](api/README.md) for every namespace, function, and constant.
