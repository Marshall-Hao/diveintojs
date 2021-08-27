const uniqueList = [1, 2, 3, 4, 4, 4, 4, 5];
const newNumber = 4;
const set = new Set(uniqueList); // ! similar to array, but element in set is unique
set.add(6);
set.delete(3);
console.log(set.has(2)); //! can only check if has the value?
console.log(set);

const removeDups = (arrays) => {
  return [...new Set(arrays)]; // * return an array!not set
};

console.log(removeDups([1, 2, 3, 4, 3, 2, 5]));
