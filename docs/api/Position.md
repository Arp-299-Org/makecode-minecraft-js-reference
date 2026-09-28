# Position

A world coordinate that may be relative (~) or local (^) to the player position.

`Position` is a class. In the examples below, `position` stands for a value of this type.

| Member | Description |
|---|---|
| [`getValue`](#getvalue) | Gets the value of the specified coordinate: x, y or z |
| [`toWorld`](#toworld) | Creates a new world position by converting this position to a world position |
| [`toString`](#tostring) | Returns a string representation of this position |
| [`add`](#add) | Adds the offset and returns a new position |
| [`isRelative`](#isrelative) | Gets a value that indicates if the coordinate is relative to the user |
| [`move`](#move) | Returns a position moved by the given blocks |

## getValue

Gets the value of the specified coordinate: x, y or z

```typescript
position.getValue(direction: Axis): number
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`Axis`](enums.md#axis) | The axis for which to return the coordinate value. |

**Returns:** `number`

**Block:** [position] get value of [direction]

```typescript
let result = position.getValue(Axis.X)
```

## toWorld

Creates a new world position by converting this position to a world position

```typescript
position.toWorld(): Position
```

**Returns:** `Position`

**Block:** [position] to world

```typescript
let result = position.toWorld()
```

## toString

Returns a string representation of this position

```typescript
position.toString(): string
```

**Returns:** `string`

**Block:** [position] to string

```typescript
let result = position.toString()
```

## add

Adds the offset and returns a new position

```typescript
position.add(offset: Position): Position
```

| Parameter | Type | Description |
|---|---|---|
| `offset` | `Position` |  |

**Returns:** `Position`

**Block:** none. This is available in JavaScript only.

```typescript
let result = position.add(pos(0, 0, 0))
```

## isRelative

Gets a value that indicates if the coordinate is relative to the user

```typescript
position.isRelative(direction: Axis): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`Axis`](enums.md#axis) |  |

**Returns:** `boolean`

**Block:** none. This is available in JavaScript only.

```typescript
let result = position.isRelative(Axis.X)
```

## move

Returns a position moved by the given blocks

```typescript
position.move(direction: CardinalDirection, blocks: number): Position
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`CardinalDirection`](enums.md#cardinaldirection) |  |
| `blocks` | `number` |  |

**Returns:** `Position`

**Block:** none. This is available in JavaScript only.

```typescript
let result = position.move(NORTH_CARDINAL_DIRECTION, 0)
```
