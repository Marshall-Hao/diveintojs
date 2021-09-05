const printName = () => {
  name = name || "default"; //! elegant way
  console.log(name);
};

const person = undefined;

console.log(person && person.address && person.address.strert);
