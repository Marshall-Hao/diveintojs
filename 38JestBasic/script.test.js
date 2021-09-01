const { expect, test } = require("@jest/globals");
const { sum, getLargest } = require("./script.js");

describe("#sum", () => {
  //! describe what the test for
  test("it adds numbers correctly", () => {
    //! the test purpose
    const a = 1;
    const b = 2;
    expect(sum(a, b)).toBe(3);
  });
});

describe("#getLargest", () => {
  test("it returns the largest number in the array", () => {
    const array = [1, 2, 3, 4];
    expect(getLargest(array)).toBe(4);
  });
  describe("with an empty array", () => {
    //! can be nested
    test("it returns null when given an empty array", () => {
      expect(getLargest([])).toBeNull();
    });
  });
});

test("equal vs tobe", () => {
  const obj = { a: 1, b: 2 };

  //   expect(obj).toBe({ a: 1, b: 2 }); //! since toBe check the value but object are ref value
  expect(obj).toEqual({ a: 1, b: 2 }); //! toEqual just for the actual value
});
