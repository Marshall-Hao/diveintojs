window.name = "Global Name";

const person = {
  name: "Marshall",
};

function printName() {
  console.log(this.name);
}

printName.apply(person); //! if doesnt pass parameters then apply and call work the same

const sum = (a, b) => {
  return a + b;
};

console.log(sum.call(null, 2, 3)); //! null is the place for this
console.log(sum.apply(null, [2, 3])); //! apply need to wrap the parameter in an []

const largeSum = (...numbers) => {
  return numbers.reduce((count, n) => count + n);
};

const numbersToAdd = [1, 2, 3, 4, 5];

console.log(largeSum.apply(null, numbersToAdd)); //! [] inside apply is not an array
console.log(largeSum.call(null, ...numbersToAdd));
