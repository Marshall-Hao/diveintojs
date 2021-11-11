const fs = require("fs"); // * file处理

fs.readFile(__dirname, (_) => {
  console.log(__dirname);
  setTimeout((_) => {
    console.log("setTimeout");
  }, 0);
  setImmediate((_) => {
    console.log("setImmediate");
  });
});
