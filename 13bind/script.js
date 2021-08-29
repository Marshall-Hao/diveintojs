window.name = "Global Name";

const person = {
  name: "Marshall",
};

function printName() {
  console.log(this.name);
}

const newPrintName = printName.bind(person);
newPrintName();

function sum(a, b) {
  return a + b;
}

const sumTwo = sum.bind(null, 2); //!bind is good for a certain value for arguments or we need to change this cuz the scoping

console.log(sumTwo(7));
