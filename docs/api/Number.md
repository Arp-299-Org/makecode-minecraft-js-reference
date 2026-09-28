# Number

Number helpers.

| Member | Description |
|---|---|
| [`isNaN`](#isnan) | Check if a given value is of type Number and it is a NaN. |
| [`toString`](#tostring) | Returns a string representation of a number. |

## isNaN

Check if a given value is of type Number and it is a NaN.

```typescript
Number.isNaN(x: any): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `any` |  |

**Returns:** `boolean`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Number.isNaN("hello")
```

## toString

Returns a string representation of a number.

```typescript
num.toString(): string
```

**Returns:** `string`

**Block:** none. This is available in JavaScript only.

```typescript
let result = num.toString()
```
