// Checks every "Works ✅" row in docs/javascript-guide.md.
// Paste into Code Builder's JavaScript view, press Run, then type "check" in chat.
// Each line in chat says PASS or FAIL. Anything that doesn't compile is itself a FAIL for that row.

let results: string[] = []
function check(name: string, ok: boolean) {
    results.push((ok ? "PASS " : "FAIL ") + name)
}

// Used by the classes, enums, interfaces and generics rows
class Tower {
    height: number
    constructor(h: number) { this.height = h }
    double(): number { return this.height * 2 }
}
enum Mode { Easy, Hard }
interface Pt { x: number; y: number }
function id<T>(v: T): T { return v }
function add(a: number, b = 2) { return a + b }

player.onChat("check", function () {
    results = []

    let n = 5
    const name = "Steve"
    check("variables", n == 5 && name == "Steve")

    let typed: number = 5
    check("type annotations", typed == 5)

    check("numbers strings booleans", 3.5 + 1 == 4.5 && "te" + "xt" == "text" && true)

    let score = 7
    check("template strings", `Score: ${score}` == "Score: 7")

    let s = n > 3 ? "big" : "small"
    let branch = 0
    if (n > 10) { branch = 1 } else { branch = 2 }
    check("if/else and ternary", s == "big" && branch == 2)

    let list = [1, 2, 3]
    let sum = 0
    for (let i = 0; i < list.length; i++) sum += list[i]
    for (let v of list) sum += v
    let w = 0
    while (w < 3) w++
    let d = 0
    do { d++ } while (d < 2)
    check("for, for...of, while, do...while", sum == 12 && w == 3 && d == 2)

    let k = 5
    let picked = ""
    switch (k) {
        case 5: picked = "five"; break
        default: picked = "other"
    }
    check("switch", picked == "five")

    check("default parameters", add(1) == 3 && add(1, 5) == 6)

    let f = (v: number) => v + 1
    check("arrow functions", f(1) == 2)

    let arr = [1, 2, 3]
    arr.push(4)
    let mapped = arr.map(x => x * 2).filter(x => x > 2)
    let total = arr.reduce((a, v) => a + v, 0)
    check("array methods", arr.length == 4 && mapped.length == 3 && total == 10 && arr.join(",") == "1,2,3,4")

    check("string methods", "abc".toUpperCase() == "ABC" && "abc".includes("b"))

    let t = new Tower(3)
    check("classes", t.height == 3 && t.double() == 6)

    let modes = [Mode.Easy, Mode.Hard]
    check("enums", modes[1] == Mode.Hard && Mode.Easy == 0 && Mode.Hard == 1)

    let p: Pt = { x: 1, y: 2 }
    check("interfaces and object literals", p.x == 1 && p.y == 2)

    check("generics", id<number>(4) == 4 && id("a") == "a")

    let u: number | string = 3
    check("union types", u == 3)

    let caught = false
    try { throw "oops" } catch (e) { caught = true }
    check("try/catch/throw", caught)

    check("typeof", typeof list == "object")

    let [a, b] = list
    check("array destructuring", a == 1 && b == 2)

    let o: any = {}
    o.foo = 3
    check("any objects", o.foo == 3)

    // The "watch out" row: object destructuring is said to compile but give undefined.
    let { x, y } = { x: 1, y: 2 }
    check("object destructuring is broken (guide says x is undefined)", x === undefined)

    let passed = results.filter(r => r.indexOf("PASS") == 0).length
    for (let r of results) player.say(r)
    player.say(`${passed} of ${results.length} passed`)
})

player.say("works.ts loaded: type check")
