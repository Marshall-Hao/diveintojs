// * make a diretory
// * read the files under the current dir
// * copy it to the new directory

const fs = require("fs");

// function mkdriPromise(path) {
//   return new Promise((resolve, reject) => {
//     fs.mkdir(path, (err) => {
//       if (err) reject(err);
//       resolve();
//     });
//   });
// }

// function readFilePromise(path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, (err, content) => {
//       if (err) reject(err);
//       resolve(content);
//     });
//   });
// }

// * promise 制造工厂 工厂模式

function makeFilePromise(fn) {
  let handle = function (path) {
    return new Promise((resolve, reject) => {
      fn.call(this, path, function (err, content) {
        if (err) reject(err);
        if (content) resolve(content);
        resolve();
      });
    });
  };
  return handle;
}

const mkdirPromise = makeFilePromise(fs.mkdir);
const readFilePromise = makeFilePromise(fs.readFile);
const dirPromise = makeFilePromise(fs.readdir);

const copyFile = function (res) {
  res.forEach((file) => {
    readFilePromise("advanced5.2Final/dir/" + file).then((res) => {
      fs.writeFile("advanced5.2Final/copydir/" + file, res, () => {});
    });
  });
};

Promise.resolve()
  .then(mkdirPromise.bind(this, "advanced5.2Final/copydir"))
  .then(dirPromise.bind(this, "advanced5.2Final/dir"))
  .then(copyFile);
