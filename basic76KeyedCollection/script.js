//! Map
const programmer = new Map([
  ["tee", "dcdt"],
  ["hoodie", "wtaps"],
]);

programmer.set("shoes", "visvim");
programmer.set("hat", "cootie");

console.log(programmer.get("hat"));
console.log(programmer);
console.log(programmer.constructor);

//! WeakMap, key must be an object
const ex = {};
const programmer1 = new WeakMap([[ex, {}]]);
console.log(programmer1);

//! WeakSet， key must be an object
let a = "5" + "2";
let b = "5" - "2";
console.log(a, b);
