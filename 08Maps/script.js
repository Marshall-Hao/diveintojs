const user = {
  name: "Marshall",
};

const map = new Map([
  // ! map keep the same order when u add pair not like object
  [1, "A"],
  [2, "B"],
  [3, "C"],
  [4, "D"],
]);

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

console.log(Object.entries(obj));
Object.entries(obj).forEach(([key, value]) => {
  // * array destucturing
  console.log(key, value);
});

map.set(5, "E"); //! set a pair in map
map.delete(1);
console.log(map.get(3));
map.forEach((value, key) => {
  // ! map is better for iteration than object
  console.log(value, key);
});
console.log(map);
// const map = new Map([
// ! watch out the format, any data type(boolean,object) can be key
//   [{ a: 1 }, "USD"],
//   ["India", "Rupee"],
// ]);
// console.log(map);

// const CURRENCY_MAP = {
//   "United States": "USD",
//   India: "Rupee",
// };

// const currency = CURRENCY_MAP.India;

// console.log(currency);

// const CURRENCIES = [
//   { name: "USD", country: "United State" },
//   { name: "Rupee", country: "india" },
// ];

// const _currency = CURRENCIES.find((c) => c.country === "india").name;
