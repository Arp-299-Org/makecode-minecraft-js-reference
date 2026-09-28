# String

Combine, split, and search text strings.

| Member | Description |
|---|---|
| [`concat`](#concat) | Returns a string that contains the concatenation of two or more strings. |
| [`charAt`](#charat) | Return the character at the specified index. |
| [`length`](#length) | Returns the length of a String object. |
| [`charCodeAt`](#charcodeat) | Return the Unicode value of the character at the specified location. |
| [`fromCharCode`](#fromcharcode) | Make a string from the given ASCII character code. |
| [`compare`](#compare) | See how the order of characters in two strings is different (in ASCII encoding). |
| [`includes`](#includes) | Determines whether a string contains the characters of a specified string. |
| [`indexOf`](#indexof) | Returns the position of the first occurrence of a specified value in a string. |
| [`isEmpty`](#isempty) | Returns a value indicating if the string is empty |
| [`replace`](#replace) | Return the current string with the first occurrence of toReplace replaced with the replacer or a function that accepts the substring and returns the replacement string. |
| [`replaceAll`](#replaceall) | Return the current string with each occurrence of toReplace replaced with the replacer or a function that accepts the substring and returns the replacement string. |
| [`slice`](#slice) | Return a substring of the current string. |
| [`split`](#split) | Splits the string according to the separators |
| [`substr`](#substr) | Return a substring of the current string. |
| [`toLowerCase`](#tolowercase) | Converts the string to lower case characters. |
| [`toUpperCase`](#touppercase) | Converts the string to upper case characters. |
| [`trim`](#trim) | Return a substring of the current string with whitespace removed from both ends |

## concat

Returns a string that contains the concatenation of two or more strings.

```typescript
text.concat(other: string): string
```

| Parameter | Type | Description |
|---|---|---|
| `other` | `string` | The string to append to the end of the string. |

**Returns:** `string`

**Block:** none. This is available in JavaScript only.

```typescript
let result = text.concat("hello")
```

## charAt

Return the character at the specified index.

```typescript
text.charAt(index: number): string
```

| Parameter | Type | Description |
|---|---|---|
| `index` | `number` | The zero-based index of the desired character. |

**Returns:** `string`

**Block:** char from [this] at [pos]

```typescript
let result = text.charAt(0)
```

## length

Returns the length of a String object.

```typescript
text.length: number
```

**Block:** length of [VALUE]

```typescript
let value = text.length
```

## charCodeAt

Return the Unicode value of the character at the specified location.

```typescript
text.charCodeAt(index: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `index` | `number` | The zero-based index of the desired character. If there is no character at the specified index, NaN is returned. |

**Returns:** `number`

**Block:** char code from [this] at [index]

```typescript
let result = text.charCodeAt(0)
```

## fromCharCode

Make a string from the given ASCII character code.

```typescript
String.fromCharCode(code: number): string
```

| Parameter | Type | Description |
|---|---|---|
| `code` | `number` |  |

**Returns:** `string`

**Block:** text from char code [code]

```typescript
let result = String.fromCharCode(0)
```

## compare

See how the order of characters in two strings is different (in ASCII encoding).

```typescript
text.compare(that: string): number
```

| Parameter | Type | Description |
|---|---|---|
| `that` | `string` | String to compare to target string. |

**Returns:** `number`

**Block:** compare [this] to [that]

```typescript
let result = text.compare("hello")
```

## includes

Determines whether a string contains the characters of a specified string.

```typescript
text.includes(searchValue: string, start?: number): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `searchValue` | `string` | The text to find. |
| `start` *(optional)* | `number` | Optional start index for the search. |

**Returns:** `boolean`

**Block:** [this] includes [searchValue]

```typescript
let result = text.includes("hello")
```

## indexOf

Returns the position of the first occurrence of a specified value in a string.

```typescript
text.indexOf(searchValue: string, start?: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `searchValue` | `string` | The text to find. |
| `start` *(optional)* | `number` | Optional start index for the search. |

**Returns:** `number`

**Block:** [this] find index of [searchValue]

```typescript
let result = text.indexOf("hello")
```

## isEmpty

Returns a value indicating if the string is empty

```typescript
text.isEmpty(): boolean
```

**Returns:** `boolean`

**Block:** [this] is empty

```typescript
let result = text.isEmpty()
```

## replace

Return the current string with the first occurrence of toReplace replaced with the replacer or a function that accepts the substring and returns the replacement string.

```typescript
text.replace(toReplace: string, replacer: string | ((sub: string) => string)): string
```

| Parameter | Type | Description |
|---|---|---|
| `toReplace` | `string` | The substring to replace in the current string. |
| `replacer` | `string \| ((sub: string) => string)` | Either the string that replaces toReplace in the current string,. |

**Returns:** `string`

**Block:** none. This is available in JavaScript only.

```typescript
let result = text.replace("hello", () => {
    // your code here
})
```

## replaceAll

Return the current string with each occurrence of toReplace replaced with the replacer or a function that accepts the substring and returns the replacement string.

```typescript
text.replaceAll(toReplace: string, replacer: string | ((sub: string) => string)): string
```

| Parameter | Type | Description |
|---|---|---|
| `toReplace` | `string` | The substring to replace in the current string. |
| `replacer` | `string \| ((sub: string) => string)` | Either the string that replaces toReplace in the current string,. |

**Returns:** `string`

**Block:** none. This is available in JavaScript only.

```typescript
let result = text.replaceAll("hello", () => {
    // your code here
})
```

## slice

Return a substring of the current string.

```typescript
text.slice(start: number, end?: number): string
```

| Parameter | Type | Description |
|---|---|---|
| `start` | `number` | First character index; can be negative from counting from the end. Default: `0`. |
| `end` *(optional)* | `number` | One-past-last character index. |

**Returns:** `string`

**Block:** none. This is available in JavaScript only.

```typescript
let result = text.slice(0)
```

## split

Splits the string according to the separators

```typescript
text.split(separator?: string, limit?: number): string[]
```

| Parameter | Type | Description |
|---|---|---|
| `separator` *(optional)* | `string` | @param limit. |
| `limit` *(optional)* | `number` |  |

**Returns:** `string[]`

**Block:** split [this] at [separator]

```typescript
let result = text.split()
```

## substr

Return a substring of the current string.

```typescript
text.substr(start: number, length?: number): string
```

| Parameter | Type | Description |
|---|---|---|
| `start` | `number` | First character index; can be negative from counting from the end. Default: `0`. |
| `length` *(optional)* | `number` | Number of characters to extract. Default: `10`. |

**Returns:** `string`

**Block:** substring of [this] from [start] of length [length]

```typescript
let result = text.substr(0)
```

## toLowerCase

Converts the string to lower case characters.

```typescript
text.toLowerCase(): string
```

**Returns:** `string`

**Block:** none. This is available in JavaScript only.

```typescript
let result = text.toLowerCase()
```

## toUpperCase

Converts the string to upper case characters.

```typescript
text.toUpperCase(): string
```

**Returns:** `string`

**Block:** none. This is available in JavaScript only.

```typescript
let result = text.toUpperCase()
```

## trim

Return a substring of the current string with whitespace removed from both ends

```typescript
text.trim(): string
```

**Returns:** `string`

**Block:** none. This is available in JavaScript only.

```typescript
let result = text.trim()
```
