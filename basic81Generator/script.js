function* generatorFunc() {
  const a = yield "a";
  console.log(a);
  yield "b";
  return "c";
}

const generatorObj = generatorFunc();

console.log(generatorObj.next());

console.log(generatorObj.next("casc"));

console.log(generatorObj.next());

function* generatorFunc2() {
  const a = yield "a";
  console.log(a);
  if (a === "foo") {
    console.log("if");
  } else {
    console.log("else");
  }
}

const generatorObj2 = generatorFunc2();

console.log(generatorObj2.next());
console.log(generatorObj2.next("foo"));

class Foo {
  constructor(items) {
    this.items = items;
  }
  [Symbol.iterator]() {
    for (const item of this.items) {
      console.log(item);
    }
  }
}

const foo = new Foo(["a", "b", "c"]);
foo[Symbol.iterator]();
