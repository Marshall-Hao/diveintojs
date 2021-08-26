const greet = (
  firstName,
  lastName,
  { salutation = "Hi", suffix = "Mr" } = {} // ! little confious! important notes: if dont pass the value to the object inside the parameter, then need to give it a default empty object
) =>
  //   salutation = "Hi",
  //   fullName = `${firstName} ${lastName}` // * notice: put the default parameter at the end of the list
  {
    console.log(`${salutation} ${suffix} ${firstName} ${lastName} `);
  };

greet("Marshall", "Chan");
