// Guide says: AwaitExpression not supported
async function wait1() { return 1 }
async function go() { let v = await wait1(); player.say(`${v}`) }
go()
