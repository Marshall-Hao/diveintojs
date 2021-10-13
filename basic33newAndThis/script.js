let obj = {
  name: "Marshall",
};
function User(name, age) {
  //! capital name means a Object function
  //* always have this = {} as hidden
  this.name = name;
  this.age = age;
  this.human = true;
  return obj; //! will return the obj
  //* return this as hidden
}

const user = new User("aaa", 13);
console.log(user);

function C() {
  console.log(this); //* this is window for normal function
}

C();
