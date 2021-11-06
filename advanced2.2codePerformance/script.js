// * 健壮性 strong
function a(type = "data1") {
  // ! give default value prevent error output给予默认值
  const data = {
    data1: [1, 2, 3],
    data2: [4, 5, 6],
  };
  return data[type][2];
}

console.log(a());

function b(num1, num2) {
  //! 给予 报错 判断 如果必传参数
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("num1 or num2 has to be a number type");
  }
  return num1 + num2;
}

// console.log(b(1));
function e(config) {
  let _default = {
    // ! 对象合并，确保有a这个属性 property
    a: 1,
    b: 2,
  };
  _default = { ..._default, ...config };
  return _default;
}

console.log(e({ a: 3 }));

c = { a: 1, b: 2 };
d = { a: 3 };

console.log({ a: 1, ...d });

// ! while using third party package, incase of the unprdicatable bugs comes from it by using try catch error
try {
  throw new Error();
} catch (err) {}

// ! if the layer of the data is very deep, can use && to prevent further error
console.log(c && c.a && c.a.b);

// * 可读性 readable

// ! 常量全大写
const PIE = 3.1415926;
// ! 类型capitalized
function Fuck() {}

//! scoped variable start with _ 局部变量
function test() {
  const _example = "example scoped variable";
}

//! 语义化

// * 可复用性

// * 可拓展性
