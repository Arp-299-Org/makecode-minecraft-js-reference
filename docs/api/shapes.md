# shapes

Fill lines, spheres and other geometric shapes

| Member | Description |
|---|---|
| [`line`](#line) | Fill a line of blocks from one position to another. |
| [`circle`](#circle) | Fill a circle of blocks at a center position. |
| [`sphere`](#sphere) | Fill a sphere of blocks at a center position. |

## line

Fill a line of blocks from one position to another.

```typescript
shapes.line(block: Block, p0: Position, p1: Position, extrusion?: Position): void
```

| Parameter | Type | Description |
|---|---|---|
| `block` | [`Block`](enums.md#block) |  |
| `p0` | `Position` |  |
| `p1` | `Position` |  |
| `extrusion` *(optional)* | `Position` |  |

**Block:** line of [block] from [p0] to [p1]

```typescript
shapes.line(STONE, pos(0, 0, 0), pos(0, 0, 0))
```

## circle

Fill a circle of blocks at a center position.

```typescript
shapes.circle(block: Block, center: Position, radius: number, orientation: Axis, operator: ShapeOperation): void
```

| Parameter | Type | Description |
|---|---|---|
| `block` | [`Block`](enums.md#block) |  |
| `center` | `Position` |  |
| `radius` | `number` | The radius of the circle. Default: `5`. |
| `orientation` | [`Axis`](enums.md#axis) |  |
| `operator` | [`ShapeOperation`](enums.md#shapeoperation) |  |

**Block:** circle of [block] center [center] radius [radius] around [orientation] [operator]

```typescript
shapes.circle(STONE, pos(0, 0, 0), 5, Axis.X, ShapeOperation.Replace)
```

## sphere

Fill a sphere of blocks at a center position.

```typescript
shapes.sphere(block: Block, center: Position, radius: number, operator: ShapeOperation): void
```

| Parameter | Type | Description |
|---|---|---|
| `block` | [`Block`](enums.md#block) |  |
| `center` | `Position` |  |
| `radius` | `number` | The radius of the sphere. Default: `5`. |
| `operator` | [`ShapeOperation`](enums.md#shapeoperation) |  |

**Block:** sphere of [block] center [center] radius [radius] [operator]

```typescript
shapes.sphere(STONE, pos(0, 0, 0), 5, ShapeOperation.Replace)
```
