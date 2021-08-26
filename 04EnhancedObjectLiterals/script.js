const propertName = "name";
const index = 1;
const lastName = "chan";
const firstName = "Marshall";
const age = 25;
const sayHi = () => {
  console.log("Hi");
};

const person = {
  // ! good way to use literals
  [propertName]: lastName, // * a tricky way to use a variable value as key in object
  [`age${index}`]: age, // * combine ``
  firstName, // *same as firstName: firstName,
  age, //*same as age: age,
  sayOh() {
    // * good way to write function inside an object
    console.log("oh");
  },
  sayHi, //*same as sayHi: sayHi,
};

console.log(person);
