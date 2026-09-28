# console

Write debugging output.

| Member | Description |
|---|---|
| [`inspect`](#inspect) | Convert any object or value to a string representation |
| [`log`](#log) |  |

## inspect

Convert any object or value to a string representation

```typescript
console.inspect(obj: any, maxElements?: any): string
```

| Parameter | Type | Description |
|---|---|---|
| `obj` | `any` | Value to be converted to a string. |
| `maxElements` *(optional)* | `any` | [optional] max number values in an object to include in output. |

**Returns:** `string`

**Block:** none. This is available in JavaScript only.

```typescript
let result = console.inspect("hello")
```

## log

```typescript
console.log(msg: any): void
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `any` |  |

**Block:** none. This is available in JavaScript only.

```typescript
console.log("hello")
```
