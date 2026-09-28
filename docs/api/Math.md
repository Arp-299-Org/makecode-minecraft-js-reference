# Math

More complex operations with numbers.

| Member | Description |
|---|---|
| [`constrain`](#constrain) | Constrains a number to be within a range |
| [`map`](#map) | Re-maps a number from one range to another. |
| [`abs`](#abs) | Returns the absolute value of a number (the value without regard to whether it is positive or negative). |
| [`acos`](#acos) | Returns the arccosine (in radians) of a number |
| [`asin`](#asin) | Returns the arcsine (in radians) of a number |
| [`atan`](#atan) | Returns the arctangent (in radians) of a number |
| [`atan2`](#atan2) | Returns the arctangent of the quotient of its arguments. |
| [`ceil`](#ceil) | Returns the smallest number greater than or equal to its numeric argument. |
| [`clamp`](#clamp) |  |
| [`cos`](#cos) | Returns the cosine of a number. |
| [`E`](#e) |  |
| [`exp`](#exp) | Returns returns ``e^x``. |
| [`floor`](#floor) | Returns the greatest number less than or equal to its numeric argument. |
| [`idiv`](#idiv) | Returns the value of integer signed 32 bit division of two numbers. |
| [`imul`](#imul) | Returns the value of integer signed 32 bit multiplication of two numbers. |
| [`isNaN`](#isnan) | Exposes JavaScript's isNaN() function |
| [`LN10`](#ln10) |  |
| [`LN2`](#ln2) |  |
| [`log`](#log) | Returns the natural logarithm (base e) of a number. |
| [`LOG10E`](#log10e) |  |
| [`LOG2E`](#log2e) |  |
| [`max`](#max) | Returns the larger of two supplied numeric expressions. |
| [`min`](#min) | Returns the smaller of two supplied numeric expressions. |
| [`PI`](#pi) |  |
| [`pow`](#pow) | Returns the value of a base expression taken to a specified power. |
| [`random`](#random) | Returns a pseudorandom number between 0 and 1. |
| [`round`](#round) | Returns a supplied numeric expression rounded to the nearest number. |
| [`roundWithPrecision`](#roundwithprecision) | Rounds ``x`` to a number with the given number of ``digits`` |
| [`sign`](#sign) | Returns the sign of the x, indicating whether x is positive, negative or zero. |
| [`sin`](#sin) | Returns the sine of a number. |
| [`sqrt`](#sqrt) | Returns the square root of a number. |
| [`SQRT1_2`](#sqrt1-2) |  |
| [`SQRT2`](#sqrt2) |  |
| [`tan`](#tan) | Returns the tangent of a number. |
| [`trunc`](#trunc) | Returns the number with the decimal part truncated. |

## constrain

Constrains a number to be within a range

```typescript
Math.constrain(value: number, low: number, high: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `value` | `number` | The number to constrain, all data types. |
| `low` | `number` | The lower end of the range, all data types. |
| `high` | `number` | The upper end of the range, all data types. |

**Returns:** `number`

**Block:** constrain [value] between [low] and [high]

```typescript
let result = Math.constrain(0, 0, 0)
```

## map

Re-maps a number from one range to another. That is, a value of ``from low`` would get mapped to ``to low``, a value of ``from high`` to ``to high``, values in-between to values in-between, etc.

```typescript
Math.map(value: number, fromLow: number, fromHigh: number, toLow: number, toHigh: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `value` | `number` | Value to map in ranges. |
| `fromLow` | `number` | The lower bound of the value's current range. |
| `fromHigh` | `number` | The upper bound of the value's current range. Default: `1023`. |
| `toLow` | `number` | The lower bound of the value's target range. |
| `toHigh` | `number` | The upper bound of the value's target range. Default: `4`. |

**Returns:** `number`

**Block:** map [value] from low [fromLow] high [fromHigh] to low [toLow] high [toHigh]

```typescript
let result = Math.map(0, 0, 1023, 0, 4)
```

## abs

Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.

```typescript
Math.abs(x: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | A numeric expression for which the absolute value is needed. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.abs(0)
```

## acos

Returns the arccosine (in radians) of a number

```typescript
Math.acos(x: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | A number. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.acos(0)
```

## asin

Returns the arcsine (in radians) of a number

```typescript
Math.asin(x: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | A number. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.asin(0)
```

## atan

Returns the arctangent (in radians) of a number

```typescript
Math.atan(x: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | A number. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.atan(0)
```

## atan2

Returns the arctangent of the quotient of its arguments.

```typescript
Math.atan2(y: number, x: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `y` | `number` | A number. |
| `x` | `number` | A number. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.atan2(0, 0)
```

## ceil

Returns the smallest number greater than or equal to its numeric argument.

```typescript
Math.ceil(x: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | A numeric expression. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.ceil(0)
```

## clamp

```typescript
Math.clamp(min: number, max: number, value: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `min` | `number` |  |
| `max` | `number` |  |
| `value` | `number` |  |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.clamp(0, 0, 0)
```

## cos

Returns the cosine of a number.

```typescript
Math.cos(x: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | An angle in radians. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.cos(0)
```

## E

```typescript
Math.E: number
```

**Block:** e

```typescript
let value = Math.E
```

## exp

Returns returns ``e^x``.

```typescript
Math.exp(x: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | A number. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.exp(0)
```

## floor

Returns the greatest number less than or equal to its numeric argument.

```typescript
Math.floor(x: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | A numeric expression. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.floor(0)
```

## idiv

Returns the value of integer signed 32 bit division of two numbers.

```typescript
Math.idiv(x: number, y: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | The first number. |
| `y` | `number` | The second number. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.idiv(0, 0)
```

## imul

Returns the value of integer signed 32 bit multiplication of two numbers.

```typescript
Math.imul(x: number, y: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | The first number. |
| `y` | `number` | The second number. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.imul(0, 0)
```

## isNaN

Exposes JavaScript's isNaN() function

```typescript
Math.isNaN(n: number): boolean
```

| Parameter | Type | Description |
|---|---|---|
| `n` | `number` |  |

**Returns:** `boolean`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.isNaN(0)
```

## LN10

```typescript
Math.LN10: number
```

**Block:** ln(10)

```typescript
let value = Math.LN10
```

## LN2

```typescript
Math.LN2: number
```

**Block:** ln(2)

```typescript
let value = Math.LN2
```

## log

Returns the natural logarithm (base e) of a number.

```typescript
Math.log(x: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | A number. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.log(0)
```

## LOG10E

```typescript
Math.LOG10E: number
```

**Block:** log₁₀(e)

```typescript
let value = Math.LOG10E
```

## LOG2E

```typescript
Math.LOG2E: number
```

**Block:** log₂(e)

```typescript
let value = Math.LOG2E
```

## max

Returns the larger of two supplied numeric expressions.

```typescript
Math.max(a: number, b: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `a` | `number` |  |
| `b` | `number` |  |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.max(0, 0)
```

## min

Returns the smaller of two supplied numeric expressions.

```typescript
Math.min(a: number, b: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `a` | `number` |  |
| `b` | `number` |  |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.min(0, 0)
```

## PI

```typescript
Math.PI: number
```

**Block:** π

```typescript
let value = Math.PI
```

## pow

Returns the value of a base expression taken to a specified power.

```typescript
Math.pow(x: number, y: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | The base value of the expression. |
| `y` | `number` | The exponent value of the expression. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.pow(0, 0)
```

## random

Returns a pseudorandom number between 0 and 1.

```typescript
Math.random(): number
```

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.random()
```

## round

Returns a supplied numeric expression rounded to the nearest number.

```typescript
Math.round(x: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | The value to be rounded to the nearest number. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.round(0)
```

## roundWithPrecision

Rounds ``x`` to a number with the given number of ``digits``

```typescript
Math.roundWithPrecision(x: number, digits: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | The number to round. |
| `digits` | `number` | The number of resulting digits. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.roundWithPrecision(0, 0)
```

## sign

Returns the sign of the x, indicating whether x is positive, negative or zero.

```typescript
Math.sign(x: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | The numeric expression to test. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.sign(0)
```

## sin

Returns the sine of a number.

```typescript
Math.sin(x: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | An angle in radians. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.sin(0)
```

## sqrt

Returns the square root of a number.

```typescript
Math.sqrt(x: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | A numeric expression. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.sqrt(0)
```

## SQRT1_2

```typescript
Math.SQRT1_2: number
```

**Block:** √½

```typescript
let value = Math.SQRT1_2
```

## SQRT2

```typescript
Math.SQRT2: number
```

**Block:** √2

```typescript
let value = Math.SQRT2
```

## tan

Returns the tangent of a number.

```typescript
Math.tan(x: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | An angle in radians. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.tan(0)
```

## trunc

Returns the number with the decimal part truncated.

```typescript
Math.trunc(x: number): number
```

| Parameter | Type | Description |
|---|---|---|
| `x` | `number` | A numeric expression. |

**Returns:** `number`

**Block:** none. This is available in JavaScript only.

```typescript
let result = Math.trunc(0)
```
