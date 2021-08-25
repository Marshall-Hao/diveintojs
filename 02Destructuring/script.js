const array = ["A", "B", "C", "D", ["E", "F"]];
const person = {
  name: "Marshall",
  age: 27,
  favoriteFood: "Pizza",
  address: {
    street: "Qianhai",
    city: "SZ",
  },
};

/*
 *object destructuring
 */
const {
  name: firstName,
  age,
  address: { street, city, zipcode = "321" }, //!nested destructuring will show the most nested one, and can define property default value
} = person;

console.log(firstName);
console.log(age);
// console.log(address);
console.log(street);
console.log(zipcode);

const nameToFirstAndLast = (fullName) => {
  //  return fullName.split(" "); // split an array out
  const [firstName, lastName] = fullName.split(" ");
  return {
    firstNamee: firstName,
    lastName: lastName,
  };
};

const { firstNamee, lastName } = nameToFirstAndLast("Marshall hao");
// const [firstNamee, lastName] = nameToFirstAndLast("Marshall Chan");
console.log(firstNamee);

//! best example to use destructuring
const addAndMultiply = ({ a, b }) => {
  // can destruct during the arguments save tons line of codes
  return [a + b, a * b];
};

const [sum, product] = addAndMultiply({ a: 2, b: 3 });
console.log(product);
// * a good example to use object destructuring
// const addAndMultiply = (a, b) => {
//   return { sum: a + b, product: a * b };
// };
// const { sum, product } = addAndMultiply(2, 3);
// console.log(sum);
// console.log(product);
// * a good example to use array destructuring
// const addAndMultiply = (a, b) => {
//   return [a + b, a * b];
// };

// const [sum, product] = addAndMultiply(2, 3);
// console.log(sum);
// console.log(product);

//* a way to destruct array
const [first, second, third, fourth, [fifth, sixth]] = array; // array nested destructuring
// console.log(first);
// console.log(second);
console.log(sixth);
