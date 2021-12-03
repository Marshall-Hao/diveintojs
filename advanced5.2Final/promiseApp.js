function a() {
  return 123;
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(456);
    }, 1000);
  });
}

function c() {
  return 789;
}

let arr = [a, b, c];

let result = [];

// let promise = Promise.resolve();

// while (arr.length) {
//   promise = promise.then(arr.shift()).then((res) => {
//     result.push(res);
//     console.log(result);
//     return result;
//   });
// }

// * either way

async function asyncRun() {
  for (let i = 0; i < arr.length; i++) {
    let _result = await arr[i]();
    result.push(_result);
  }
  return result;
}

asyncRun().then((res) => {
  console.log(res);
});
