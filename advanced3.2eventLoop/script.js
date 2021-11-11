// * task  (script, setTimeout/setInterval, setImmediate, I/O, UI rendering)

// * microtask (promises, Object.observe, MutationObserver, postMessage)

// ! entire script as a macro task
// console.log("1");
// setTimeout(function () {
//   // * Asynchrous 线程
//   console.log("2");
// }, 0);
// Promise.resolve().then(function () {
//   // * microtask
//   console.log("3");
// });

// console.log("4");

// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout");
//   new Promise((resolve) => {
//     console.log("promise inner1");
//     resolve();
//   }).then(() => {
//     console.log("promise then1");
//   });
// }, 0);

// new Promise((resolve) => {
//   console.log("promise inner2");
//   resolve();
// }).then(() => {
//   console.log("promise then2");
// });

async function async1() {
  console.log("async start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  return Promise.resolve().then(() => {
    console.log("async2 promise");
  });
}

console.log("start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();

new Promise((resolve) => {
  console.log("promise1 ");
  resolve();
}).then(() => {
  console.log("promise2 ");
});
