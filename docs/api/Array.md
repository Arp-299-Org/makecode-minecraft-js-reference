# Array

Add, remove, and replace items in lists.

| Member | Description |
|---|---|
| [`get`](#get) | Get the value at a particular index |
| [`length`](#length) | Get or set the length of an array. |
| [`set`](#set) | Store a value at a particular index |
| [`push`](#push) | Append a new element to an array. |
| [`removeElement`](#removeelement) | Remove the first occurrence of an object. |
| [`removeAt`](#removeat) | Remove and return the element at a certain index. |
| [`pop`](#pop) | Remove the last element from an array and return it. |
| [`slice`](#slice) | Return a section of an array. |
| [`concat`](#concat) | Concatenates the values with another array. |
| [`every`](#every) | Tests whether all elements in the array pass the test implemented by the provided function. |
| [`filter`](#filter) | Return the elements of an array that meet the condition specified in a callback function. |
| [`find`](#find) | Returns the value of the first element in the array that satisfies the provided testing function. |
| [`forEach`](#foreach) | Call a defined callback function on each element of an array. |
| [`indexOf`](#indexof) | Return the index of the first occurrence of a value in an array. |
| [`join`](#join) | joins all elements of an array into a string and returns this string. |
| [`map`](#map) | Call a defined callback function on each element of an array, and return an array containing the results. |
| [`reduce`](#reduce) | Call the specified callback function for all the elements in an array. |
| [`some`](#some) | Tests whether at least one element in the array passes the test implemented by the provided function. |
| [`sort`](#sort) | Sort the elements of an array in place and returns the array. |
| [`splice`](#splice) | Remove elements from an array. |
| [`fill`](#fill) | Fills all the elements of an array from a start index to an end index with a static value. |
| [`shift`](#shift) | Remove the first element from an array and return it. |
| [`unshift`](#unshift) | Add one element to the beginning of an array and return the new length of the array. |
| [`insertAt`](#insertat) | Insert the value at a particular index, increases length by 1 |
| [`reverse`](#reverse) | Reverse the elements in an array. |
| [`isArray`](#isarray) | Check if a given object is an array. |

## get

Get the value at a particular index

```typescript
list.get(index: number): T
```

| Parameter | Type | Description |
|---|---|---|
| `index` | `number` | The zero-based position in the list of the item. Default: `0`. |

**Returns:** `T`

**Block:** none. This is available in JavaScript only.

```typescript
let result = list.get(0)
```

## length

Get or set the length of an array. This number is one more than the index of the last element the array.

```typescript
list.length: number
```

**Block:** length of [VALUE]

```typescript
let value = list.length
```

## set

Store a value at a particular index

```typescript
list.set(index: number, value: T): void
```

| Parameter | Type | Description |
|---|---|---|
| `index` | `number` | The zero-based position in the list to store the value. Default: `0`. |
| `value` | `T` | The value to insert. Default: `0`. |

**Block:** none. This is available in JavaScript only.

```typescript
list.set(0, 0)
```

## push

Append a new element to an array.

```typescript
list.push(item: T): void
```

| Parameter | Type | Description |
|---|---|---|
| `item` | `T` |  |

**Block:** [list] add value [value] to end

```typescript
list.push(item)
```

## removeElement

Remove the first occurrence of an object. Returns true if removed.

```typescript
list.removeElement(element: T): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `element` | `T` |  |

**Returns:** `boolean`

**Block:** none. This is available in JavaScript only.

```typescript
let result = list.removeElement(element)
```

## removeAt

Remove and return the element at a certain index.

```typescript
list.removeAt(index: number): T
```

| Parameter | Type | Description |
|---|---|---|
| `index` | `number` |  |

**Returns:** `T`

**Block:** [list] remove value at [index]

```typescript
let result = list.removeAt(0)
```

## pop

Remove the last element from an array and return it.

```typescript
list.pop(): T
```

**Returns:** `T`

**Block:** remove last value from [list]

```typescript
let result = list.pop()
```

## slice

Return a section of an array.

```typescript
list.slice(start?: number, end?: number): T[]
```

| Parameter | Type | Description |
|---|---|---|
| `start` *(optional)* | `number` | The beginning of the specified portion of the array. Default: `0`. |
| `end` *(optional)* | `number` | The end of the specified portion of the array. Default: `0`. |

**Returns:** `T[]`

**Block:** none. This is available in JavaScript only.

```typescript
let result = list.slice()
```

## concat

Concatenates the values with another array.

```typescript
list.concat(arr: T[]): T[]
```

| Parameter | Type | Description |
|---|---|---|
| `arr` | `T[]` | The other array that is being concatenated with. |

**Returns:** `T[]`

**Block:** none. This is available in JavaScript only.

```typescript
let result = list.concat([])
```

## every

Tests whether all elements in the array pass the test implemented by the provided function.

```typescript
list.every(callbackfn: (value: T, index: number) => boolean): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `callbackfn` | `(value: T, index: number) => boolean` | A function that accepts up to two arguments. The every method calls the callbackfn function one time for each element in the array. |
| ↳ `value` | `T` |  |
| ↳ `index` | `number` |  |

**Returns:** `boolean`

**Block:** none. This is available in JavaScript only.

```typescript
let result = list.every((value, index) => {
    // your code here
})
```

## filter

Return the elements of an array that meet the condition specified in a callback function.

```typescript
list.filter(callbackfn: (value: T, index: number) => boolean): T[]
```

| Parameter | Type | Description |
|---|---|---|
| `callbackfn` | `(value: T, index: number) => boolean` | A function that accepts up to two arguments. The filter method calls the callbackfn function one time for each element in the array. |
| ↳ `value` | `T` |  |
| ↳ `index` | `number` |  |

**Returns:** `T[]`

**Block:** none. This is available in JavaScript only.

```typescript
let result = list.filter((value, index) => {
    // your code here
})
```

## find

Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

```typescript
list.find(callbackfn: (value: T, index: number) => boolean): T
```

| Parameter | Type | Description |
|---|---|---|
| `callbackfn` | `(value: T, index: number) => boolean` | Code to run. It receives the values below. |
| ↳ `value` | `T` |  |
| ↳ `index` | `number` |  |

**Returns:** `T`

**Block:** none. This is available in JavaScript only.

```typescript
let result = list.find((value, index) => {
    // your code here
})
```

## forEach

Call a defined callback function on each element of an array.

```typescript
list.forEach(callbackfn: (value: T, index: number) => void): void
```

| Parameter | Type | Description |
|---|---|---|
| `callbackfn` | `(value: T, index: number) => void` | A function that accepts up to two arguments. The forEach method calls the callbackfn function one time for each element in the array. |
| ↳ `value` | `T` |  |
| ↳ `index` | `number` |  |

**Block:** none. This is available in JavaScript only.

```typescript
list.forEach((value, index) => {
    // your code here
})
```

## indexOf

Return the index of the first occurrence of a value in an array.

```typescript
list.indexOf(item: T, fromIndex?: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `item` | `T` | The value to locate in the array. |
| `fromIndex` *(optional)* | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

**Returns:** `number`

**Block:** [list] find index of [value]

```typescript
let result = list.indexOf(item)
```

## join

joins all elements of an array into a string and returns this string.

```typescript
list.join(sep?: string): string
```

| Parameter | Type | Description |
|---|---|---|
| `sep` *(optional)* | `string` | The string separator. |

**Returns:** `string`

**Block:** none. This is available in JavaScript only.

```typescript
let result = list.join()
```

## map

Call a defined callback function on each element of an array, and return an array containing the results.

```typescript
list.map(callbackfn: (value: T, index: number) => U): U[]
```

| Parameter | Type | Description |
|---|---|---|
| `callbackfn` | `(value: T, index: number) => U` | A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in the array. |
| ↳ `value` | `T` |  |
| ↳ `index` | `number` |  |

**Returns:** `U[]`

**Block:** none. This is available in JavaScript only.

```typescript
let result = list.map((value, index) => {
    // your code here
})
```

## reduce

Call the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

```typescript
list.reduce(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U
```

| Parameter | Type | Description |
|---|---|---|
| `callbackfn` | `(previousValue: U, currentValue: T, currentIndex: number) => U` | A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| ↳ `previousValue` | `U` |  |
| ↳ `currentValue` | `T` |  |
| ↳ `currentIndex` | `number` |  |
| `initialValue` | `U` | Initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

**Returns:** `U`

**Block:** none. This is available in JavaScript only.

```typescript
let result = list.reduce((previousValue, currentValue, currentIndex) => {
    // your code here
}, initialValue)
```

## some

Tests whether at least one element in the array passes the test implemented by the provided function.

```typescript
list.some(callbackfn: (value: T, index: number) => boolean): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `callbackfn` | `(value: T, index: number) => boolean` | A function that accepts up to two arguments. The some method calls the callbackfn function one time for each element in the array. |
| ↳ `value` | `T` |  |
| ↳ `index` | `number` |  |

**Returns:** `boolean`

**Block:** none. This is available in JavaScript only.

```typescript
let result = list.some((value, index) => {
    // your code here
})
```

## sort

Sort the elements of an array in place and returns the array. The sort is not necessarily stable.

```typescript
list.sort(callbackfn?: (value1: T, value2: T) => number): T[]
```

| Parameter | Type | Description |
|---|---|---|
| `callbackfn` *(optional)* | `(value1: T, value2: T) => number` | Code to run. It receives the values below. |
| ↳ `value1` | `T` |  |
| ↳ `value2` | `T` |  |

**Returns:** `T[]`

**Block:** none. This is available in JavaScript only.

```typescript
let result = list.sort((value1, value2) => {
    // your code here
})
```

## splice

Remove elements from an array.

```typescript
list.splice(start: number, deleteCount: number): void
```

| Parameter | Type | Description |
|---|---|---|
| `start` | `number` | The zero-based location in the array from which to start removing elements. Default: `0`. |
| `deleteCount` | `number` | The number of elements to remove. Default: `0`. |

**Block:** none. This is available in JavaScript only.

```typescript
list.splice(0, 0)
```

## fill

Fills all the elements of an array from a start index to an end index with a static value. The end index is not included.

```typescript
list.fill(value: T, start?: number, end?: number): T[]
```

| Parameter | Type | Description |
|---|---|---|
| `value` | `T` |  |
| `start` *(optional)* | `number` |  |
| `end` *(optional)* | `number` |  |

**Returns:** `T[]`

**Block:** none. This is available in JavaScript only.

```typescript
let result = list.fill(value)
```

## shift

Remove the first element from an array and return it. This method changes the length of the array.

```typescript
list.shift(): T
```

**Returns:** `T`

**Block:** remove first value from [list]

```typescript
let result = list.shift()
```

## unshift

Add one element to the beginning of an array and return the new length of the array.

```typescript
list.unshift(value: T): number
```

| Parameter | Type | Description |
|---|---|---|
| `value` | `T` |  |

**Returns:** `number`

**Block:** [list] insert [value] at beginning

```typescript
let result = list.unshift(value)
```

## insertAt

Insert the value at a particular index, increases length by 1

```typescript
list.insertAt(index: number, value: T): void
```

| Parameter | Type | Description |
|---|---|---|
| `index` | `number` | The zero-based position in the list to insert the value. Default: `0`. |
| `value` | `T` |  |

**Block:** [list] insert at [index] value [value]

```typescript
list.insertAt(0, value)
```

## reverse

Reverse the elements in an array. The first array element becomes the last, and the last array element becomes the first.

```typescript
list.reverse(): void
```

**Block:** reverse [list]

```typescript
list.reverse()
```

## isArray

Check if a given object is an array.

```typescript
Array.isArray(obj: any): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `obj` | `any` |  |

**Returns:** `boolean`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Array.isArray("hello")
```
