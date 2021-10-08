const programer = {};
Object.defineProperties(programer, {
  //* (对象，属性名，属性描述)
  glass: {
    // * （属性名，属性描述值）
    value: "Rayban",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  tee: {
    value: "culture shirt",
    writable: false,
    configurable: false,
  },
  clockIn: {
    value: function () {
      alert("9:30am");
    },
    writable: false, //! cannot be modify
    enumerable: true,
  },
});

programer.glass = "cootie";
console.log(programer.glass);

programer.tee = "dcdt";
console.log(programer.tee);
console.log(delete programer.tee);

console.log(programer.hasOwnProperty("tattoo")); //! has this key-value property or not

console.log(Object.keys(programer)); // ! get all the keys from the object

var Alex = { tee: "github" };
var Bob = { tee: "coffeeScript", hoodie: "coffeeScript" };
var Chamberlain = { tee: "netease" };

var newBee = Object.assign({}, Alex, Bob, Chamberlain); //! will get the latest one key-value pair
console.log(newBee);

console.log(programer.valueOf()); //! return the original data, before any modify
