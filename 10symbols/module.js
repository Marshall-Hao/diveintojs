const sym = Symbol("Name"); //! Symbol is always unique
export const person = {
  // ! least chance to use symbol, but can set for conditipn check since symbol is unique
  age: 25,
  [sym]: "Marshall",
};

// console.log(person);

// Object.entries(person).forEach(([key, value]) => {
//   console.log(key, value);
// });

// console.log(JSON.stringify(person));
// console.log(Object.getOwnPropertySymbols(person));
