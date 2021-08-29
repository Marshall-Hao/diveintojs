function Person(name, age) {
  // ! constructor applys for normal function
  this.name = name;
  this.age = age;
  this.printName = () => {
    console.log(this.name);
  };
}

console.log({});

const person = new Person("Marshall", 27);
const person2 = Object.create(person);
person2.name = "John";
console.log(person2);
// console.log(Object.create(person));
console.log(person);
console.log(Object.getPrototypeOf(person));
console.log(Object.getPrototypeOf(person2) === person);
