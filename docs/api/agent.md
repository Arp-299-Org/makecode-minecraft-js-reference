# agent

Your assistant in Minecraft to help you get things done.

| Member | Description |
|---|---|
| [`teleportToPlayer`](#teleporttoplayer) | Teleports the agent to the player |
| [`teleportToUser`](#teleporttouser) | Teleports the agent to the user |
| [`move`](#move) | Requests the agent to move in the specified direction |
| [`turn`](#turn) | Turns the agent in the specified direction |
| [`getPosition`](#getposition) | Returns the agent's position in world coordinates |
| [`getOrientation`](#getorientation) | Returns the agent's orientation, in degrees |
| [`teleport`](#teleport) | Teleports the agent to the specified coordinates facing the specified orientation |
| [`setAssist`](#setassist) | Controls which assists are enabled for the agent |
| [`place`](#place) | Places an item or block in the world from the agent's currently selected inventory slot |
| [`interact`](#interact) | Interacts with an item |
| [`destroy`](#destroy) | Commands the agent to destroy a block in the given direction |
| [`till`](#till) | Commands the agent to till soil in the given direction |
| [`attack`](#attack) | Commands the agent to attack in the given direction |
| [`collectAll`](#collectall) | Commands the agent to collect all nearby blocks and items |
| [`collect`](#collect) | Commands the agent to Collect a block or item of the specified type |
| [`inspectBlock`](#inspectblock) | Inspects a block in the specified direction and returns the block ID |
| [`detect`](#detect) | Detects if there is a block next to the agent in the specified direction |
| [`setSlot`](#setslot) | Sets the agent's active inventory slot |
| [`setItem`](#setitem) | Puts the specified block or item in the agent's inventory |
| [`dropAll`](#dropall) | Commands the agent to drop its entire inventory in the given direction |
| [`drop`](#drop) | Drops an item from the inventory |
| [`transfer`](#transfer) | Transfers items from an inventory slot to another slot |
| [`getItemCount`](#getitemcount) | Gets the number of items in the specified slot |
| [`getItemDetail`](#getitemdetail) | Gets the ID of the item in the specified inventory slot of the agent |
| [`getItemSpace`](#getitemspace) | Gets the remaining space in the specified slot |
| [`turnLeft`](#turnleft) | Turn the agent left by 90 degrees. |
| [`turnRight`](#turnright) | Turn the agent right by 90 degrees. |

## teleportToPlayer

Teleports the agent to the player

```typescript
agent.teleportToPlayer(): boolean
```

**Returns:** `boolean`

**Block:** none. This is available in JavaScript only.

```typescript
agent.teleportToPlayer()
```

## teleportToUser

> **Not available by default:** this comes from the `nether` library, which Minecraft Education projects don't load.

Teleports the agent to the user

```typescript
agent.teleportToUser(): void
```

**Block:** agent teleport to user

```typescript
agent.teleportToUser()
```

## move

Requests the agent to move in the specified direction

```typescript
agent.move(direction: SixDirection, blocks: number): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`SixDirection`](enums.md#sixdirection) | The direction in which the agent will move. |
| `blocks` | `number` | How far the agent should move, in blocks. Default: `1`. |

**Returns:** `boolean`

**Block:** agent move [direction] by [blocks]

```typescript
agent.move(FORWARD, 1)
```

## turn

Turns the agent in the specified direction

```typescript
agent.turn(direction: TurnDirection): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`TurnDirection`](enums.md#turndirection) | The turn direction. Default: `TurnDirection.Left`. |

**Returns:** `boolean`

**Block:** agent turn [direction]

```typescript
agent.turn(TurnDirection.Left)
```

## getPosition

Returns the agent's position in world coordinates

```typescript
agent.getPosition(): Position
```

**Returns:** `Position`

**Block:** agent position

```typescript
let result = agent.getPosition()
```

## getOrientation

Returns the agent's orientation, in degrees

```typescript
agent.getOrientation(): number
```

**Returns:** `number`

**Block:** agent orientation

```typescript
let result = agent.getOrientation()
```

## teleport

Teleports the agent to the specified coordinates facing the specified orientation

```typescript
agent.teleport(pos: Position, dir: CompassDirection): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `pos` | `Position` | The position to teleport the agent to. |
| `dir` | [`CompassDirection`](enums.md#compassdirection) | The compass direction the agent should face after teleporting. |

**Returns:** `boolean`

**Block:** agent teleport to [pos] facing [dir]

```typescript
agent.teleport(pos(0, 0, 0), WEST)
```

## setAssist

Controls which assists are enabled for the agent

```typescript
agent.setAssist(assist: AgentAssist, on: boolean): void
```

| Parameter | Type | Description |
|---|---|---|
| `assist` | [`AgentAssist`](enums.md#agentassist) | The super power of the agent! |
| `on` | `boolean` | Whether the assist is enabled or not. |

**Block:** agent [assist] [on]

```typescript
agent.setAssist(PLACE_ON_MOVE, true)
```

## place

Places an item or block in the world from the agent's currently selected inventory slot

```typescript
agent.place(direction: SixDirection): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`SixDirection`](enums.md#sixdirection) | The direction in which to place the item. |

**Returns:** `boolean`

**Block:** agent place [direction]

```typescript
agent.place(FORWARD)
```

## interact

Interacts with an item

```typescript
agent.interact(direction: SixDirection): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`SixDirection`](enums.md#sixdirection) | The direction in which to place the item. |

**Returns:** `boolean`

**Block:** agent interact [direction]

```typescript
agent.interact(FORWARD)
```

## destroy

Commands the agent to destroy a block in the given direction

```typescript
agent.destroy(direction: SixDirection): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`SixDirection`](enums.md#sixdirection) | The direction in which the agent will destroy a block. |

**Returns:** `boolean`

**Block:** agent destroy [direction]

```typescript
agent.destroy(FORWARD)
```

## till

Commands the agent to till soil in the given direction

```typescript
agent.till(direction: SixDirection): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`SixDirection`](enums.md#sixdirection) | The direction in which to till the soil. |

**Returns:** `boolean`

**Block:** agent till [direction]

```typescript
agent.till(FORWARD)
```

## attack

Commands the agent to attack in the given direction

```typescript
agent.attack(direction: SixDirection): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`SixDirection`](enums.md#sixdirection) | The direction in which to attack. |

**Returns:** `boolean`

**Block:** none. This is available in JavaScript only.

```typescript
agent.attack(FORWARD)
```

## collectAll

Commands the agent to collect all nearby blocks and items

```typescript
agent.collectAll(): boolean
```

**Returns:** `boolean`

**Block:** agent collect all

```typescript
agent.collectAll()
```

## collect

Commands the agent to Collect a block or item of the specified type

```typescript
agent.collect(block: Item): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `block` | [`Item`](enums.md#item) | The type of the block or item to collect. |

**Returns:** `boolean`

**Block:** agent collect [block]

```typescript
agent.collect(IRON_SHOVEL)
```

## inspectBlock

Inspects a block in the specified direction and returns the block ID

```typescript
agent.inspectBlock(direction: SixDirection): number
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`SixDirection`](enums.md#sixdirection) | The direction in which to inspect. |

**Returns:** `number`

**Block:** agent inspect block [direction]

```typescript
let result = agent.inspectBlock(FORWARD)
```

## detect

Detects if there is a block next to the agent in the specified direction

```typescript
agent.detect(kind: AgentDetection, direction: SixDirection): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `kind` | [`AgentDetection`](enums.md#agentdetection) | What the agent should attempt to detect. |
| `direction` | [`SixDirection`](enums.md#sixdirection) | The direction in which to perform the detection. |

**Returns:** `boolean`

**Block:** agent detect [kind] [direction]

```typescript
let result = agent.detect(AgentDetection.Block, FORWARD)
```

## setSlot

Sets the agent's active inventory slot

```typescript
agent.setSlot(slot: number): void
```

| Parameter | Type | Description |
|---|---|---|
| `slot` | `number` | The slot index between 1 and 27. Default: `1`. |

**Block:** agent set active slot [slot]

```typescript
agent.setSlot(1)
```

## setItem

Puts the specified block or item in the agent's inventory

```typescript
agent.setItem(blockOrItem: Block, count: number, slot: number): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `blockOrItem` | [`Block`](enums.md#block) | The block or item to give. |
| `count` | `number` | The amount to give. Default: `1`. |
| `slot` | `number` | The slot index between 1 and 27. Default: `1`. |

**Returns:** `boolean`

**Block:** agent set block or item [blockOrItem] count [count] in slot [slot]

```typescript
agent.setItem(STONE, 1, 1)
```

## dropAll

Commands the agent to drop its entire inventory in the given direction

```typescript
agent.dropAll(direction: SixDirection): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`SixDirection`](enums.md#sixdirection) | The direction in which to drop items. |

**Returns:** `boolean`

**Block:** agent drop all [direction]

```typescript
agent.dropAll(FORWARD)
```

## drop

Drops an item from the inventory

```typescript
agent.drop(direction: SixDirection, slot: number, quantity: number): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `direction` | [`SixDirection`](enums.md#sixdirection) | The direction in which to drop the item. |
| `slot` | `number` | The slot from which the item will be dropped, from 1 to 27. Default: `1`. |
| `quantity` | `number` | The quantity of items to drop. Default: `1`. |

**Returns:** `boolean`

**Block:** agent drop [direction] from slot [slot] amount [amount]

```typescript
agent.drop(FORWARD, 1, 1)
```

## transfer

Transfers items from an inventory slot to another slot

```typescript
agent.transfer(quantity: number, sourceSlot: number, destinationSlot: number): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `quantity` | `number` | The quantity of items to transfer. Default: `1`. |
| `sourceSlot` | `number` | The source slot index, from 1 to 27. Default: `1`. |
| `destinationSlot` | `number` | The inventory slot in which to drop the items, from 1 to 27. Default: `2`. |

**Returns:** `boolean`

**Block:** agent transfer amount [quantity] from slot [srcSlot] to slot [destinationSlot]

```typescript
agent.transfer(1, 1, 2)
```

## getItemCount

Gets the number of items in the specified slot

```typescript
agent.getItemCount(slot: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `slot` | `number` | The slot index for which to count items, from 1 to 27. Default: `1`. |

**Returns:** `number`

**Block:** agent get item count from slot [slot]

```typescript
let result = agent.getItemCount(1)
```

## getItemDetail

Gets the ID of the item in the specified inventory slot of the agent

```typescript
agent.getItemDetail(slot: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `slot` | `number` | The slot index for which to return the item info, from 1 to 27. Default: `1`. |

**Returns:** `number`

**Block:** agent get item id from slot [slot]

```typescript
let result = agent.getItemDetail(1)
```

## getItemSpace

Gets the remaining space in the specified slot

```typescript
agent.getItemSpace(slot: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `slot` | `number` | The slot index for which to count the remaining space, from 1 to 27. Default: `1`. |

**Returns:** `number`

**Block:** agent get remaining space in slot [slot]

```typescript
let result = agent.getItemSpace(1)
```

## turnLeft

Turn the agent left by 90 degrees.

```typescript
agent.turnLeft(): void
```

**Block:** none. This is available in JavaScript only.

```typescript
agent.turnLeft()
```

## turnRight

Turn the agent right by 90 degrees.

```typescript
agent.turnRight(): void
```

**Block:** none. This is available in JavaScript only.

```typescript
agent.turnRight()
```
