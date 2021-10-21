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
    let index = 0;
    const { items } = this;
    return {
      next() {
        const item = items[index++];
        if (item) {
          return { value: item, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const foo = new Foo(["a", "b", "c"]);
console.log(foo[Symbol.iterator]().next());
console.log(foo[Symbol.iterator]().next());
console.log(foo[Symbol.iterator]().next());
