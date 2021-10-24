// * Reflect.apply()
console.log(Math.min(1, 3, 4, 5));
console.log(Reflect.apply(Math.min, undefined, [1, 3, 4, 5]));

// *Reflect.construct()
console.log(new Date(2018, 4, 1));
console.log(Reflect.construct(Date, [2018, 4, 1]));

// * Reflect.defineProperty()

//* Reflect.deleteProperty()

// * Reflect.get()

// * Reflect.set()

// * Reflect.getOwnPropertyDescriptor()

// * Reflect.getPrototypeOf()

//* Reflect.setPrototypeOf()

//* Reflect.has()

//* Reflect.ownKeys()

/*
    ! -------------Proxy--------------
*/
