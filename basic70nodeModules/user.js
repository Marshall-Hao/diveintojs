const me = {
  name: "Marshall",
  age: 27,
};

const eva = {
  name: "Eva",
  age: 33,
};

function printUser1(user) {
  console.log(`1.${user.name} and ${user.age}`);
}

const printUser2 = (user) => {
  console.log(`2.${user.name} and ${user.age}`);
};

module.exports = {
  //! module is a special varaiable in node.js
  //! can only export one thing
  me: me,
  eva: eva,
  printUser1: printUser1,
  printUser2: printUser2,
};
