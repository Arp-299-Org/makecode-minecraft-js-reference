# TargetSelector

A target selector

`TargetSelector` is a class. In the examples below, `targetSelector` stands for a value of this type.

| Member | Description |
|---|---|
| [`atCoordinate`](#atcoordinate) | Sets the base coordinates for this target selector |
| [`withinRadius`](#withinradius) | Sets the maximum distance from this selector's base coordinates |
| [`addRule`](#addrule) | Adds a rule to this target selector |
| [`outsideRadius`](#outsideradius) | Sets the minimum distance from this selector's base coordinates |
| [`toString`](#tostring) | Returns a string containing the game notation for this target selector |

## atCoordinate

Sets the base coordinates for this target selector

```typescript
targetSelector.atCoordinate(p: Position): void
```

| Parameter | Type | Description |
|---|---|---|
| `p` | `Position` | The coordinates at which this selector should be set. |

**Block:** [selector] set coordinate [p]

```typescript
targetSelector.atCoordinate(pos(0, 0, 0))
```

## withinRadius

Sets the maximum distance from this selector's base coordinates

```typescript
targetSelector.withinRadius(radius: number): void
```

| Parameter | Type | Description |
|---|---|---|
| `radius` | `number` | The maximum distance (in blocks) for this target selector. Default: `5`. |

**Block:** [selector] set max radius [r]

```typescript
targetSelector.withinRadius(5)
```

## addRule

Adds a rule to this target selector

```typescript
targetSelector.addRule(rule: string, value: string): void
```

| Parameter | Type | Description |
|---|---|---|
| `rule` | `string` | The rule to add. Default: `type`. |
| `value` | `string` | The value for the rule. Default: `chicken`. |

**Block:** [selector] add rule [rule] equals [value]

```typescript
targetSelector.addRule("type", "chicken")
```

## outsideRadius

Sets the minimum distance from this selector's base coordinates

```typescript
targetSelector.outsideRadius(radius: number): void
```

| Parameter | Type | Description |
|---|---|---|
| `radius` | `number` | The minimum distance (in blocks) for this target selector. Default: `10`. |

**Block:** [selector] set min radius [r]

```typescript
targetSelector.outsideRadius(10)
```

## toString

Returns a string containing the game notation for this target selector

```typescript
targetSelector.toString(): string
```

**Returns:** `string`

**Block:** [selector] to string

```typescript
let result = targetSelector.toString()
```
