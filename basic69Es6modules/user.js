const me = {
  name: "Marshall",
  age: 27,
};

export const eva = {
  //! another way to export
  name: "Eva",
  age: 33,
};

export function printUser1(user) {
  console.log(`1.${user.name} and ${user.age}`);
}

export const printUser2 = (user) => {
  console.log(`2.${user.name} and ${user.age}`);
};

export const printUser3 = (user) => {
  console.log("3. ${user.name} and ${user.age}");
};

export default me; //! this is the default thing gonna be exported from this file
//! into the import file, we can also rename the variable name
//! export default can only export one thing
