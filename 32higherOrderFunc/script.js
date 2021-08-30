const everyOtherMap = (a, func) => {
  return a.map((element, i) => {
    if (i % 2 === 0) return func(element);
    return element;
  });
};
const array = [1, 2, 3, 4, 5];
// const newArray = array
//   .map((element) => element * 2)
//   .map((element) => element / 3);
const newArray = everyOtherMap(array, (element) => element * 2);
console.log(newArray);

const people = [
  {
    name: "Marshall",
    friends: ["A", "B"],
  },
  {
    name: "Kev",
    friends: ["C"],
  },
  {
    name: "Sergey",
    friends: ["E", "F"],
  },
  {
    name: "Marshall",
    friends: ["E", "F"],
  },
];

const groupBy = (array, func) => {
  //! smart
  return array.reduce((grouping, element) => {
    const key = func(element); //! can change the func for different scenerio
    if (grouping[key] == null) grouping[key] = [];
    grouping[key].push(element);
    return grouping;
  }, {});
};

const results = groupBy(people, (person) => person.friends.length);
console.log(results);
const newResults = groupBy(people, (person) => person.name);
console.log(newResults);
