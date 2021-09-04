function User(name, age) {
  //! capital name means a Object function
  //* always have this = {} as hidden
  this.name = name;
  this.age = age;
  this.human = true;
  //* return this as hidden
}

const user = new User("aaa", 13);
