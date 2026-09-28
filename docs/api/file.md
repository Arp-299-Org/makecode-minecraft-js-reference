# file

Read and write text or CSV files chosen with a file picker.

| Member | Description |
|---|---|
| [`readFile`](#readfile) | Reads the contents of a csv or txt file. |
| [`writeFile`](#writefile) | Writes data to a csv or txt file. |

## readFile

> **Extension:** add **File Read & Write** from Extensions in Code Builder first.

Reads the contents of a csv or txt file.

```typescript
file.readFile(path: string): string
```

| Parameter | Type | Description |
|---|---|---|
| `path` | `string` |  |

**Returns:** `string`

**Block:** read file [path]

```typescript
let result = file.readFile("hello")
```

## writeFile

> **Extension:** add **File Read & Write** from Extensions in Code Builder first.

Writes data to a csv or txt file.

```typescript
file.writeFile(path: string, contents: string): void
```

| Parameter | Type | Description |
|---|---|---|
| `path` | `string` |  |
| `contents` | `string` | The contents of the file to write. |

**Block:** write [contents] to file [path]

```typescript
file.writeFile("hello", "hello")
```
