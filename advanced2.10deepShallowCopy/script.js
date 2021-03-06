const baseOptions = { name: "max", count: 1, data: { message: "hello data" } };

const res = jQuery.extend(true, {}, baseOptions);

// * 浅拷贝 共享引用
console.log(res === baseOptions);
console.log(res.data === baseOptions.data);
console.log(res);

const deepCopy = (source) => {
  if (Array.isArray(source)) {
    return source.map((item) => {
      return Array.isArray(item) || isObject(item) ? deepCopy(item) : item;
    });
  } else if (isObject(source)) {
    return createReduce(1)(
      source,
      function (memo, value, key, target) {
        memo[key] =
          Array.isArray(value) || isObject(value) ? deepCopy(value) : value;
        return memo;
      },
      {}
    );
  } else {
    return source;
  }
};
function createReduce(dir) {
  const reduce = function (obj, func, memo, init) {
    const keys = !Array.isArray(obj) && Object.keys(obj);
    const sym = !Array.isArray(obj) && Object.getOwnPropertySymbols(obj);
    const keysCombineSym = keys ? keys.concat(sym) : false;
    const length = (keysCombineSym || obj).length;
    let index = dir > 0 ? 0 : length - 1;
    if (!init) {
      memo = obj[keysCombineSym ? keysCombineSym[index] : index];
      index += dir;
    }

    for (; index >= 0 && index < length; index += dir) {
      let currentKey = keysCombineSym ? keysCombineSym[index] : index;
      memo = func(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  return function (obj, func, memo) {
    const init = arguments.length >= 3;
    return reduce(obj, func, memo, init);
  };
}

function isObject(val) {
  return (
    // * Object.prototype.toString.call(val) === '[object Object]'
    val !== null && typeof val === "object" && Array.isArray(val) === false
  );
}

const x = {
  a: [1, 2, 3],
  b: {
    a: 3,
    b: 3,
  },
};

const ar = [1, 2, 3];
const y = {
  a: "z",
  [Symbol("z")]: "d",
  ar,
};

const z = {
  a: "z",
  z: () => "d",
  y,
};

var r = {
  a: "z",
  z,
};
// r.r = r;

console.log(r);
const rr = deepCopy(r);
console.log(rr.z.y);
console.log(rr.z === r.z);

function Person() {
  this.name = "mar";
  this.fuc = function () {
    return "jeez";
  };
}
Person.fuc = function () {
  return "jeez";
};

const mas = new Person();
console.log(mas);
console.log(mas.name, mas.fuc(), Person.fuc());
