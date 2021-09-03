class Animal {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log(`${this.name} attacked`);
  }

  sleep() {
    console.log(`${this.name} slept`);
  }
}

class Bear extends Animal {
  walk() {
    console.log(`{this.name} walk`);
  }
}

class Shark extends Animal {
  swim() {
    console.log(`${this.name} swam`);
  }
}

class Bird extends Animal {
  fly() {
    console.log(`${this.name} flew`);
  }
}

const walker = ({ name }) => {
  return {
    walk() {
      console.log(`${name} walked`);
    },
  };
};

const swimmer = ({ name }) => {
  return {
    swim() {
      console.log(`${name} swam`);
    },
  };
};

const attacker = ({ name }) => {
  return {
    attack() {
      console.log(`${name} attacked`);
    },
  };
};

const sleeper = ({ name }) => {
  return {
    sleep() {
      console.log(`${name} slept`);
    },
  };
};

const flyer = ({ name }) => {
  return {
    fly() {
      console.log(`${name} flew`);
    },
  };
};

const fucker = (name) => {
  return {
    fuck() {
      console.log(`${name} fucked`);
    },
  };
};

const createBear = (name) => {
  const bear = { name };
  return {
    ...bear,
    ...attacker(bear),
    ...sleeper(bear),
    ...walker(bear),
    ...fucker(bear.name),
  };
};

const bear = createBear("Marshall");

// const bear = new Bear("Bear");
bear.attack();
bear.sleep();
bear.walk();
bear.fuck();
const shark = new Shark("Shark");
shark.attack();
shark.sleep();
shark.swim();
const bird = new Bird("Bird");
bird.attack();
bird.sleep();
bird.fly();
