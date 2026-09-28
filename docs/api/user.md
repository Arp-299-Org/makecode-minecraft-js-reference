# user

> **Not available by default:** this comes from the `nether` library, which Minecraft Education projects don't load.

Give commands, communicate, and respond to events that happen in the exploration

| Member | Description |
|---|---|
| [`onChat`](#onchat) | Runs code when you type a certain message in the chat window |
| [`onItemInteracted`](#oniteminteracted) | Runs code when an item is interacted with |
| [`say`](#say) | Posts a message to the exploration chat |
| [`teleport`](#teleport) | Teleports the current user to another position |
| [`onTravelled`](#ontravelled) | Runs code when the current user travels in a certain way |
| [`onEliminated`](#oneliminated) | Runs code when the current user is eliminated |
| [`position`](#position) | Returns the world position of the current user |
| [`name`](#name) | Returns the name of the current user (you) |
| [`execute`](#execute) | Executes a exploration command as the current user |
| [`tell`](#tell) | Whispers a message to targets |
| [`onArrowShot`](#onarrowshot) | Runs code when the current user shoots an arrow |
| [`runChatCommand`](#runchatcommand) | Executes a chat command in your code |
| [`runChatCommandWithArguments`](#runchatcommandwitharguments) | Executes a chat command in your code with arguments |
| [`onTellCommand`](#ontellcommand) | Runs code when another user whispers you a certain message |
| [`onTeleported`](#onteleported) | Runs code when the current user gets teleported |
| [`message`](#message) | Gets the last message, if any |

## onChat

Runs code when you type a certain message in the chat window

```typescript
user.onChat(command: string, handler: (num1: number, num2: number, num3: number) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `command` | `string` | The chat keyword that will be associated with this command (``*`` for all messages). Default: `jump`. |
| `handler` | `(num1: number, num2: number, num3: number) => void` | Code to run. It receives the values below. |
| ↳ `num1` | `number` |  |
| ↳ `num2` | `number` |  |
| ↳ `num3` | `number` |  |

**Block:** on chat command [command]

```typescript
user.onChat("jump", (num1, num2, num3) => {
    // your code here
})
```

## onItemInteracted

Runs code when an item is interacted with

```typescript
user.onItemInteracted(item: Item, handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `item` | [`Item`](enums.md#item) |  |
| `handler` | `() => void` | Code to run. |

**Block:** on [item] used

```typescript
user.onItemInteracted(IRON_SHOVEL, () => {
    // your code here
})
```

## say

Posts a message to the exploration chat

```typescript
user.say(message: any): void
```

| Parameter | Type | Description |
|---|---|---|
| `message` | `any` | The message to display in the chat. Default: `Hi!`. |

**Block:** say [message]

```typescript
user.say(Hi!)
```

## teleport

Teleports the current user to another position

```typescript
user.teleport(to: Position): void
```

| Parameter | Type | Description |
|---|---|---|
| `to` | `Position` | The destination position. |

**Block:** teleport to [to]

```typescript
user.teleport(pos(0, 0, 0))
```

## onTravelled

Runs code when the current user travels in a certain way

```typescript
user.onTravelled(method: TravelMethod, handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `method` | [`TravelMethod`](enums.md#travelmethod) | The travel method. |
| `handler` | `() => void` | Code to run. |

**Block:** on user [method]

```typescript
user.onTravelled(UNKNOWN, () => {
    // your code here
})
```

## onEliminated

Runs code when the current user is eliminated

```typescript
user.onEliminated(handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `() => void` | Code to run. |

**Block:** on user eliminated

```typescript
user.onEliminated(() => {
    // your code here
})
```

## position

Returns the world position of the current user

```typescript
user.position(): Position
```

**Returns:** `Position`

**Block:** user world position

```typescript
let result = user.position()
```

## name

Returns the name of the current user (you)

```typescript
user.name(): string
```

**Returns:** `string`

**Block:** user name

```typescript
let result = user.name()
```

## execute

Executes a exploration command as the current user

```typescript
user.execute(command: string): void
```

| Parameter | Type | Description |
|---|---|---|
| `command` | `string` | The slash command to execute (you do not have to put the leading ``/``). Default: `"say Hi!"`. |

**Block:** execute [command]

```typescript
user.execute("say Hi!")
```

## tell

Whispers a message to targets

```typescript
user.tell(target: TargetSelector, message: any): void
```

| Parameter | Type | Description |
|---|---|---|
| `target` | `TargetSelector` | A selector of entities. |
| `message` | `any` | The text to whisper. Default: `Hi!`. |

**Block:** tell [target] [message]

```typescript
user.tell(mobs.target(LOCAL_PLAYER), Hi!)
```

## onArrowShot

Runs code when the current user shoots an arrow

```typescript
user.onArrowShot(handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `() => void` | Code to run. |

**Block:** on arrow shot

```typescript
user.onArrowShot(() => {
    // your code here
})
```

## runChatCommand

Executes a chat command in your code

```typescript
user.runChatCommand(command: string): void
```

| Parameter | Type | Description |
|---|---|---|
| `command` | `string` | The chat command to run. Default: `jump`. |

**Block:** run chat command [command]

```typescript
user.runChatCommand("jump")
```

## runChatCommandWithArguments

Executes a chat command in your code with arguments

```typescript
user.runChatCommandWithArguments(command: string, arg: string): void
```

| Parameter | Type | Description |
|---|---|---|
| `command` | `string` | The chat command to run. Default: `jump`. |
| `arg` | `string` | A string containing all the arguments you wish to give to the chat command. |

**Block:** run chat command [command] with [arg]

```typescript
user.runChatCommandWithArguments("jump", "hello")
```

## onTellCommand

Runs code when another user whispers you a certain message

```typescript
user.onTellCommand(command: string, handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `command` | `string` | The chat keyword that will be associated with this command (``*`` for all messages). Default: `jump`. |
| `handler` | `() => void` | Code to run. |

**Block:** on tell command [command]

```typescript
user.onTellCommand("jump", () => {
    // your code here
})
```

## onTeleported

Runs code when the current user gets teleported

```typescript
user.onTeleported(handler: () => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `handler` | `() => void` | Code to run. |

**Block:** on user teleported

```typescript
user.onTeleported(() => {
    // your code here
})
```

## message

Gets the last message, if any

```typescript
user.message(): string
```

**Returns:** `string`

**Block:** none. This is available in JavaScript only.

```typescript
let result = user.message()
```
