const sum = (a, b) => {
  return a + b;
};

const getLargest = (array) => {
  if (array.length === 0) return null;

  return array.reduce((largest, number) => {
    if (number > largest) return number;
    return largest;
  }, array[0]);
};

module.exports = {
  sum,
  getLargest,
};
