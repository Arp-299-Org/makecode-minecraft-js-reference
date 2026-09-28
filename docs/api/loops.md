# loops

Repeat code and pause.

| Member | Description |
|---|---|
| [`forever`](#forever) | Repeat the code forever in the background. |
| [`pause`](#pause) | Pause for the specified time in milliseconds |
| [`runInBackground`](#runinbackground) | Run this code in parallel with the current code |

## forever

Repeat the code forever in the background. On each iteration, allow other code to run.

```typescript
loops.forever(body: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `body` | `() => void` | Code to repeat forever. |

**Block:** forever

```typescript
loops.forever(() => {
    // your code here
})
```

## pause

Pause for the specified time in milliseconds

```typescript
loops.pause(ms: number): void
```

| Parameter | Type | Description |
|---|---|---|
| `ms` | `number` | How long to pause for. Default: `100`. |

**Block:** pause (ms) [pause]

```typescript
loops.pause(100)
```

## runInBackground

Run this code in parallel with the current code

```typescript
loops.runInBackground(handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `() => void` | Code to run. |

**Block:** run in background

```typescript
loops.runInBackground(() => {
    // your code here
})
```
