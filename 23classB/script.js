class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static goodName = "Cutee"; //* static value comes with a word static
  static printHi() {
    console.log("Hey");
  }

  printName() {
    console.log(this.name);
  }
}

const person = new Person("Marshall", 27);

// Person.printHi = () => {
//   console.log("Hi");
// };

console.log(person);
person.printName();
Person.printHi();

function User1(email, password, language) {
  this.email = email;
  this.password = password;
  this.language = language;
  this.printPassword = () => {
    console.log(this.password);
  };
}

const user1 = new User1("av", "123", "zh");
console.log(user1);
class User2 {
  constructor(email, password, language) {
    this.email = email;
    this.password = password;
    this.language = language;
  }

  get name() {
    return this.email.split("@")[0];
  }

  set name(value) {
    const [, suffix] = this.email.split("@");
    this.email = value + "@" + suffix;
  }

  printPassword() {
    console.log(this.password);
  }
}

const user2 = new User2("av@123", "123", "zh");
user2.name = "Marshall";
console.log(user2.name);
