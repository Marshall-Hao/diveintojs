function* simpleGenerator() {
  // ! can only use function to make generator
  console.log("Before 1");
  yield 1;
  console.log("After 1");
  console.log("Before 2");
  yield 2;
  console.log("After 2");
  console.log("Before 3");
  yield 3;
  console.log("After 3");
}

const generator = simpleGenerator();
generator.next();
generator.next();
generator.next();

// ! a good usecase example
function* fibonacciGenerator() {
  let prevOne = 0;
  let prevTwo = 1;

  yield 0;
  yield 1;

  while (true) {
    const result = prevOne + prevTwo;
    yield result;
    prevOne = prevTwo;
    prevTwo = result;
  }
}

const fibGenerator = fibonacciGenerator();
console.log(fibGenerator.next());
console.log(fibGenerator.next());
console.log(fibGenerator.next());
console.log(fibGenerator.next());
console.log(fibGenerator.next());
console.log(fibGenerator.next());
console.log(fibGenerator.next());

function* idGenerator() {
  let count = 1;

  while (true) {
    yield count++;
  }
}

const idG = idGenerator();
console.log(idG.next());
console.log(idG.next());
console.log(idG.next());
console.log(idG.return(10)); //! exit out a generator
console.log(idG.next());
