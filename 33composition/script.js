import { curry, groupBy, sortBy } from "lodash";
import { compose, flow } from "lodash/fp";

const array = [1, 2, 3, 4, 5];

const double = (element) => {
  return element * 2;
};

const addOne = (element) => {
  return element + 1;
};

// const doubleAndAddOne = (element) => {
//   return addOne(double(element));
// };

// const doubleAndAddOne = compose(addOne, double);
const doubleAndAddOne = flow(double, addOne);
console.log(array.map(doubleAndAddOne));
console.log(groupBy(array, (element) => element % 2));

const arrayName = [
  {
    name: "Kyle",
  },
  {
    name: "Sally",
  },
  {
    name: "Joey",
  },
];

console.log(
  groupBy(
    sortBy(arrayName, (element) => element.name),
    (element) => element.name.length
  )
);
