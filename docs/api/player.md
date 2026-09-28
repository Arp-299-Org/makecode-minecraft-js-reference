# player

Give commands, communicate, and respond to events that happen in the game

| Member | Description |
|---|---|
| [`onChat`](#onchat) | Runs code when you type a certain message in the game chat |
| [`onItemInteracted`](#oniteminteracted) | Runs code when an item is used |
| [`say`](#say) | Posts a message to the game chat |
| [`teleport`](#teleport) | Teleports the current player to another position |
| [`onTravelled`](#ontravelled) | Runs code when the current player travels in a certain way |
| [`onDied`](#ondied) | Runs code when the current player dies |
| [`position`](#position) | Returns the world position of the current player |
| [`getOrientation`](#getorientation) | Returns the player's orientation, in degrees |
| [`name`](#name) | Returns the name of the current player (you) |
| [`execute`](#execute) | Executes a game command as the current player |
| [`tell`](#tell) | Whispers a message to targets |
| [`onArrowShot`](#onarrowshot) | Runs code when the current player shoots an arrow |
| [`runChatCommand`](#runchatcommand) | Executes a chat command in your code |
| [`runChatCommandWithArguments`](#runchatcommandwitharguments) | Executes a chat command in your code with arguments |
| [`onTellCommand`](#ontellcommand) | Runs code when another player whispers you a certain message |
| [`onTeleported`](#onteleported) | Runs code when the current player gets teleported |
| [`chatCommandSyntaxError`](#chatcommandsyntaxerror) | Displays a chat command help message in the game chat. |
| [`errorMessage`](#errormessage) | Displays an error in the game chat |
| [`getChatArg`](#getchatarg) | Gets the specified argument from the latest player chat message |
| [`getChatArgs`](#getchatargs) | Gets the arguments for the specified command |
| [`message`](#message) | Gets the last message, if any |
| [`onChatCommandCore`](#onchatcommandcore) | Runs code when a keyword is typed in the chat |
| [`warningMessage`](#warningmessage) | Displays a warning in the game chat (orange text) |

## onChat

Runs code when you type a certain message in the game chat

```typescript
player.onChat(command: string, handler: (num1: number, num2: number, num3: number) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `command` | `string` | The chat keyword that will be associated with this command (``*`` for all messages). Default: `run`. |
| `handler` | `(num1: number, num2: number, num3: number) => void` | Code to run. It receives the values below. |
| ↳ `num1` | `number` |  |
| ↳ `num2` | `number` |  |
| ↳ `num3` | `number` |  |

**Block:** on chat command [command]

```typescript
player.onChat("run", (num1, num2, num3) => {
    // your code here
})
```

## onItemInteracted

Runs code when an item is used

```typescript
player.onItemInteracted(item: Item, handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `item` | [`Item`](enums.md#item) |  |
| `handler` | `() => void` | Code to run. |

**Block:** on [item] used

```typescript
player.onItemInteracted(IRON_SHOVEL, () => {
    // your code here
})
```

## say

Posts a message to the game chat

```typescript
player.say(message: any): void
```

| Parameter | Type | Description |
|---|---|---|
| `message` | `any` | The message to display in the chat. Default: `":)"`. |

**Block:** say [message]

```typescript
player.say(":)")
```

## teleport

Teleports the current player to another position

```typescript
player.teleport(to: Position): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `to` | `Position` | The destination position. |

**Returns:** `boolean`

**Block:** teleport to [to]

```typescript
player.teleport(pos(0, 0, 0))
```

## onTravelled

Runs code when the current player travels in a certain way

```typescript
player.onTravelled(method: TravelMethod, handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `method` | [`TravelMethod`](enums.md#travelmethod) | The travel method. |
| `handler` | `() => void` | Code to run. |

**Block:** on player [method]

```typescript
player.onTravelled(UNKNOWN, () => {
    // your code here
})
```

## onDied

Runs code when the current player dies

```typescript
player.onDied(handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `() => void` | Code to run. |

**Block:** on player died

```typescript
player.onDied(() => {
    // your code here
})
```

## position

Returns the world position of the current player

```typescript
player.position(): Position
```

**Returns:** `Position`

**Block:** player world position

```typescript
let result = player.position()
```

## getOrientation

Returns the player's orientation, in degrees

```typescript
player.getOrientation(): number
```

**Returns:** `number`

**Block:** player orientation

```typescript
let result = player.getOrientation()
```

## name

Returns the name of the current player (you)

```typescript
player.name(): string
```

**Returns:** `string`

**Block:** player name

```typescript
let result = player.name()
```

## execute

Executes a game command as the current player

```typescript
player.execute(command: string): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `command` | `string` | The slash command to execute (you do not have to put the leading ``/``). Default: `"say Hi!"`. |

**Returns:** `boolean`

**Block:** execute [command]

```typescript
player.execute("say Hi!")
```

## tell

Whispers a message to targets

```typescript
player.tell(target: TargetSelector, message: any): void
```

| Parameter | Type | Description |
|---|---|---|
| `target` | `TargetSelector` | A selector of entities. |
| `message` | `any` | The text to whisper. Default: `Hi!`. |

**Block:** tell [target] [message]

```typescript
player.tell(mobs.target(LOCAL_PLAYER), Hi!)
```

## onArrowShot

Runs code when the current player shoots an arrow

```typescript
player.onArrowShot(handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `() => void` | Code to run. |

**Block:** on arrow shot

```typescript
player.onArrowShot(() => {
    // your code here
})
```

## runChatCommand

Executes a chat command in your code

```typescript
player.runChatCommand(command: string): void
```

| Parameter | Type | Description |
|---|---|---|
| `command` | `string` | The chat command to run. Default: `jump`. |

**Block:** run chat command [command]

```typescript
player.runChatCommand("jump")
```

## runChatCommandWithArguments

Executes a chat command in your code with arguments

```typescript
player.runChatCommandWithArguments(command: string, arg: string): void
```

| Parameter | Type | Description |
|---|---|---|
| `command` | `string` | The chat command to run. Default: `jump`. |
| `arg` | `string` | A string containing all the arguments you wish to give to the chat command. |

**Block:** run chat command [command] with [arg]

```typescript
player.runChatCommandWithArguments("jump", "hello")
```

## onTellCommand

Runs code when another player whispers you a certain message

```typescript
player.onTellCommand(command: string, handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `command` | `string` | The chat keyword that will be associated with this command (``*`` for all messages). Default: `jump`. |
| `handler` | `() => void` | Code to run. |

**Block:** on tell command [command]

```typescript
player.onTellCommand("jump", () => {
    // your code here
})
```

## onTeleported

Runs code when the current player gets teleported

```typescript
player.onTeleported(handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `() => void` | Code to run. |

**Block:** on player teleported

```typescript
player.onTeleported(() => {
    // your code here
})
```

## chatCommandSyntaxError

Displays a chat command help message in the game chat.

```typescript
player.chatCommandSyntaxError(helpStr: string): void
```

| Parameter | Type | Description |
|---|---|---|
| `helpStr` | `string` |  |

**Block:** none. This is available in JavaScript only.

```typescript
player.chatCommandSyntaxError("hello")
```

## errorMessage

Displays an error in the game chat

```typescript
player.errorMessage(msg: string, multiline?: boolean): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `string` |  |
| `multiline` *(optional)* | `boolean` |  |

**Returns:** `boolean`

**Block:** none. This is available in JavaScript only.

```typescript
let result = player.errorMessage("hello")
```

## getChatArg

Gets the specified argument from the latest player chat message

```typescript
player.getChatArg(index: number): string
```

| Parameter | Type | Description |
|---|---|---|
| `index` | `number` |  |

**Returns:** `string`

**Block:** none. This is available in JavaScript only.

```typescript
let result = player.getChatArg(0)
```

## getChatArgs

Gets the arguments for the specified command

```typescript
player.getChatArgs(command: string): string[]
```

| Parameter | Type | Description |
|---|---|---|
| `command` | `string` | The chat command for which to get the args. |

**Returns:** `string[]`

**Block:** none. This is available in JavaScript only.

```typescript
let result = player.getChatArgs("hello")
```

## message

Gets the last message, if any

```typescript
player.message(): string
```

**Returns:** `string`

**Block:** none. This is available in JavaScript only.

```typescript
let result = player.message()
```

## onChatCommandCore

Runs code when a keyword is typed in the chat

```typescript
player.onChatCommandCore(command: string, handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `command` | `string` | The chat keyword that will be associated with this command (``*`` for all messages). Default: `jump`. |
| `handler` | `() => void` | Code to run. |

**Block:** none. This is available in JavaScript only.

```typescript
player.onChatCommandCore("jump", () => {
    // your code here
})
```

## warningMessage

Displays a warning in the game chat (orange text)

```typescript
player.warningMessage(msg: string, multiline?: boolean): void
```

| Parameter | Type | Description |
|---|---|---|
| `msg` | `string` |  |
| `multiline` *(optional)* | `boolean` |  |

**Block:** none. This is available in JavaScript only.

```typescript
player.warningMessage("hello")
```
