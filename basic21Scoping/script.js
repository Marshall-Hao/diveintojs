function sayHi(name) {
  //! inner scope can see the outside scope stuff
  let result = `hi ${name}` + a;
  console.log(result);
}

let a = 2;
let name = "Marshall"; //! outer scope cannot see the stuff of inner scope
sayHi(name);

//! everytime u have a {}(curly braces)
//! , means u working inside the {scope}
//! and the whole script is working as a global scope
var c = 3;
{
  let a = 1;
  var c = 4;
  {
    let b = 2;
    console.log(this.c);
    console.log(a); // *uter
    console.log(b); // *inner
    console.log(c); // *most outer
  }
}

let bo = 10;
function foo() {
  console.log(bo);
}
(function () {
  let bo = 20;

  console.log(bo);
})();
(function (func) {
  let bo = 30;
  func();
})(foo);
