# builder

A 3D builder interface

| Member | Description |
|---|---|
| [`move`](#move) | Moves the builder in the specified direction |
| [`turn`](#turn) | Turns the builder in the specified direction |
| [`mark`](#mark) | Marks the current builder's position |
| [`teleportTo`](#teleportto) | Teleports the builder to the specified position |
| [`place`](#place) | Places a block at the current location and sets the mark |
| [`tracePath`](#tracepath) | Traces the path travelled since the last marked position with the specified block type |
| [`shift`](#shift) | Moves the builder in multiple directions at once |
| [`fill`](#fill) | Fills the volume between the current position and the previous mark |
| [`line`](#line) | Creates a line of blocks between the builder's current position and the last marked position |
| [`face`](#face) | Makes the builder face the specified direction |
| [`setOrigin`](#setorigin) | Sets the builder's origin to the builder's current location |
| [`teleportToOrigin`](#teleporttoorigin) | Teleports the builder to its origin |
| [`position`](#position) | Gets the current position of the builder |
| [`raiseWall`](#raisewall) | Raises a wall of the specified block type and height along the path the builder travelled since the last marked position |
| [`copy`](#copy) | Copies the cubic region from the last marked position to the builder's current position |
| [`paste`](#paste) | Pastes the previously copied region at the builder's current position |
| [`pushState`](#pushstate) | Pushes the builder's curent state onto the state stack |
| [`popState`](#popstate) | Reverts the builder's state to the most recently pushed state on the state stack |
| [`startStructure`](#startstructure) | Starts a structure. |
| [`saveStructure`](#savestructure) | Saves the structure with the given name. |
| [`loadStructure`](#loadstructure) | Loads a structure with the given name at the builder's current position. |

## move

Moves the builder in the specified direction

```typescript
builder.move(direction: SixDirection, blocks: number): void
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`SixDirection`](enums.md#sixdirection) | The direction in which to move the builder. |
| `blocks` | `number` | How far the builder should move, in blocks. Default: `1`. |

**Block:** builder move [direction] by [blocks]

```typescript
builder.move(FORWARD, 1)
```

## turn

Turns the builder in the specified direction

```typescript
builder.turn(direction: TurnDirection): void
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`TurnDirection`](enums.md#turndirection) | The turn direction. Default: `TurnDirection.Left`. |

**Block:** builder turn [direction]

```typescript
builder.turn(TurnDirection.Left)
```

## mark

Marks the current builder's position

```typescript
builder.mark(): void
```

**Block:** builder place mark

```typescript
builder.mark()
```

## teleportTo

Teleports the builder to the specified position

```typescript
builder.teleportTo(position: Position): void
```

| Parameter | Type | Description |
|---|---|---|
| `position` | `Position` | The position to move the builder to. |

**Block:** builder teleport to [position]

```typescript
builder.teleportTo(pos(0, 0, 0))
```

## place

Places a block at the current location and sets the mark

```typescript
builder.place(block: Block): void
```

| Parameter | Type | Description |
|---|---|---|
| `block` | [`Block`](enums.md#block) | The type of block to place. |

**Block:** place [block]

```typescript
builder.place(STONE)
```

## tracePath

Traces the path travelled since the last marked position with the specified block type

```typescript
builder.tracePath(block: Block): void
```

| Parameter | Type | Description |
|---|---|---|
| `block` | [`Block`](enums.md#block) | The type of block to use to trace the builder's path. |

**Block:** builder trace path from mark with [block]

```typescript
builder.tracePath(STONE)
```

## shift

Moves the builder in multiple directions at once

```typescript
builder.shift(forward: number, up: number, left: number): void
```

| Parameter | Type | Description |
|---|---|---|
| `forward` | `number` | The number of blocks by which to move forward. Default: `1`. |
| `up` | `number` | The number of blocks by which to move up. Default: `1`. |
| `left` | `number` | The number of blocks by which to move left. Default: `1`. |

**Block:** builder move forward [forward] up [up] left [left]

```typescript
builder.shift(1, 1, 1)
```

## fill

Fills the volume between the current position and the previous mark

```typescript
builder.fill(block: Block, operator?: FillOperation): void
```

| Parameter | Type | Description |
|---|---|---|
| `block` | [`Block`](enums.md#block) | The type of block to use to fill the region. |
| `operator` *(optional)* | [`FillOperation`](enums.md#filloperation) |  |

**Block:** builder fill from mark with [block]

```typescript
builder.fill(STONE)
```

## line

Creates a line of blocks between the builder's current position and the last marked position

```typescript
builder.line(block: Block): void
```

| Parameter | Type | Description |
|---|---|---|
| `block` | [`Block`](enums.md#block) | The type of block to use to build line. |

**Block:** builder line from mark with [block]

```typescript
builder.line(STONE)
```

## face

Makes the builder face the specified direction

```typescript
builder.face(direction: CompassDirection): void
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`CompassDirection`](enums.md#compassdirection) | The direction that the builder should face after the turn. |

**Block:** builder face [direction]

```typescript
builder.face(WEST)
```

## setOrigin

Sets the builder's origin to the builder's current location

```typescript
builder.setOrigin(): void
```

**Block:** builder set origin

```typescript
builder.setOrigin()
```

## teleportToOrigin

Teleports the builder to its origin

```typescript
builder.teleportToOrigin(): void
```

**Block:** builder teleport to origin

```typescript
builder.teleportToOrigin()
```

## position

Gets the current position of the builder

```typescript
builder.position(): Position
```

**Returns:** `Position`

**Block:** builder position

```typescript
let result = builder.position()
```

## raiseWall

Raises a wall of the specified block type and height along the path the builder travelled since the last marked position

```typescript
builder.raiseWall(block: Block, height: number): void
```

| Parameter | Type | Description |
|---|---|---|
| `block` | [`Block`](enums.md#block) | The type of block to use for the wall. |
| `height` | `number` | The height of the wall in blocks. Default: `5`. |

**Block:** builder raise wall from mark with [block] of [height]

```typescript
builder.raiseWall(STONE, 5)
```

## copy

Copies the cubic region from the last marked position to the builder's current position

```typescript
builder.copy(): void
```

**Block:** builder copy from mark

```typescript
builder.copy()
```

## paste

Pastes the previously copied region at the builder's current position

```typescript
builder.paste(): void
```

**Block:** builder paste

```typescript
builder.paste()
```

## pushState

Pushes the builder's curent state onto the state stack

```typescript
builder.pushState(): void
```

**Block:** builder push state

```typescript
builder.pushState()
```

## popState

Reverts the builder's state to the most recently pushed state on the state stack

```typescript
builder.popState(): void
```

**Block:** builder pop state

```typescript
builder.popState()
```

## startStructure

Starts a structure. Placing, filling, or drawing lines with blocks will cause locations to be added to the structure. Use "save structure" to save the structure to memory and "load structure" to instantly rebuild it.

```typescript
builder.startStructure(): void
```

**Block:** builder start structure

```typescript
builder.startStructure()
```

## saveStructure

Saves the structure with the given name. The sturcture is only saved if called after "start structure"

```typescript
builder.saveStructure(name: string, includeEntities?: boolean, replaceAirWithVoid?: boolean): void
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` |  Default: `"my structure"`. |
| `includeEntities` *(optional)* | `boolean` |  |
| `replaceAirWithVoid` *(optional)* | `boolean` |  |

**Block:** builder save structure as [name]

```typescript
builder.saveStructure("my structure")
```

## loadStructure

Loads a structure with the given name at the builder's current position.

```typescript
builder.loadStructure(name: string, rotation?: StructureRotation, mirror?: StructureMirrorAxis): void
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` |  Default: `"my structure"`. |
| `rotation` *(optional)* | [`StructureRotation`](enums.md#structurerotation) |  |
| `mirror` *(optional)* | [`StructureMirrorAxis`](enums.md#structuremirroraxis) |  |

**Block:** builder load structure [name]

```typescript
builder.loadStructure("my structure")
```
