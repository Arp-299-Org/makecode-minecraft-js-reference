# exploration

> **Not available by default:** this comes from the `nether` library, which Minecraft Education projects don't load.

Commands to control the exploration mode, weather, time, and change the rules.

| Member | Description |
|---|---|
| [`setWeather`](#setweather) | Change the current weather. |
| [`toggleDownfall`](#toggledownfall) | Starts raining if it isn't, or stops raining if it is. |
| [`timeSet`](#timeset) | Set the current time of day to a preset time or a custom hour, in ticks |
| [`timeAdd`](#timeadd) | Add ticks to the current time of day |
| [`setDifficulty`](#setdifficulty) | Changes the exploration difficulty |
| [`setExplorationMode`](#setexplorationmode) | Change the exploration mode for the selected users |
| [`title`](#title) | Shows a title and subtitle to the selected targets |
| [`timeQuery`](#timequery) | Get the current time of day, in exploration ticks |
| [`isDaylightTimeAsync`](#isdaylighttimeasync) | Get the current time of day, in game ticks |
| [`xp`](#xp) | Give experience points to the selected users |
| [`setExplorationRule`](#setexplorationrule) | Enable or disable an exploration rule |
| [`time`](#time) | Represents a preset time of the day |

## setWeather

Change the current weather.

```typescript
exploration.setWeather(weather: Weather): void
```

| Parameter | Type | Description |
|---|---|---|
| `weather` | [`Weather`](enums.md#weather) | The desired weather. Default: `Weather.Clear`. |

**Block:** weather [weather]

```typescript
exploration.setWeather(Weather.Clear)
```

## toggleDownfall

Starts raining if it isn't, or stops raining if it is.

```typescript
exploration.toggleDownfall(): void
```

**Block:** toggle downfall

```typescript
exploration.toggleDownfall()
```

## timeSet

Set the current time of day to a preset time or a custom hour, in ticks

```typescript
exploration.timeSet(time: DayTime): void
```

| Parameter | Type | Description |
|---|---|---|
| `time` | [`DayTime`](enums.md#daytime) | The desired time of day. Default: `DayTime.Day`. |

**Block:** time set [time]

```typescript
exploration.timeSet(DayTime.Day)
```

## timeAdd

Add ticks to the current time of day

```typescript
exploration.timeAdd(amount: number): void
```

| Parameter | Type | Description |
|---|---|---|
| `amount` | `number` | The number of ticks to add to the current time of day. Default: `100`. |

**Block:** time add [amount]

```typescript
exploration.timeAdd(100)
```

## setDifficulty

Changes the exploration difficulty

```typescript
exploration.setDifficulty(difficulty: GameDifficulty): void
```

| Parameter | Type | Description |
|---|---|---|
| `difficulty` | [`GameDifficulty`](enums.md#gamedifficulty) | The new difficulty. |

**Block:** set difficulty to [difficulty]

```typescript
exploration.setDifficulty(PEACEFUL)
```

## setExplorationMode

Change the exploration mode for the selected users

```typescript
exploration.setExplorationMode(mode: ExplorationMode, user: TargetSelector): void
```

| Parameter | Type | Description |
|---|---|---|
| `mode` | [`ExplorationMode`](enums.md#explorationmode) | The desired exploration mode. Default: `ExplorationMode.Survival`. |
| `user` | `TargetSelector` | A selector to determine which users to change the exploration mode for. |

**Block:** change exploration mode to [mode] for [player]

```typescript
exploration.setExplorationMode(ExplorationMode.Survival, mobs.target(LOCAL_PLAYER))
```

## title

Shows a title and subtitle to the selected targets

```typescript
exploration.title(target: TargetSelector, title: string, subTitle: string): void
```

| Parameter | Type | Description |
|---|---|---|
| `target` | `TargetSelector` | The users and entities to select. |
| `title` | `string` | The large title to display. |
| `subTitle` | `string` | The subtitle to display. |

**Block:** show [target] title [title] subtitle [subTitle]

```typescript
exploration.title(mobs.target(LOCAL_PLAYER), "hello", "hello")
```

## timeQuery

Get the current time of day, in exploration ticks

```typescript
exploration.timeQuery(query: ExplorationTimeQuery): number
```

| Parameter | Type | Description |
|---|---|---|
| `query` | [`ExplorationTimeQuery`](enums.md#explorationtimequery) | The type of time to query. |

**Returns:** `number`

**Block:** time query [query]

```typescript
let result = exploration.timeQuery(MINECRAFT_TIME)
```

## isDaylightTimeAsync

Get the current time of day, in game ticks

```typescript
exploration.isDaylightTimeAsync(query: DayTime): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `query` | [`DayTime`](enums.md#daytime) | The type of time to query. |

**Returns:** `boolean`

**Block:** is time [query]

```typescript
let result = exploration.isDaylightTimeAsync(DAY)
```

## xp

Give experience points to the selected users

```typescript
exploration.xp(amount: number, target: TargetSelector): void
```

| Parameter | Type | Description |
|---|---|---|
| `amount` | `number` | The number of experience points to give. Default: `10`. |
| `target` | `TargetSelector` | A selector to determine which users to give experience points to. |

**Block:** xp give [amount] to [target]

```typescript
exploration.xp(10, mobs.target(LOCAL_PLAYER))
```

## setExplorationRule

Enable or disable an exploration rule

```typescript
exploration.setExplorationRule(rule: ExplorationRule, enabled: boolean): void
```

| Parameter | Type | Description |
|---|---|---|
| `rule` | [`ExplorationRule`](enums.md#explorationrule) | The exploration rule to change. Default: `ExplorationRule.PvP`. |
| `enabled` | `boolean` | Whether the specified rule is enabled or not. |

**Block:** change exploration rule [rule] to [enabled]

```typescript
exploration.setExplorationRule(ExplorationRule.PvP, true)
```

## time

Represents a preset time of the day

```typescript
exploration.time(time: DayTime): number
```

| Parameter | Type | Description |
|---|---|---|
| `time` | [`DayTime`](enums.md#daytime) | A preset time. Default: `DateTime.Day`. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = exploration.time(DateTime.Day)
```
