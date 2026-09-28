# Global functions

These can be called without a namespace.

## isNaN

```typescript
isNaN(x: number): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` |  |

```typescript
let result = isNaN(0)
```

## parseFloat

Convert a string to a number.

```typescript
parseFloat(text: string): number
```

| Parameter | Type | Description |
|---|---|---|
| `text` | `string` |  |

```typescript
let result = parseFloat("123")
```

## parseInt

Convert a string to an integer. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.

```typescript
parseInt(text: string, radix?: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `text` | `string` | A string to convert into an integral number. |
| `radix` | `number` | Optional A value between 2 and 36 that specifies the base of the number in text. |

```typescript
let result = parseInt("123")
```

## pos

Creates a new relative position: ~East/West, ~up/down, ~South/North

```typescript
pos(x: number, y: number, z: number): Position
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | The East (+x) or West (-x) coordinate, in blocks. |
| `y` | `number` | The up (+y) or down (-y) coordinate, in blocks. |
| `z` | `number` | The South (+z) or North (-z) coordinate, in blocks. |

```typescript
let result = pos(0, 0, 0)
```

## posCamera

Creates a new camera position: ~left/right, ~below/above, ~behind/in front

```typescript
posCamera(x: number, y: number, z: number): Position
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | The left (-x) or right (+x) coordinate, in blocks. |
| `y` | `number` | The below (-y) or above (+y) coordinate, in blocks. |
| `z` | `number` | The behind (-z) or in front (+z) coordinate, in blocks. |

```typescript
let result = posCamera(0, 0, 0)
```

## posLocal

Creates a new local position: ^left/right, ^up/down, ^forwards/backwards

```typescript
posLocal(x: number, y: number, z: number): Position
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | The left (+x) or right (-x) coordinate, in blocks. |
| `y` | `number` | The up (+y) or down (-y) coordinate, in blocks. |
| `z` | `number` | The forwards (+z) or backwards (-z) coordinate, in blocks. |

```typescript
let result = posLocal(0, 0, 0)
```

## randint

Returns a pseudorandom number between min and max included. If both numbers are integral, the result is integral.

```typescript
randint(min: number, max: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `min` | `number` | The lower inclusive bound. |
| `max` | `number` | The upper inclusive bound. |

```typescript
let result = randint(0, 10)
```

## randpos

Picks a random position within the specified cubic region

```typescript
randpos(p1: Position, p2: Position): Position
```

| Parameter | Type | Description |
|---|---|---|
| `p1` | `Position` | The position of the first corner of the cubic region. |
| `p2` | `Position` | The position of the opposite corner of the cubic region. |

```typescript
let result = randpos(pos(0, 0, 0), pos(0, 0, 0))
```

## world

Creates a new world position: East/West, up/down, South/North

```typescript
world(x: number, y: number, z: number): Position
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | The East (+x) or West (-x) coordinate, in blocks. |
| `y` | `number` | The up (+y) or down (-y) coordinate, in blocks. |
| `z` | `number` | The South (+z) or North (-z) coordinate, in blocks. |

```typescript
let result = world(0, 0, 0)
```
