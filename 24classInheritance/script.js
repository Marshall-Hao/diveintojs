class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`I am ${this.name}`);
  }
}

const animal = new Animal("Wow");
animal.speak();

class Dog extends Animal {
  // * inherite from animal
  constructor(name, owner) {
    super(name); //! call the prototype property first
    this.owner = owner;
  }

  speak() {
    console.log("Bark");
  }
}

const dog = new Dog("Michi", "Marshall");
console.log(dog);
dog.speak();
