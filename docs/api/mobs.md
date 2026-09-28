# mobs

Creatures that live in the Minecraft world.

| Member | Description |
|---|---|
| [`spawn`](#spawn) | Summons a creature at a given location |
| [`onMobEliminated`](#onmobeliminated) | Runs code when a creature of a certain type is eliminated |
| [`onMobKilled`](#onmobkilled) | Runs code when a creature of a certain type is killed |
| [`eliminate`](#eliminate) | Eliminates the selected entities |
| [`kill`](#kill) | Kills the selected entities |
| [`animal`](#animal) | Represents an animal from the game |
| [`creature`](#creature) | Represents a creature from the exploration |
| [`monster`](#monster) | Represents a monster from the game |
| [`projectile`](#projectile) | Represents a projectile from the game |
| [`applyEffect`](#applyeffect) | Applies a status effect to the specified target Applies a status effect to the specified target |
| [`clearEffect`](#cleareffect) | Clears all status effects from the specified target Clears all status effects from the specified target |
| [`give`](#give) | Gives blocks or items from the game to the specified players Gives blocks or items from the game to the specified players |
| [`teleportToPosition`](#teleporttoposition) | Teleports entities to another location Teleports entities to another location |
| [`teleportToPlayer`](#teleporttoplayer) | Teleports entities to a player |
| [`teleportToUser`](#teleporttouser) | Teleports entities to a user |
| [`boost`](#boost) | Applies a certain enchantment to the specified targets |
| [`enchant`](#enchant) | Applies a certain enchantment to the specified targets |
| [`executeDetect`](#executedetect) | Executes a command if a certain block type is detected at the specified position |
| [`execute`](#execute) | Executes a command as other targets Executes a command as other targets |
| [`spawnParticle`](#spawnparticle) | Spawns a particle effect at the given location |
| [`target`](#target) | Selects a set of players or mobs |
| [`targetUser`](#targetuser) | Selects a set of users or mobs |
| [`near`](#near) | Selects targets near a given position Selects targets near a given position |
| [`entitiesByType`](#entitiesbytype) | Selects all mobs (animals or monsters) of a given type |
| [`playerByName`](#playerbyname) | Selects the player with the given name |
| [`playersInGameMode`](#playersingamemode) | Selects all players in the given game mode |
| [`userByName`](#userbyname) | Selects the user with the given name |
| [`usersInExplorationMode`](#usersinexplorationmode) | Selects all users in the given exploration mode |
| [`isMonster`](#ismonster) |  |
| [`mobNameToId`](#mobnametoid) |  |
| [`parseSelector`](#parseselector) | Parses the given string into a TargetSelector object. |
| [`queryTarget`](#querytarget) | Queries information about a given target |

## spawn

Summons a creature at a given location

```typescript
mobs.spawn(mob: AnimalMob, destination: Position): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `mob` | [`AnimalMob`](enums.md#animalmob) | The type of creature to summon. Default: `CHICKEN`. |
| `destination` | `Position` | The coordinates at which to summon the creature. |

**Returns:** `boolean`

**Block:** spawn [entity] at [destination]

```typescript
mobs.spawn(CHICKEN, pos(0, 0, 0))
```

## onMobEliminated

> **Not available by default:** this comes from the `nether` library, which Minecraft Education projects don't load.

Runs code when a creature of a certain type is eliminated

```typescript
mobs.onMobEliminated(mob: AnimalMob, handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `mob` | [`AnimalMob`](enums.md#animalmob) | The type of creature. Default: `CHICKEN`. |
| `handler` | `() => void` | Code to run. |

**Block:** on [mob] eliminated

```typescript
mobs.onMobEliminated(CHICKEN, () => {
    // your code here
})
```

## onMobKilled

Runs code when a creature of a certain type is killed

```typescript
mobs.onMobKilled(mob: AnimalMob, handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `mob` | [`AnimalMob`](enums.md#animalmob) | The type of creature. Default: `CHICKEN`. |
| `handler` | `() => void` | Code to run. |

**Block:** none. This is available in JavaScript only.

```typescript
mobs.onMobKilled(CHICKEN, () => {
    // your code here
})
```

## eliminate

> **Not available by default:** this comes from the `nether` library, which Minecraft Education projects don't load.

Eliminates the selected entities

```typescript
mobs.eliminate(target: TargetSelector): void
```

| Parameter | Type | Description |
|---|---|---|
| `target` | `TargetSelector` | A target selector that determines which entities will be eliminated. |

**Block:** eliminate [target]

```typescript
mobs.eliminate(mobs.target(LOCAL_PLAYER))
```

## kill

Kills the selected entities

```typescript
mobs.kill(target: TargetSelector): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `target` | `TargetSelector` | A target selector that determines which entities will be killed. |

**Returns:** `boolean`

**Block:** none. This is available in JavaScript only.

```typescript
mobs.kill(mobs.target(LOCAL_PLAYER))
```

## animal

Represents an animal from the game

```typescript
mobs.animal(name: AnimalMob): number
```

| Parameter | Type | Description |
|---|---|---|
| `name` | [`AnimalMob`](enums.md#animalmob) | The type of the animal. |

**Returns:** `number`

**Block:** animal [name]

```typescript
let result = mobs.animal(CHICKEN)
```

## creature

> **Not available by default:** this comes from the `nether` library, which Minecraft Education projects don't load.

Represents a creature from the exploration

```typescript
mobs.creature(name: CreatureMob): number
```

| Parameter | Type | Description |
|---|---|---|
| `name` | [`CreatureMob`](enums.md#creaturemob) | The type of the creature. |

**Returns:** `number`

**Block:** creature [name]

```typescript
let result = mobs.creature(CreatureMob.Freak)
```

## monster

Represents a monster from the game

```typescript
mobs.monster(name: MonsterMob): number
```

| Parameter | Type | Description |
|---|---|---|
| `name` | [`MonsterMob`](enums.md#monstermob) | The type of the monster. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = mobs.monster(ZOMBIE)
```

## projectile

Represents a projectile from the game

```typescript
mobs.projectile(name: ProjectileMob): number
```

| Parameter | Type | Description |
|---|---|---|
| `name` | [`ProjectileMob`](enums.md#projectilemob) | The type of the projectile. |

**Returns:** `number`

**Block:** projectile [name]

```typescript
let result = mobs.projectile(PRIMED_TNT)
```

## applyEffect

Applies a status effect to the specified target Applies a status effect to the specified target

```typescript
mobs.applyEffect(effect: Effect, target: TargetSelector, duration?: number, amplifier?: number): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `effect` | [`Effect`](enums.md#effect) | The effect to apply. |
| `target` | `TargetSelector` | A target selector that determines which entity will receive the effect. |
| `duration` *(optional)* | `number` | The duration of the effect. Default: `10`. |
| `amplifier` *(optional)* | `number` | The amplifier of the effect. Default: `1`. |

**Returns:** `boolean`

**Block:** apply [effect] to [target] duration [duration] amplifier [amplifier]

```typescript
mobs.applyEffect(SPEED, mobs.target(LOCAL_PLAYER))
```

## clearEffect

Clears all status effects from the specified target Clears all status effects from the specified target

```typescript
mobs.clearEffect(target: TargetSelector): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `target` | `TargetSelector` | A target selector that determines which entity will be cleared of effects. |

**Returns:** `boolean`

**Block:** clear all effects from [target]

```typescript
mobs.clearEffect(mobs.target(LOCAL_PLAYER))
```

## give

Gives blocks or items from the game to the specified players Gives blocks or items from the game to the specified players

```typescript
mobs.give(target: TargetSelector, block: Block, amount: number): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `target` | `TargetSelector` | A target selector that determines which players will receive the block or item. |
| `block` | [`Block`](enums.md#block) | The block or item to give. |
| `amount` | `number` | The quantity to give. Default: `1`. |

**Returns:** `boolean`

**Block:** give [target] block or item [block] amount [amount]

```typescript
mobs.give(mobs.target(LOCAL_PLAYER), STONE, 1)
```

## teleportToPosition

Teleports entities to another location Teleports entities to another location

```typescript
mobs.teleportToPosition(target: TargetSelector, destination: Position): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `target` | `TargetSelector` | A target selector that determines which entities will be teleported. |
| `destination` | `Position` | The coordinates where the selected entities will be teleported to. |

**Returns:** `boolean`

**Block:** teleport [target] to [destination]

```typescript
mobs.teleportToPosition(mobs.target(LOCAL_PLAYER), pos(0, 0, 0))
```

## teleportToPlayer

Teleports entities to a player

```typescript
mobs.teleportToPlayer(target: TargetSelector, destination: TargetSelector): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `target` | `TargetSelector` | A target selector that determines which entities will be teleported. |
| `destination` | `TargetSelector` | A target selector that determines which player the entities will be teleported to. |

**Returns:** `boolean`

**Block:** none. This is available in JavaScript only.

```typescript
mobs.teleportToPlayer(mobs.target(LOCAL_PLAYER), mobs.target(LOCAL_PLAYER))
```

## teleportToUser

> **Not available by default:** this comes from the `nether` library, which Minecraft Education projects don't load.

Teleports entities to a user

```typescript
mobs.teleportToUser(target: TargetSelector, destination: TargetSelector): void
```

| Parameter | Type | Description |
|---|---|---|
| `target` | `TargetSelector` | A target selector that determines which entities will be teleported. |
| `destination` | `TargetSelector` | A target selector that determines which user the entities will be teleported to. |

**Block:** teleport [target] to [destination]

```typescript
mobs.teleportToUser(mobs.target(LOCAL_PLAYER), mobs.target(LOCAL_PLAYER))
```

## boost

> **Not available by default:** this comes from the `nether` library, which Minecraft Education projects don't load.

Applies a certain enchantment to the specified targets

```typescript
mobs.boost(target: TargetSelector, name: string, level: number): void
```

| Parameter | Type | Description |
|---|---|---|
| `target` | `TargetSelector` | A target selector that determines which users will receive the boost. |
| `name` | `string` | The code name of the boost. Default: `infinity`. |
| `level` | `number` | The strength level of the boost. Default: `1`. |

**Block:** boost [target] with [name] of level [level]

```typescript
mobs.boost(mobs.target(LOCAL_PLAYER), "infinity", 1)
```

## enchant

Applies a certain enchantment to the specified targets

```typescript
mobs.enchant(target: TargetSelector): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `target` | `TargetSelector` | A target selector that determines which players will receive the enchantment. |

**Returns:** `boolean`

**Block:** none. This is available in JavaScript only.

```typescript
mobs.enchant(mobs.target(LOCAL_PLAYER))
```

## executeDetect

Executes a command if a certain block type is detected at the specified position

```typescript
mobs.executeDetect(detectBlock: Block, detectPosition: Position, command: string): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `detectBlock` | [`Block`](enums.md#block) | The block type to test for. |
| `detectPosition` | `Position` | The position at which to detect the block. |
| `command` | `string` | The full command which the selected targets will execute if the specified block is successfully detected. Default: `"say Hi!"`. |

**Returns:** `boolean`

**Block:** detect block [block] at [detectPosition] if found, run command [command]

```typescript
mobs.executeDetect(STONE, pos(0, 0, 0), "say Hi!")
```

## execute

Executes a command as other targets Executes a command as other targets

```typescript
mobs.execute(target: TargetSelector, position: Position, command: string): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `target` | `TargetSelector` | A target selector that determines which entities will execute the command. |
| `position` | `Position` | The coordinates from which to run the command. |
| `command` | `string` | The full command which the selected targets will execute. Default: `"say Hi!"`. |

**Returns:** `boolean`

**Block:** execute as [target] at [position] command [command]

```typescript
mobs.execute(mobs.target(LOCAL_PLAYER), pos(0, 0, 0), "say Hi!")
```

## spawnParticle

Spawns a particle effect at the given location

```typescript
mobs.spawnParticle(particle: Particle, position: Position): void
```

| Parameter | Type | Description |
|---|---|---|
| `particle` | [`Particle`](enums.md#particle) |  |
| `position` | `Position` | The position for the particle to appear. |

**Block:** spawn particle [particle] at [position]

```typescript
mobs.spawnParticle(EXPLOSION_HUGE, pos(0, 0, 0))
```

## target

Selects a set of players or mobs

```typescript
mobs.target(kind: TargetSelectorKind): TargetSelector
```

| Parameter | Type | Description |
|---|---|---|
| `kind` | [`TargetSelectorKind`](enums.md#targetselectorkind) | The type of entities that will be selected. |

**Returns:** `TargetSelector`

**Block:** none. This is available in JavaScript only.

```typescript
let result = mobs.target(NEAREST_PLAYER)
```

## targetUser

> **Not available by default:** this comes from the `nether` library, which Minecraft Education projects don't load.

Selects a set of users or mobs

```typescript
mobs.targetUser(kind: TargetUserSelectorKind): TargetSelector
```

| Parameter | Type | Description |
|---|---|---|
| `kind` | [`TargetUserSelectorKind`](enums.md#targetuserselectorkind) | The type of entities that will be selected. |

**Returns:** `TargetSelector`

**Block:** [kind]

```typescript
let result = mobs.targetUser(NEAREST_USER)
```

## near

Selects targets near a given position Selects targets near a given position

```typescript
mobs.near(target: TargetSelector, pos: Position, radius: number): TargetSelector
```

| Parameter | Type | Description |
|---|---|---|
| `target` | `TargetSelector` | The type of entities that will be selected. |
| `pos` | `Position` | The position near which to select targets. |
| `radius` | `number` | The distance (in blocks) from the specified position within which targets will be selected. Default: `5`. |

**Returns:** `TargetSelector`

**Block:** [target] near to [pos] within radius [radios]

```typescript
let result = mobs.near(mobs.target(LOCAL_PLAYER), pos(0, 0, 0), 5)
```

## entitiesByType

Selects all mobs (animals or monsters) of a given type

```typescript
mobs.entitiesByType(type: AnimalMob): TargetSelector
```

| Parameter | Type | Description |
|---|---|---|
| `type` | [`AnimalMob`](enums.md#animalmob) | The type of mob to select. Default: `CHICKEN`. |

**Returns:** `TargetSelector`

**Block:** all [type]

```typescript
let result = mobs.entitiesByType(CHICKEN)
```

## playerByName

Selects the player with the given name

```typescript
mobs.playerByName(name: string): TargetSelector
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The name of the player to select. Default: `name`. |

**Returns:** `TargetSelector`

**Block:** none. This is available in JavaScript only.

```typescript
let result = mobs.playerByName("name")
```

## playersInGameMode

Selects all players in the given game mode

```typescript
mobs.playersInGameMode(mode: GameMode): TargetSelector
```

| Parameter | Type | Description |
|---|---|---|
| `mode` | [`GameMode`](enums.md#gamemode) | The game mode in which all players will be selected. |

**Returns:** `TargetSelector`

**Block:** none. This is available in JavaScript only.

```typescript
let result = mobs.playersInGameMode(SURVIVAL)
```

## userByName

> **Not available by default:** this comes from the `nether` library, which Minecraft Education projects don't load.

Selects the user with the given name

```typescript
mobs.userByName(name: string): TargetSelector
```

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The name of the user to select. Default: `name`. |

**Returns:** `TargetSelector`

**Block:** user named [name]

```typescript
let result = mobs.userByName("name")
```

## usersInExplorationMode

> **Not available by default:** this comes from the `nether` library, which Minecraft Education projects don't load.

Selects all users in the given exploration mode

```typescript
mobs.usersInExplorationMode(mode: ExplorationMode): TargetSelector
```

| Parameter | Type | Description |
|---|---|---|
| `mode` | [`ExplorationMode`](enums.md#explorationmode) | The exploration mode in which all users will be selected. |

**Returns:** `TargetSelector`

**Block:** users in exploration mode [mode]

```typescript
let result = mobs.usersInExplorationMode(ExplorationMode.Survival)
```

## isMonster

```typescript
mobs.isMonster(mob: number): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `mob` | `number` |  |

**Returns:** `boolean`

**Block:** none. This is available in JavaScript only.

```typescript
let result = mobs.isMonster(0)
```

## mobNameToId

```typescript
mobs.mobNameToId(mobName: string): number
```

| Parameter | Type | Description |
|---|---|---|
| `mobName` | `string` |  |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = mobs.mobNameToId("hello")
```

## parseSelector

Parses the given string into a TargetSelector object. This function does not check to make sure arguments are given the correct type or that the names of arguments are valid.

```typescript
mobs.parseSelector(str: string): TargetSelector
```

| Parameter | Type | Description |
|---|---|---|
| `str` | `string` | The target selector string to parse. |

**Returns:** `TargetSelector`

**Block:** none. This is available in JavaScript only.

```typescript
let result = mobs.parseSelector("hello")
```

## queryTarget

Queries information about a given target

```typescript
mobs.queryTarget(target: TargetSelector): QueryTargetResult[]
```

| Parameter | Type | Description |
|---|---|---|
| `target` | `TargetSelector` | A target selector that determines the entity you're querying. |

**Returns:** `QueryTargetResult[]`

**Block:** none. This is available in JavaScript only.

```typescript
let result = mobs.queryTarget(mobs.target(LOCAL_PLAYER))
```
