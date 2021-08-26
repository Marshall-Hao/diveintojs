const marshall = {
  name: "Marshall",
  age: 25,
  address: {
    street: "qianhai",
    city: "SZ",
  },
  //   sayHi() {
  //     console.log("Hi");
  //   },
  hobbies: ["running", "lifting"],
};

const printStreet = (person) => {
  //   if (person && person.address) {
  //     console.log(person.address.street);
  //   }
  console.log(person?.address?.street); // ! ? js do the property check for u
};

const callSayHi = (person) => {
  person?.sayHi?.(); // ! how ? work for a function property, it will let the error away
};

const printHobby = (person) => {
  console.log(person?.hobbies?.[0]); // ! how ? work for a array property
};

printHobby(marshall);
callSayHi(marshall);
printStreet(marshall);
