# blocks

Everything for adding, inspecting, and changing blocks in the world.

| Member | Description |
|---|---|
| [`place`](#place) | Places a block in the world |
| [`onBlockPlaced`](#onblockplaced) | Runs code when a certain type of block is placed |
| [`onBlockBroken`](#onblockbroken) | Runs code when a certain type of block is mined or broken |
| [`block`](#block) | Represents a block from the game |
| [`item`](#item) | Represents an item from the game |
| [`testForBlock`](#testforblock) | Tests whether the block at the specified coordinate is of a certain type |
| [`fill`](#fill) | Fills a volume between two positions |
| [`print`](#print) | Creates the specified text in the game world, made of the specified block, at the given location |
| [`blockWithData`](#blockwithdata) | Represents a block or item from the game with a data value |
| [`blockById`](#blockbyid) | Represents a block or item from the game by its value ID |
| [`blockByName`](#blockbyname) | Represents a block or item from the game by its code name |
| [`lever`](#lever) | Creates a lever in a particular state |
| [`repeater`](#repeater) | Creates a repeater in a particular state |
| [`comparator`](#comparator) | Creates a comparator in a particular state |
| [`replace`](#replace) | Replaces all the blocks of a certain type inside the specified region with a new block type |
| [`clone`](#clone) | Clones a cubic region into a different location |
| [`cloneFiltered`](#clonefiltered) | Clones a cubic region into a different location, if the blocks in the region match a certain block type |
| [`saveStructure`](#savestructure) | Saves the structure name within a range of positions as a named object. |
| [`loadStructure`](#loadstructure) | Loads a structure with the given name at the player's current position. |
| [`deleteStructure`](#deletestructure) | Deletes the structure with the given name from memory. |
| [`nameOfBlock`](#nameofblock) |  |
| [`testForBlocks`](#testforblocks) | Tests whether the blocks in two regions match. |

## place

Places a block in the world

```typescript
blocks.place(block: Block, pos: Position): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `block` | [`Block`](enums.md#block) | The block to place. |
| `pos` | `Position` | The position at which to place the block. |

**Returns:** `boolean`

**Block:** place [block] at [pos]

```typescript
blocks.place(STONE, pos(0, 0, 0))
```

## onBlockPlaced

Runs code when a certain type of block is placed

```typescript
blocks.onBlockPlaced(block: Block, handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `block` | [`Block`](enums.md#block) | The type of block that should trigger this code when placed. |
| `handler` | `() => void` | Code to run. |

**Block:** on [block] placed

```typescript
blocks.onBlockPlaced(STONE, () => {
    // your code here
})
```

## onBlockBroken

Runs code when a certain type of block is mined or broken

```typescript
blocks.onBlockBroken(block: Block, handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `block` | [`Block`](enums.md#block) | The type of block that should trigger this code when broken. |
| `handler` | `() => void` | Code to run. |

**Block:** on [block] broken

```typescript
blocks.onBlockBroken(STONE, () => {
    // your code here
})
```

## block

Represents a block from the game

```typescript
blocks.block(block: Block): number
```

| Parameter | Type | Description |
|---|---|---|
| `block` | [`Block`](enums.md#block) | The block. |

**Returns:** `number`

**Block:** [block]

```typescript
let result = blocks.block(STONE)
```

## item

Represents an item from the game

```typescript
blocks.item(item: Item): number
```

| Parameter | Type | Description |
|---|---|---|
| `item` | [`Item`](enums.md#item) | The item. |

**Returns:** `number`

**Block:** item [item]

```typescript
let result = blocks.item(IRON_SHOVEL)
```

## testForBlock

Tests whether the block at the specified coordinate is of a certain type

```typescript
blocks.testForBlock(block: Block, pos: Position): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `block` | [`Block`](enums.md#block) | The type of the block to test for. |
| `pos` | `Position` | The coordinates where the block should be. |

**Returns:** `boolean`

**Block:** test for [block] at [pos]

```typescript
let result = blocks.testForBlock(STONE, pos(0, 0, 0))
```

## fill

Fills a volume between two positions

```typescript
blocks.fill(block: Block, from: Position, to: Position, operator?: FillOperation): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `block` | [`Block`](enums.md#block) | The block to fill the volume with. |
| `from` | `Position` | The first corner of the cubic region. |
| `to` | `Position` | The opposite corner of the cubic region. |
| `operator` *(optional)* | [`FillOperation`](enums.md#filloperation) | Handling for existing blocks in the specified region. |

**Returns:** `boolean`

**Block:** fill with [block] from [from] to [to] [operator]

```typescript
blocks.fill(STONE, pos(0, 0, 0), pos(0, 0, 0))
```

## print

Creates the specified text in the game world, made of the specified block, at the given location

```typescript
blocks.print(text: string, block: Block, position: Position, direction: CompassDirection): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `text` | `string` | The text to print in the world. Default: `HELLO`. |
| `block` | [`Block`](enums.md#block) | The block type that will be used to create the text. |
| `position` | `Position` | The coordinates where the text will be printed in the world. |
| `direction` | [`CompassDirection`](enums.md#compassdirection) | The axis along which the text will be printed. |

**Returns:** `boolean`

**Block:** print [text] of [block] at [position] along [direction]

```typescript
blocks.print("HELLO", STONE, pos(0, 0, 0), WEST)
```

## blockWithData

Represents a block or item from the game with a data value

```typescript
blocks.blockWithData(b: Block, data: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `b` | [`Block`](enums.md#block) | The block or item. |
| `data` | `number` | The data value for the block or item. |

**Returns:** `number`

**Block:** [block] with data [data]

```typescript
let result = blocks.blockWithData(STONE, 0)
```

## blockById

Represents a block or item from the game by its value ID

```typescript
blocks.blockById(id: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `id` | `number` | The ID of the block or item from the game. |

**Returns:** `number`

**Block:** block by ID [id]

```typescript
let result = blocks.blockById(0)
```

## blockByName

Represents a block or item from the game by its code name

```typescript
blocks.blockByName(name: string): number
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The name of the block. Default: `stone`. |

**Returns:** `number`

**Block:** block by name [name]

```typescript
let result = blocks.blockByName("stone")
```

## lever

Creates a lever in a particular state

```typescript
blocks.lever(position: LeverPosition): number
```

| Parameter | Type | Description |
|---|---|---|
| `position` | [`LeverPosition`](enums.md#leverposition) | The position state of the lever. |

**Returns:** `number`

**Block:** lever [position]

```typescript
let result = blocks.lever(BLOCK_BOTTOM_EAST_WHEN_OFF)
```

## repeater

Creates a repeater in a particular state

```typescript
blocks.repeater(direction: CompassDirection, delay: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`CompassDirection`](enums.md#compassdirection) | The direction which the repeater is facing. |
| `delay` | `number` | The delay for the repeater, in game ticks. |

**Returns:** `number`

**Block:** repeater facing [direction] delay [ticks]

```typescript
let result = blocks.repeater(WEST, 0)
```

## comparator

Creates a comparator in a particular state

```typescript
blocks.comparator(direction: CompassDirection, mode: ComparatorMode): number
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`CompassDirection`](enums.md#compassdirection) | The direction which the comparator is facing. |
| `mode` | [`ComparatorMode`](enums.md#comparatormode) | The comparison mode of the comparator. |

**Returns:** `number`

**Block:** comparator facing [direction] mode [mode]

```typescript
let result = blocks.comparator(WEST, ComparatorMode.Compare)
```

## replace

Replaces all the blocks of a certain type inside the specified region with a new block type

```typescript
blocks.replace(newblock: Block, oldblock: Block, from: Position, to: Position): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `newblock` | [`Block`](enums.md#block) | The new block type that will replace existing blocks. |
| `oldblock` | [`Block`](enums.md#block) | The block type that will be replaced by the new block type. |
| `from` | `Position` | The first corner of the cubic region. |
| `to` | `Position` | The opposite corner of the cubic region. |

**Returns:** `boolean`

**Block:** replace with [newblock] when block is [oldblock] from [from] to [to]

```typescript
blocks.replace(STONE, STONE, pos(0, 0, 0), pos(0, 0, 0))
```

## clone

Clones a cubic region into a different location

```typescript
blocks.clone(begin: Position, end: Position, destination: Position, mask: CloneMask, mode: CloneMode): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `begin` | `Position` | The first corner of the cubic region. |
| `end` | `Position` | The opposite corner of the cubic region. |
| `destination` | `Position` | The first corner of the destination region. |
| `mask` | [`CloneMask`](enums.md#clonemask) | How to handle air blocks. |
| `mode` | [`CloneMode`](enums.md#clonemode) | How to handle the cloned region. |

**Returns:** `boolean`

**Block:** clone from [begin] to [end] into [destination] mask [mask] mode [mode]

```typescript
blocks.clone(pos(0, 0, 0), pos(0, 0, 0), pos(0, 0, 0), CloneMask.Replace, CloneMode.Normal)
```

## cloneFiltered

Clones a cubic region into a different location, if the blocks in the region match a certain block type

```typescript
blocks.cloneFiltered(begin: Position, end: Position, destination: Position, block: Block, mode: CloneMode): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `begin` | `Position` | The first corner of the cubic region. |
| `end` | `Position` | The opposite corner of the cubic region. |
| `destination` | `Position` | The first corner of the destination region. |
| `block` | [`Block`](enums.md#block) | The block type to look for when cloning. |
| `mode` | [`CloneMode`](enums.md#clonemode) | How to handle the cloned region. |

**Returns:** `boolean`

**Block:** clone from [begin] to [end] into [destination] filtered by [block] mode [mode]

```typescript
blocks.cloneFiltered(pos(0, 0, 0), pos(0, 0, 0), pos(0, 0, 0), STONE, CloneMode.Normal)
```

## saveStructure

Saves the structure name within a range of positions as a named object.

```typescript
blocks.saveStructure(name: string, from: Position, to: Position, includeEntities?: boolean, saveMode?: StructureSaveMode, includeBlocks?: boolean): void
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` |  Default: `"my structure"`. |
| `from` | `Position` |  |
| `to` | `Position` |  |
| `includeEntities` *(optional)* | `boolean` |  Default: `true`. |
| `saveMode` *(optional)* | [`StructureSaveMode`](enums.md#structuresavemode) |  |
| `includeBlocks` *(optional)* | `boolean` |  Default: `true`. |

**Block:** save structure [name] from [from] to [to]

```typescript
blocks.saveStructure("my structure", pos(0, 0, 0), pos(0, 0, 0))
```

## loadStructure

Loads a structure with the given name at the player's current position.

```typescript
blocks.loadStructure(name: string, to: Position, rotation?: StructureRotation, mirror?: StructureMirrorAxis, animationMode?: StructureAnimationMode, animationSeconds?: number, includeEntities?: boolean, includeBlocks?: boolean, integrity?: any): void
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` |  Default: `"my structure"`. |
| `to` | `Position` |  |
| `rotation` *(optional)* | [`StructureRotation`](enums.md#structurerotation) |  |
| `mirror` *(optional)* | [`StructureMirrorAxis`](enums.md#structuremirroraxis) |  |
| `animationMode` *(optional)* | [`StructureAnimationMode`](enums.md#structureanimationmode) |  |
| `animationSeconds` *(optional)* | `number` |  |
| `includeEntities` *(optional)* | `boolean` |  Default: `true`. |
| `includeBlocks` *(optional)* | `boolean` |  Default: `true`. |
| `integrity` *(optional)* | `any` |  Default: `100`. |

**Block:** load structure [name] to [to]

```typescript
blocks.loadStructure("my structure", pos(0, 0, 0))
```

## deleteStructure

Deletes the structure with the given name from memory.

```typescript
blocks.deleteStructure(name: string): void
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` |  Default: `"my structure"`. |

**Block:** delete structure [name]

```typescript
blocks.deleteStructure("my structure")
```

## nameOfBlock

```typescript
blocks.nameOfBlock(block: Block): string
```

| Parameter | Type | Description |
|---|---|---|
| `block` | [`Block`](enums.md#block) |  |

**Returns:** `string`

**Block:** name of block [block]

```typescript
let result = blocks.nameOfBlock(STONE)
```

## testForBlocks

Tests whether the blocks in two regions match.

```typescript
blocks.testForBlocks(begin: Position, end: Position, destination: Position, mask?: TestForBlocksMask): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `begin` | `Position` |  |
| `end` | `Position` |  |
| `destination` | `Position` |  |
| `mask` *(optional)* | [`TestForBlocksMask`](enums.md#testforblocksmask) |  |

**Returns:** `boolean`

**Block:** none. This is available in JavaScript only.

```typescript
let result = blocks.testForBlocks(pos(0, 0, 0), pos(0, 0, 0), pos(0, 0, 0))
```
