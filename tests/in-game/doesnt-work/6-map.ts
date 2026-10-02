// Guide says: Cannot find name 'Map'
let m = new Map<string, number>()
m.set("a", 1)
player.say(`${m.get("a")}`)
