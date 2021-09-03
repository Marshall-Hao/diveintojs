const a = 1;
const b = "1";
console.log(a == b); //! type coetion,convert the type
console.log(a === b); //! strict rule

console.log(0 == false); // ! 0 is a falsy value, ype coetion will convert it
console.log("" == false); //! type coetion
console.log(0 === false); // !==== dont convert the type

console.log(null == undefined);
console.log(null === undefined);
