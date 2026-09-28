# events

Run code when things happen in the world: blocks broken or placed, items crafted, mobs killed, players moving, and more.

| Member | Description |
|---|---|
| [`useMethod`](#usemethod) | A method of using an item. |
| [`deathCause`](#deathcause) | A cause of death for a player. |
| [`spawnerMethod`](#spawnermethod) | A method of using an entity (mob). |
| [`messageType`](#messagetype) | A type of message that can be sent by a player. |
| [`enchantmentName`](#enchantmentname) | Gets the name of an Enchantment. |
| [`enchantmentProperty`](#enchantmentproperty) | Gets the level or type of an Enchantment. |
| [`travelMode`](#travelmode) | A mode of travel for a player. |
| [`actorDamageCauseToString`](#actordamagecausetostring) |  |
| [`mobSpawnMethodToString`](#mobspawnmethodtostring) |  |
| [`onBlockBroken`](#onblockbroken) | Runs code whenever a block is broken. |
| [`onBlockPlaced`](#onblockplaced) | Runs code whenever a block is placed. |
| [`onCameraUsed`](#oncameraused) | Runs code whenever a camera is used. |
| [`onEndOfDay`](#onendofday) | Runs code when end of day is reached in-game |
| [`onEntitySpawned`](#onentityspawned) | Runs code whenever a new entity (mob) is spawned. |
| [`onItemAcquired`](#onitemacquired) | Runs code whenever a player acquires or picks up an item. |
| [`onItemCrafted`](#onitemcrafted) | Runs code when an item is crafted. |
| [`onItemDropped`](#onitemdropped) | Runs code when an item is dropped onto the ground. |
| [`onItemEquipped`](#onitemequipped) | Runs code when an item is equipped by the player into an armor slot or an off-hand slot. |
| [`onItemInteracted`](#oniteminteracted) | Runs code when an item is interacted with. |
| [`onItemSmelted`](#onitemsmelted) | Runs code when an item is smelted and removed from a furnace. |
| [`onItemUsed`](#onitemused) | Runs code when an item is used. |
| [`onMobKilled`](#onmobkilled) | Runs code when a mob is killed. |
| [`onPlayerBounced`](#onplayerbounced) | Runs code when a player bounces. |
| [`onPlayerDied`](#onplayerdied) | Runs code when a player dies. |
| [`onPlayerMessage`](#onplayermessage) | Runs code when a player sends a message. |
| [`onPlayerTeleported`](#onplayerteleported) | Runs code when a player is teleported. |
| [`onPlayerTravelled`](#onplayertravelled) | Runs code when a player travels across the world. |
| [`travelMethodToString`](#travelmethodtostring) |  |
| [`useMethodToString`](#usemethodtostring) |  |

## useMethod

> **Extension:** add **Events** from Extensions in Code Builder first.

A method of using an item. Used with the "on item used" event.

```typescript
events.useMethod(method: events.UseMethod): string
```

| Parameter | Type | Description |
|---|---|---|
| `method` | [`events.UseMethod`](enums.md#events-usemethod) |  |

**Returns:** `string`

**Block:** item use method [method]

```typescript
let result = events.useMethod(events.UseMethod)
```

## deathCause

> **Extension:** add **Events** from Extensions in Code Builder first.

A cause of death for a player. Used with the "on player died" event

```typescript
events.deathCause(method: events.ActorDamageCause): "none" | "override" | "contact" | "entity attack" | "projectile" | "suffocation" | "fall" | "fire...
```

| Parameter | Type | Description |
|---|---|---|
| `method` | [`events.ActorDamageCause`](enums.md#events-actordamagecause) |  |

**Returns:** `"none" | "override" | "contact" | "entity attack" | "projectile" | "suffocation" | "fall" | "fire...`

**Block:** death cause [method]

```typescript
let result = events.deathCause(events.ActorDamageCause)
```

## spawnerMethod

> **Extension:** add **Events** from Extensions in Code Builder first.

A method of using an entity (mob). Used with the "on entity/mob spawned" events

```typescript
events.spawnerMethod(method: events.MobSpawnMethod): string
```

| Parameter | Type | Description |
|---|---|---|
| `method` | [`events.MobSpawnMethod`](enums.md#events-mobspawnmethod) |  |

**Returns:** `string`

**Block:** entity spawner [method]

```typescript
let result = events.spawnerMethod(events.MobSpawnMethod)
```

## messageType

> **Extension:** add **Events** from Extensions in Code Builder first.

A type of message that can be sent by a player. Used with the "on message sent" event

```typescript
events.messageType(type: events.MessageType): string
```

| Parameter | Type | Description |
|---|---|---|
| `type` | [`events.MessageType`](enums.md#events-messagetype) |  |

**Returns:** `string`

**Block:** message type [type]

```typescript
let result = events.messageType(events.MessageType)
```

## enchantmentName

> **Extension:** add **Events** from Extensions in Code Builder first.

Gets the name of an Enchantment.

```typescript
events.enchantmentName(enchantment: events.Enchantment): string
```

| Parameter | Type | Description |
|---|---|---|
| `enchantment` | `events.Enchantment` |  Default: `myEnchantment`. |

**Returns:** `string`

**Block:** [enchantment] name

```typescript
let result = events.enchantmentName(myEnchantment)
```

## enchantmentProperty

> **Extension:** add **Events** from Extensions in Code Builder first.

Gets the level or type of an Enchantment.

```typescript
events.enchantmentProperty(enchantment: events.Enchantment, property: events.EnchantmentProperty): number
```

| Parameter | Type | Description |
|---|---|---|
| `enchantment` | `events.Enchantment` |  Default: `myEnchantment`. |
| `property` | [`events.EnchantmentProperty`](enums.md#events-enchantmentproperty) |  |

**Returns:** `number`

**Block:** [enchantment] [property]

```typescript
let result = events.enchantmentProperty(myEnchantment, events.EnchantmentProperty)
```

## travelMode

> **Extension:** add **Events** from Extensions in Code Builder first.

A mode of travel for a player. Used with the "on player travelled" event

```typescript
events.travelMode(method: TravelMethod): string
```

| Parameter | Type | Description |
|---|---|---|
| `method` | [`TravelMethod`](enums.md#travelmethod) |  |

**Returns:** `string`

**Block:** travel mode [method]

```typescript
let result = events.travelMode(UNKNOWN)
```

## actorDamageCauseToString

```typescript
events.actorDamageCauseToString(cause: events.ActorDamageCause): "none" | "override" | "contact" | "entity attack" | "projectile" | "suffocation" | "fall" | "fire...
```

| Parameter | Type | Description |
|---|---|---|
| `cause` | [`events.ActorDamageCause`](enums.md#events-actordamagecause) |  |

**Returns:** `"none" | "override" | "contact" | "entity attack" | "projectile" | "suffocation" | "fall" | "fire...`

**Block:** none. This is available in JavaScript only.

```typescript
let result = events.actorDamageCauseToString(events.ActorDamageCause)
```

## mobSpawnMethodToString

```typescript
events.mobSpawnMethodToString(spawnMethod: events.MobSpawnMethod): "unknown" | "spawn egg" | "command" | "dispenser" | "spawner"
```

| Parameter | Type | Description |
|---|---|---|
| `spawnMethod` | [`events.MobSpawnMethod`](enums.md#events-mobspawnmethod) |  |

**Returns:** `"unknown" | "spawn egg" | "command" | "dispenser" | "spawner"`

**Block:** none. This is available in JavaScript only.

```typescript
let result = events.mobSpawnMethodToString(events.MobSpawnMethod)
```

## onBlockBroken

Runs code whenever a block is broken.

```typescript
events.onBlockBroken(handler: (block: number, tool: number, count: number) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(block: number, tool: number, count: number) => void` | Code to run. It receives the values below. |
| ↳ `block` | `number` | The block that was broken. |
| ↳ `tool` | `number` |  |
| ↳ `count` | `number` |  |

**Block:** on [block] broken with [tool] [count]

```typescript
events.onBlockBroken((block, tool, count) => {
    // your code here
})
```

## onBlockPlaced

Runs code whenever a block is placed.

```typescript
events.onBlockPlaced(handler: (block: number, tool: number, count: number, method: events.BlockPlacementMethod) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(block: number, tool: number, count: number, method: events.BlockPlacementMethod) => void` | Code to run. It receives the values below. |
| ↳ `block` | `number` | The block that was placed. |
| ↳ `tool` | `number` |  |
| ↳ `count` | `number` |  |
| ↳ `method` | `events.BlockPlacementMethod` |  |

**Block:** on [block] placed with [tool] [count] [method]

```typescript
events.onBlockPlaced((block, tool, count, method) => {
    // your code here
})
```

## onCameraUsed

Runs code whenever a camera is used.

```typescript
events.onCameraUsed(handler: (isSelfie: boolean) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(isSelfie: boolean) => void` | Code to run. It receives the values below. |
| ↳ `isSelfie` | `boolean` | True if the camera was used to take a selfie, false otherwise. |

**Block:** on camera used [isSelfie]

```typescript
events.onCameraUsed((isSelfie) => {
    // your code here
})
```

## onEndOfDay

Runs code when end of day is reached in-game

```typescript
events.onEndOfDay(handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `() => void` | Code to run. |

**Block:** on end of day

```typescript
events.onEndOfDay(() => {
    // your code here
})
```

## onEntitySpawned

Runs code whenever a new entity (mob) is spawned. Example triggers: When you use an egg to spawn a mob, like a `Spawn Cow` egg When you summon a mob using the `summon` command

```typescript
events.onEntitySpawned(handler: (mob: number, spawner: string) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(mob: number, spawner: string) => void` | Code to run. It receives the values below. |
| ↳ `mob` | `number` | The mob that was spawned. |
| ↳ `spawner` | `string` |  |

**Block:** on [mob] spawned with [spawner]

```typescript
events.onEntitySpawned((mob, spawner) => {
    // your code here
})
```

## onItemAcquired

Runs code whenever a player acquires or picks up an item. Example triggers: When you pick up a stack of items someone dropped for you When you pick up cobblestone that you mined

```typescript
events.onItemAcquired(handler: (item: number, count: number, method: events.AcquisitionMethod) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(item: number, count: number, method: events.AcquisitionMethod) => void` | Code to run. It receives the values below. |
| ↳ `item` | `number` | The item that was acquired. |
| ↳ `count` | `number` |  |
| ↳ `method` | `events.AcquisitionMethod` |  |

**Block:** on [item] acquired with [count] [method]

```typescript
events.onItemAcquired((item, count, method) => {
    // your code here
})
```

## onItemCrafted

Runs code when an item is crafted. This event isn't currently active.

```typescript
events.onItemCrafted(handler: (item: number, count: number) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(item: number, count: number) => void` | Code to run. It receives the values below. |
| ↳ `item` | `number` |  |
| ↳ `count` | `number` |  |

**Block:** none. This is available in JavaScript only.

```typescript
events.onItemCrafted((item, count) => {
    // your code here
})
```

## onItemDropped

Runs code when an item is dropped onto the ground. Example triggers: When you drop items from your inventory When you press Q to drop your equipped item

```typescript
events.onItemDropped(handler: (item: number, count: number) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(item: number, count: number) => void` | Code to run. It receives the values below. |
| ↳ `item` | `number` | The item that was dropped. |
| ↳ `count` | `number` |  |

**Block:** on [item] dropped with [count]

```typescript
events.onItemDropped((item, count) => {
    // your code here
})
```

## onItemEquipped

Runs code when an item is equipped by the player into an armor slot or an off-hand slot. Example triggers: When you place a shield in your off-hand slot (by pressing F) When you put on a pair of iron leggings

```typescript
events.onItemEquipped(handler: (item: number, slot: number, enchantments: events.Enchantment[]) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(item: number, slot: number, enchantments: events.Enchantment[]) => void` | Code to run. It receives the values below. |
| ↳ `item` | `number` | The item that was equipped. |
| ↳ `slot` | `number` |  |
| ↳ `enchantments` | `events.Enchantment[]` |  |

**Block:** on [item] equipped to [slot] with [enchantments]

```typescript
events.onItemEquipped((item, slot, enchantments) => {
    // your code here
})
```

## onItemInteracted

Runs code when an item is interacted with. Example triggers: When you switch on a lever When you place a block down Note: Stepping on pressure pads will not trigger this event!

```typescript
events.onItemInteracted(handler: (item: number, count: number, method: events.ItemInteractMethod) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(item: number, count: number, method: events.ItemInteractMethod) => void` | Code to run. It receives the values below. |
| ↳ `item` | `number` | The item that was interacted with. |
| ↳ `count` | `number` |  |
| ↳ `method` | `events.ItemInteractMethod` |  |

**Block:** on [item] interacted with [count] [method]

```typescript
events.onItemInteracted((item, count, method) => {
    // your code here
})
```

## onItemSmelted

Runs code when an item is smelted and removed from a furnace. Example trigger: When you smelt iron ore in a furnace and remove the resulting iron ingots

```typescript
events.onItemSmelted(handler: (item: number, fuelSource: number) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(item: number, fuelSource: number) => void` | Code to run. It receives the values below. |
| ↳ `item` | `number` | The item that was removed from the furnace. |
| ↳ `fuelSource` | `number` |  |

**Block:** on [item] smelted with [fuelSource]

```typescript
events.onItemSmelted((item, fuelSource) => {
    // your code here
})
```

## onItemUsed

Runs code when an item is used. Example trigger: When you till soil with a hoe When you dump water out of a bucket

```typescript
events.onItemUsed(handler: (item: number, method: string) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(item: number, method: string) => void` | Code to run. It receives the values below. |
| ↳ `item` | `number` | The item that was used. |
| ↳ `method` | `string` |  |

**Block:** on [item] used with [method]

```typescript
events.onItemUsed((item, method) => {
    // your code here
})
```

## onMobKilled

Runs code when a mob is killed. Example trigger: When you use a sword to kill a zombie When you push a pig off a cliff to its death

```typescript
events.onMobKilled(handler: (mob: number, weapon: number, isMonster: boolean) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(mob: number, weapon: number, isMonster: boolean) => void` | Code to run. It receives the values below. |
| ↳ `mob` | `number` | The mob that was killed. |
| ↳ `weapon` | `number` |  |
| ↳ `isMonster` | `boolean` |  |

**Block:** on [mob] killed with [weapon] [isMonster]

```typescript
events.onMobKilled((mob, weapon, isMonster) => {
    // your code here
})
```

## onPlayerBounced

Runs code when a player bounces. Example trigger: When you bounce on a slime block When you bounce on a bed block

```typescript
events.onPlayerBounced(handler: (height: number, block: number) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(height: number, block: number) => void` | Code to run. It receives the values below. |
| ↳ `height` | `number` | How high the player bounced. |
| ↳ `block` | `number` |  |

**Block:** on player bounced [height] on [block]

```typescript
events.onPlayerBounced((height, block) => {
    // your code here
})
```

## onPlayerDied

Runs code when a player dies. Example triggers: When a player is blown up by a creeper When a player falls from a high place

```typescript
events.onPlayerDied(handler: (cause: string, mob: number) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(cause: string, mob: number) => void` | Code to run. It receives the values below. |
| ↳ `cause` | `string` | The cause of death, such as lava, suffocation, etc. |
| ↳ `mob` | `number` |  |

**Block:** on player died due to [cause] [mob]

```typescript
events.onPlayerDied((cause, mob) => {
    // your code here
})
```

## onPlayerMessage

Runs code when a player sends a message. Example triggers: When you use the `msg` command When you show a title in game

```typescript
events.onPlayerMessage(handler: (message: string, sender: string, receiver: string, messageType: string) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(message: string, sender: string, receiver: string, messageType: string) => void` | Code to run. It receives the values below. |
| ↳ `message` | `string` | The message that was sent. |
| ↳ `sender` | `string` |  |
| ↳ `receiver` | `string` |  |
| ↳ `messageType` | `string` |  |

**Block:** on [message] sent by [sender] to [receiver] with [messageType]

```typescript
events.onPlayerMessage((message, sender, receiver, messageType) => {
    // your code here
})
```

## onPlayerTeleported

Runs code when a player is teleported. Example triggers: When you use the `tp` command When you are teleported by a command block

```typescript
events.onPlayerTeleported(handler: (distance: number) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(distance: number) => void` | Code to run. It receives the values below. |
| ↳ `distance` | `number` | The distance teleported in meters. |

**Block:** on player teleported [distance] meters

```typescript
events.onPlayerTeleported((distance) => {
    // your code here
})
```

## onPlayerTravelled

Runs code when a player travels across the world. Example triggers: When you walk, fly, or swim

```typescript
events.onPlayerTravelled(handler: (location: Position, mode: string, distance: number) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `(location: Position, mode: string, distance: number) => void` | Code to run. It receives the values below. |
| ↳ `location` | `Position` | The position travelled to. |
| ↳ `mode` | `string` |  |
| ↳ `distance` | `number` |  |

**Block:** on player travelled to [location] via [mode] [distance]

```typescript
events.onPlayerTravelled((location, mode, distance) => {
    // your code here
})
```

## travelMethodToString

```typescript
events.travelMethodToString(travelMethod: TravelMethod): "fall" | "unknown" | "walk" | "swim water" | "climb" | "swim lava" | "fly" | "riding" | "sneak" |...
```

| Parameter | Type | Description |
|---|---|---|
| `travelMethod` | [`TravelMethod`](enums.md#travelmethod) |  |

**Returns:** `"fall" | "unknown" | "walk" | "swim water" | "climb" | "swim lava" | "fly" | "riding" | "sneak" |...`

**Block:** none. This is available in JavaScript only.

```typescript
let result = events.travelMethodToString(UNKNOWN)
```

## useMethodToString

```typescript
events.useMethodToString(useMethod: events.UseMethod): "unknown" | "equip armor" | "eat" | "attack" | "consume" | "throw" | "shoot" | "place" | "fill bo...
```

| Parameter | Type | Description |
|---|---|---|
| `useMethod` | [`events.UseMethod`](enums.md#events-usemethod) |  |

**Returns:** `"unknown" | "equip armor" | "eat" | "attack" | "consume" | "throw" | "shoot" | "place" | "fill bo...`

**Block:** none. This is available in JavaScript only.

```typescript
let result = events.useMethodToString(events.UseMethod)
```
