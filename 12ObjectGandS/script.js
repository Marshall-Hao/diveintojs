const person = {
  _username: "mindfuck", //! underscore means pvt property
  firstName: "Marshall",
  lastName: "Chen",
  age: 25,
  get birthYear() {
    //! get make an function a property
    const date = new Date();
    return date.getFullYear() - this.age;
  },
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};

console.log(person.fullName); //! with getter doesnt need to call function

person.fullName = "Tom Jerry"; // ! reset the property value into the pbject

console.log(person);
console.log(person.birthYear);
