//* var b = undefined

{
  var a = 1; //! there is no scope for var, can use anywhere
}
var a = 2; //! var can always be overwritten
console.log(b);
console.log(a);
var b = 2; //! var has hoisting,
