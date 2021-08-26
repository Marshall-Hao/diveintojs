const greet = (firstName = "Sally", lastName) => {
  // * ?? Null(undefined)Coalescing
  lastName = lastName ?? "Smith"; //! only pass smith is  null or undefined
  console.log(`${firstName} ${lastName}`);
};

greet("Marshall");

console.log(undefined ?? (false && (true || false))); // ! always wrap other stuff inside ()
