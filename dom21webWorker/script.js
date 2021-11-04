let worker = new Worker("worker.js");
let obj = {
  name: "main thread",
};

worker.onmessage = (e) => {
  console.log(e.data);
  console.log(e.data === obj);
};
worker.postMessage(obj);

let str = [];
str.push(
  'importScripts("http://127.0.0.1:5500/dom21webWorker/worker_util.js");'
);
str.push(
  "onmessage = (e) => {let data = e.data;data.name = getName();postMessage(data);};"
);

let blob = new Blob(str);
let worker2 = new Worker(URL.createObjectURL(blob));

worker2.onmessage = (e) => {
  console.log(e.data);
  console.log(e.data === obj);
};
worker2.postMessage(obj);
