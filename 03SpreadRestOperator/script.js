const array = ["A", "B", "C", "D"];
const numberArray = [2, 3, 4];
const person = {
  favoriteFood: "Pizza",
  address: {
    street: "Qianhai",
    city: "SZ",
  },
};

const details = {
  name: "Marshall",
  age: 27,
};

/*
! good example to use spread operator -- array
*/
const newArray = [...numberArray]; // * good way to "copy" an exsiting array,since array is a ref
console.log(newArray);

const divs = [...document.querySelectorAll("div")]; // * return a nodeList not exact array, so use spread operator to be an array
divs.map((div) => {
  console.log(div);
});

const [first, second, ...rest] = array; //* spread operator combine with destructuring
console.log(first, second, rest);

/*
! good example to use spread operator -- object
*/
const { name, age, ...restObj } = person; //* combine spread operator with destruturing
console.log(name, age, restObj);

// * a good way to "copy" an obejct, since object is a ref,
// * can also combine two different object but need to watch out the order in case it will overwrite the og info
const person2 = { ...person, friend: "Sally", ...details };
console.log(person2);
/*
 ! use of rest operator(...), convert to array
 */
// const sum = (multiplier, ...numbers) => {
//   console.log(multiplier);
//   console.log(numbers);
//   return multiplier * numbers.reduce((sum, number) => sum + number, 0); // * sum is the accumulator, reduce the array into one value
// };

// sum(10, ...numberArray); // * spread out the array with ... same as array[0],array[1] etc
