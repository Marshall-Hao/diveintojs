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
console.log(person._proto_); //* not good
console.log(Object.getPrototypeOf(person)); //* get the prototype of this project
console.log(Object.getPrototypeOf(person2) === person);

/*
 *----------------------------------------
 */
let o = {};
Object.setPrototypeOf(o, person); //* set prototype for the object o to be person, thats the case for object
console.log(o); //! this is not a recommeded way, low-performance, prefer Object.create
console.log(Object.getPrototypeOf(o) === person);
console.log(person.isPrototypeOf(o)); //* check if a object is prototype of another object
console.log(Object.prototype.isPrototypeOf(o));

/*
 *---------------------------------- prototype chain
 */

function Example() {}
Example.prototype = {
  name: "John",
  age: 24,
};

const p1 = new Example();
p1.hobby = "fuck";
console.log(p1.toString);
console.log("name" in p1); //! check if attribute inside the object
console.log(Object.getPrototypeOf(p1).hasOwnProperty("name"));
console.log(p1.propertyIsEnumerable("name"));

//* key enumerable
for (let p in p1) {
  console.log(p);
}

console.log(Object.keys(p1)); // ! only get key-pair from self not prototype
console.log(Object.getOwnPropertyNames(p1));
