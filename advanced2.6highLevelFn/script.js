const arr = [1, 2, 3];

// * forEach
Array.prototype.myForEach = function (callback) {
  console.log(this);
  const _length = this.length;
  if (typeof callback !== "function") {
    throw new Error("has to be a fucntion");
  }
  for (let i = 0; i < _length; i++) {
    callback.call(this, this[i], i);
  }
};

arr.myForEach((item, i) => {
  console.log(i + "-" + item);
});

// * map
Array.prototype.myMap = function (callback) {
  console.log(this);
  const _length = this.length;
  const arr = [];
  if (typeof callback !== "function") {
    throw new Error("has to be a fucntion");
  }
  for (let i = 0; i < _length; i++) {
    arr.push(callback.call(this, this[i], i));
  }
  return arr;
};

const newArr = arr.myMap((item) => {
  return item * 2;
});

console.log(newArr);

// * reduce
const result = arr.reduce((pre, now, index, arr) => {
  return pre * now;
}, 10);

console.log(result); // * 10 * 1 * 2 * 3

const routes = [
  {
    path: "/",
    components: "hello",
  },
  {
    path: "/test",
    components: "test",
  },
];

const routesResult = routes.reduce((pre, current) => {
  pre[current.path] = current.components;
  return pre;
}, {});

console.log(routesResult);

const testArr = [
  {
    type: "all",
    num: 1,
  },
  {
    type: "no",
    num: 2,
  },
  {
    type: "all",
    num: 3,
  },
];

console.log(
  testArr.reduce((pre, current) => {
    if (current.type === "all") {
      pre += current.num;
    }
    return pre;
  }, 0)
);

Array.prototype.myReduce = function (fn, init) {
  let _i = 0;
  let _length = this.length;
  let _pre = init;
  if (init === undefined) {
    _pre = this[0];
    _i = 1;
  }
  for (i; i < _length; i++) {
    _pre = fn.call(this, _pre, this[i], i, this);
  }
  return _pre;
};

// * filter
Array.prototype.myFilter = function (fn) {
  const _newArray = [];
  const _length = this.length;
  for (let i = 0; i < _length; i++) {
    if (fn.call(this, this[i], i)) {
      if (typeof this[i] === "object") {
        _newArray.push({ ...this[i] });
      }
      _newArray.push(this[i]);
    }
  }
  return _newArray;
};

const obj = {
  num1: 1,
  num2: 2,
  num3: 3,
  num4: 4,
  num5: 5,
  num6: 6,
};

function findProperty(obj, fn) {
  const _obj = { ...obj };
  const _propertyArr = [];
  for (let item in _obj) {
    if (fn.call(_obj, _obj[item], item)) {
      _propertyArr.push(item);
    }
  }
  return _propertyArr;
}

console.log(
  findProperty(obj, (value, name) => {
    return value % 2 === 0;
  })
);
