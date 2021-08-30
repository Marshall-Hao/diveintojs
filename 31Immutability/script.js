const deepFreeze = (object) => {
  Object.values(object).forEach((value) => {
    //* Object.value(object) will return an array containing the given object's own enumerable property values.
    if (value && typeof value === "object") {
      //* type of each element is an pbject (weird)
      deepFreeze(value); // * recursion until the nested level
    }
  });
  return Object.freeze(object);
};

const person = deepFreeze({
  //! only freeze the first level
  name: "Marshall",
  friends: Object.freeze(["A", "B"]), //! now nested freeze array
  address: {
    street: "12345",
  },
});

person.address.street = "asdasd"; // ! since freeze
const newPerson = deepFreeze({
  ...person,
  address: { ...person.address, street: "123" },
});
console.log(person);
console.log(newPerson);
