// Checks the three rows of "The builder: how it actually behaves" in docs/javascript-guide.md.
// Use a flat world. Paste into Code Builder's JavaScript view, press Run, then stand somewhere empty
// and type each command in chat. Look at what gets built (the expected result is next to each one).

// 1. tracePath builds everything since the last mark.
//    Expected: one 12-block gold line, no gap (the second trace rebuilds from the first mark).
player.onChat("retrace", function () {
    builder.teleportTo(pos(2, 0, 0))
    builder.face(CompassDirection.North)
    builder.mark()
    builder.move(FORWARD, 4)
    builder.tracePath(DIAMOND_BLOCK)
    builder.move(FORWARD, 3)
    builder.move(FORWARD, 4)
    builder.tracePath(GOLD_BLOCK)
})

// 1b. A new mark starts a new path.
//     Expected: 5 diamond, a 2-block gap, 5 gold.
player.onChat("gap", function () {
    builder.teleportTo(pos(4, 0, 0))
    builder.face(CompassDirection.North)
    builder.mark()
    builder.move(FORWARD, 4)
    builder.tracePath(DIAMOND_BLOCK)
    builder.move(FORWARD, 3)
    builder.mark()
    builder.move(FORWARD, 4)
    builder.tracePath(GOLD_BLOCK)
})

// 2. The builder keeps its direction between runs (no builder.face here on purpose).
//    Type "turning" three times. Expected if the guide is right: each run's line points a different way
//    (north-ish first, then turned left each time), all starting from the same spot.
player.onChat("turning", function () {
    builder.teleportTo(pos(-3, 0, 0))
    builder.mark()
    builder.move(FORWARD, 3)
    builder.tracePath(EMERALD_BLOCK)
    builder.turn(LEFT_TURN)
})

// 3. The builder can build where the player stands.
//    Expected: a block appears at your feet and you get pushed aside.
player.onChat("feet", function () {
    builder.teleportTo(pos(0, 0, 0))
    builder.mark()
    builder.tracePath(GLASS)
})
