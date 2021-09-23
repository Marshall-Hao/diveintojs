// Todo: for display
// 1. Populate a board with tiles/mines
// 2. Left click on tiles
// a. reveal tiles
//3. Right click on tiles
//a. mark tiles
//4. check for win/lose

let a = { age: 12 };
let b = a;
a = { name: "BOB", age: 13 };
b.age = 14;
console.log(b.age, a.name, a.age);

function fn2(obj) {
  obj = { age: 15 };
}
fn2(a);

console.log(a.age);
