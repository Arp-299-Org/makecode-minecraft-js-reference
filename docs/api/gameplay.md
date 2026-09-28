# gameplay

Commands to control the game mode, weather, time, and change the rules.

| Member | Description |
|---|---|
| [`setWeather`](#setweather) | Change the current weather. |
| [`weatherQuery`](#weatherquery) | Get the current weather in the game world |
| [`toggleDownfall`](#toggledownfall) | Starts raining if it isn't, or stops raining if it is. |
| [`timeSet`](#timeset) | Set the current time of day to a preset time or a custom hour, in game ticks |
| [`timeAdd`](#timeadd) | Add ticks to the current time of day |
| [`setDifficulty`](#setdifficulty) | Changes the game difficulty |
| [`setGameMode`](#setgamemode) | Change the game mode for the selected players |
| [`title`](#title) | Shows a title and subtitle to the selected targets |
| [`timeQuery`](#timequery) | Get the current time of day, in game ticks |
| [`isDaylightTime`](#isdaylighttime) | Get the current time of day, in game ticks |
| [`xp`](#xp) | Give experience points to the selected players |
| [`setGameRule`](#setgamerule) | Enable or disable a game rule |
| [`time`](#time) | Represents a preset time of the day |
| [`dismissChat`](#dismisschat) | Closes the chat window if it is open (EE only) |

## setWeather

Change the current weather.

```typescript
gameplay.setWeather(weather: Weather): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `weather` | [`Weather`](enums.md#weather) | The desired weather. Default: `CLEAR`. |

**Returns:** `boolean`

**Block:** weather [weather]

```typescript
gameplay.setWeather(CLEAR)
```

## weatherQuery

Get the current weather in the game world

```typescript
gameplay.weatherQuery(): number
```

**Returns:** `number`

**Block:** current weather

```typescript
let result = gameplay.weatherQuery()
```

## toggleDownfall

Starts raining if it isn't, or stops raining if it is.

```typescript
gameplay.toggleDownfall(): boolean
```

**Returns:** `boolean`

**Block:** toggle downfall

```typescript
gameplay.toggleDownfall()
```

## timeSet

Set the current time of day to a preset time or a custom hour, in game ticks

```typescript
gameplay.timeSet(time: DayTime): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `time` | [`DayTime`](enums.md#daytime) | The desired time of day. Default: `DayTime.Day`. |

**Returns:** `boolean`

**Block:** time set [time]

```typescript
gameplay.timeSet(DayTime.Day)
```

## timeAdd

Add ticks to the current time of day

```typescript
gameplay.timeAdd(amount: number): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `amount` | `number` | The number of ticks to add to the current time of day. Default: `100`. |

**Returns:** `boolean`

**Block:** time add [amount]

```typescript
gameplay.timeAdd(100)
```

## setDifficulty

Changes the game difficulty

```typescript
gameplay.setDifficulty(difficulty: GameDifficulty): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `difficulty` | [`GameDifficulty`](enums.md#gamedifficulty) | The new difficulty. |

**Returns:** `boolean`

**Block:** set difficulty to [difficulty]

```typescript
gameplay.setDifficulty(PEACEFUL)
```

## setGameMode

Change the game mode for the selected players

```typescript
gameplay.setGameMode(mode: GameMode, player: TargetSelector): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `mode` | [`GameMode`](enums.md#gamemode) | The desired game mode. Default: `SURVIVAL`. |
| `player` | `TargetSelector` | A selector to determine which players to change the game mode for. |

**Returns:** `boolean`

**Block:** change game mode to [mode] for [player]

```typescript
gameplay.setGameMode(SURVIVAL, mobs.target(LOCAL_PLAYER))
```

## title

Shows a title and subtitle to the selected targets

```typescript
gameplay.title(target: TargetSelector, title: string, subTitle: string): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `target` | `TargetSelector` | The players and entities to select. |
| `title` | `string` | The large title to display. |
| `subTitle` | `string` | The subtitle to display. |

**Returns:** `boolean`

**Block:** show [target] title [title] subtitle [subTitle]

```typescript
gameplay.title(mobs.target(LOCAL_PLAYER), "hello", "hello")
```

## timeQuery

Get the current time of day, in game ticks

```typescript
gameplay.timeQuery(query: TimeQuery): number
```

| Parameter | Type | Description |
|---|---|---|
| `query` | [`TimeQuery`](enums.md#timequery) | The type of time to query. |

**Returns:** `number`

**Block:** time query [query]

```typescript
let result = gameplay.timeQuery(GAME_TIME)
```

## isDaylightTime

Get the current time of day, in game ticks

```typescript
gameplay.isDaylightTime(query: DayTime): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `query` | [`DayTime`](enums.md#daytime) | The type of time to query. |

**Returns:** `boolean`

**Block:** is time [query]

```typescript
let result = gameplay.isDaylightTime(DAY)
```

## xp

Give experience points to the selected players

```typescript
gameplay.xp(amount: number, target: TargetSelector): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `amount` | `number` | The number of experience points to give. Default: `10`. |
| `target` | `TargetSelector` | A selector to determine which players to give experience points to. |

**Returns:** `boolean`

**Block:** xp give [amount] to [target]

```typescript
gameplay.xp(10, mobs.target(LOCAL_PLAYER))
```

## setGameRule

Enable or disable a game rule

```typescript
gameplay.setGameRule(rule: GameRule, enabled: boolean): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `rule` | [`GameRule`](enums.md#gamerule) | The game rule to change. Default: `DAYLIGHT_CYCLE`. |
| `enabled` | `boolean` | Whether the specified rule is enabled or not. |

**Returns:** `boolean`

**Block:** change game rule [rule] to [enabled]

```typescript
gameplay.setGameRule(DAYLIGHT_CYCLE, true)
```

## time

Represents a preset time of the day

```typescript
gameplay.time(time: DayTime): number
```

| Parameter | Type | Description |
|---|---|---|
| `time` | [`DayTime`](enums.md#daytime) | A preset time. Default: `DateTime.Day`. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = gameplay.time(DateTime.Day)
```

## dismissChat

Closes the chat window if it is open (EE only)

```typescript
gameplay.dismissChat(): boolean
```

**Returns:** `boolean`

**Block:** none. This is available in JavaScript only.

```typescript
let result = gameplay.dismissChat()
```
