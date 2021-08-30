class Person {
  constructor(name) {
    this.name = name;
  }
}

class Janitor extends Person {
  constructor(name, numberOfMops) {
    super(name);
    this.numberOfMops = numberOfMops;
  }

  #internalOnlyVariable = true; //!protected vaiable(private property?) starts with #
  #cleaningProductCount = 10; //! protected vaiable(private property?) only apply for the class that created not for the children class

  set cleaningProductCount(value) {
    //! setter good for condition sometimes
    if (value > 5) {
      this.#cleaningProductCount = value;
    }
  }

  clean() {
    this.#helperFunction(); //! if inheriance class wanna use this class's pvt method
    if (this.#internalOnlyVariable === true) {
      console.log(`Hi`);
    }
    console.log(
      `Cleaned with ${this.numberOfMops} mops and ${
        this.#cleaningProductCount
      } products`
    );
  }

  #helperFunction() {
    //! private function
    console.log("help");
  }
}

const janitor = new Janitor("Jerry", 5);
janitor.cleaningProductCount = 3; //! set a condition for setter
janitor.clean();
