function multiplyTwo(num) {
  return num * 2;
}
function minusOne(num) {
  return num - 1;
}
function addTwo(num) {
  return num + 2;
}
function addThree(num) {
  return num + 3;
}

// * compose 从右往左
function compose() {
  console.log(arguments);
  const _args = [...arguments]; //* [].slice.apply(arguments);
  return function (num) {
    let _result = num;
    // for (let i = _args.length - 1; i >= 0; i--) {
    //   _result = _args[i](_result);
    // }
    // return _result;
    return _args.reduceRight((res, cb) => cb(res), num); //* 从右向左reduce
  };
}

console.log(compose(addThree, addTwo, minusOne, multiplyTwo)(10));

// * pipe 从左往右

// * 链式
const a = Promise.resolve(10)
  .then(multiplyTwo)
  .then(minusOne)
  .then(addTwo)
  .then((res) => {
    console.log(res);
  });
