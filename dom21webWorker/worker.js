// * webWorker 可以在另一个线程运行
console.time("concat string");
let i = 100000;
let str = "";
while (i) {
  str += i--;
}

console.timeEnd("concat string");
console.log(this);
// alert(str);
//* worker 和主页面利用onmessage eventlistner通信， 前面没有instance 默认为主页面script
onmessage = (e) => {
  let data = e.data;
  console.log(data);
  data.name = "worker thread";
  postMessage(data);
};
