var courseJson =
  '{\
    "name": "Frontend",\
    "lesson": "JSON",\
    "releaseTime": "1515220054400"\
}';

var result1 = JSON.parse(courseJson, (key, value) => {
  if (key === "name") {
    return "Backend";
  }
  return value;
}); // * JSON to JS object, second parameter is the reviver

console.log(result1);

var course = {
  name: "Frontend",
  lesson: "JSON",
  releaseTime: "1515220054400",
};

var result2 = JSON.stringify(
  course,
  function (key, value) {
    // * change the value
    if (key === "releaseTime") {
      return "2021.1.1";
    }
    return value;
  },
  "\n" // * another parameter to add a new line, 字符串
);

console.log(result2);
