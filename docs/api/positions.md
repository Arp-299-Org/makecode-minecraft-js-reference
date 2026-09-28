# positions

World and relative position operators

| Member | Description |
|---|---|
| [`create`](#create) | Creates a new relative position: ~East/West, ~up/down, ~South/North |
| [`createLocal`](#createlocal) | Creates a new local position: ~left/right, ~up/down, ~forwards/backwards |
| [`createWorld`](#createworld) | Creates a new world position: East/West, up/down, South/North |
| [`add`](#add) | Creates a new position by adding the two specified positions |
| [`equals`](#equals) | Compares whether two positions are equivalent |
| [`random`](#random) | Picks a random position within the specified cubic region |
| [`groundPosition`](#groundposition) | Finds the ground under the given position and returns the coordinates of the next air block just above it. |
| [`toCompassDirection`](#tocompassdirection) | Converts an angle in degrees to the closest CompassDirection |
| [`createCamera`](#createcamera) | Creates a new local position: ~left/right, ~up/down, ~forwards/backwards |
| [`createHybrid`](#createhybrid) | Creates a new position with a mix of relative and absolute coordinates, or local coordinates |

## create

Creates a new relative position: ~East/West, ~up/down, ~South/North

```typescript
positions.create(x: number, y: number, z: number): Position
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | The East (+x) or West (-x) coordinate, in blocks. |
| `y` | `number` | The up (+y) or down (-y) coordinate, in blocks. |
| `z` | `number` | The South (+z) or North (-z) coordinate, in blocks. |

**Returns:** `Position`

**Block:** none. This is available in JavaScript only.

```typescript
let result = positions.create(0, 0, 0)
```

## createLocal

Creates a new local position: ~left/right, ~up/down, ~forwards/backwards

```typescript
positions.createLocal(x: number, y: number, z: number): Position
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | The left (+x) or right (-x) coordinate, in blocks. |
| `y` | `number` | The up (+y) or down (-y) coordinate, in blocks. |
| `z` | `number` | The forwards (+z) or backwards (-z) coordinate, in blocks. |

**Returns:** `Position`

**Block:** none. This is available in JavaScript only.

```typescript
let result = positions.createLocal(0, 0, 0)
```

## createWorld

Creates a new world position: East/West, up/down, South/North

```typescript
positions.createWorld(x: number, y: number, z: number): Position
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | The East (+x) or West (-x) coordinate, in blocks. |
| `y` | `number` | The up (+y) or down (-y) coordinate, in blocks. |
| `z` | `number` | The South (+z) or North (-z) coordinate, in blocks. |

**Returns:** `Position`

**Block:** none. This is available in JavaScript only.

```typescript
let result = positions.createWorld(0, 0, 0)
```

## add

Creates a new position by adding the two specified positions

```typescript
positions.add(p1: Position, p2: Position): Position
```

| Parameter | Type | Description |
|---|---|---|
| `p1` | `Position` | The first position to add. |
| `p2` | `Position` | The second position to add. |

**Returns:** `Position`

**Block:** [p1] + [p2]

```typescript
let result = positions.add(pos(0, 0, 0), pos(0, 0, 0))
```

## equals

Compares whether two positions are equivalent

```typescript
positions.equals(p1: Position, p2: Position): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `p1` | `Position` | The first position to compare. |
| `p2` | `Position` | The second position to compare. |

**Returns:** `boolean`

**Block:** [p1] equals [p2]

```typescript
let result = positions.equals(pos(0, 0, 0), pos(0, 0, 0))
```

## random

Picks a random position within the specified cubic region

```typescript
positions.random(p1: Position, p2: Position): Position
```

| Parameter | Type | Description |
|---|---|---|
| `p1` | `Position` | The position of the first corner of the cubic region. |
| `p2` | `Position` | The position of the opposite corner of the cubic region. |

**Returns:** `Position`

**Block:** none. This is available in JavaScript only.

```typescript
let result = positions.random(pos(0, 0, 0), pos(0, 0, 0))
```

## groundPosition

Finds the ground under the given position and returns the coordinates of the next air block just above it. If the given block is solid, the next air block underneath is found, and the scan starts from there. Liquids are considered solid.

```typescript
positions.groundPosition(pos: Position): Position
```

| Parameter | Type | Description |
|---|---|---|
| `pos` | `Position` | The position under which to find the ground. |

**Returns:** `Position`

**Block:** ground at [pos]

```typescript
let result = positions.groundPosition(pos(0, 0, 0))
```

## toCompassDirection

Converts an angle in degrees to the closest CompassDirection

```typescript
positions.toCompassDirection(deg: number): CompassDirection
```

| Parameter | Type | Description |
|---|---|---|
| `deg` | `number` | The orientation (in degrees) to find the compass direction for. |

**Returns:** `CompassDirection`

**Block:** orientation [deg] to compass direction

```typescript
let result = positions.toCompassDirection(0)
```

## createCamera

Creates a new local position: ~left/right, ~up/down, ~forwards/backwards

```typescript
positions.createCamera(x: number, y: number, z: number): Position
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | The left (+x) or right (-x) coordinate, in blocks. |
| `y` | `number` | The up (+y) or down (-y) coordinate, in blocks. |
| `z` | `number` | The forwards (+z) or backwards (-z) coordinate, in blocks. |

**Returns:** `Position`

**Block:** none. This is available in JavaScript only.

```typescript
let result = positions.createCamera(0, 0, 0)
```

## createHybrid

Creates a new position with a mix of relative and absolute coordinates, or local coordinates

```typescript
positions.createHybrid(xRaw: string, yRaw: string, zRaw: string): Position
```

| Parameter | Type | Description |
|---|---|---|
| `xRaw` | `string` |  |
| `yRaw` | `string` |  |
| `zRaw` | `string` |  |

**Returns:** `Position`

**Block:** none. This is available in JavaScript only.

```typescript
let result = positions.createHybrid("hello", "hello", "hello")
```
