var x = 1;

async function foo() {
    var y = x;
    await delay(100); // whatever async here
    x = y+1;
    await foo();
await foo();
await foo();
console.log(x);
}

