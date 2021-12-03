function Iterator(data) {
  this.data = data;
}
Iterator.prototype.dealEach = function (fn) {
  if (this.data instanceof Array) {
    for (var i = 0; i < this.data.length; i++) {
      fn(this.data[i], i);
    }
  } else {
    for (let item in this.data) {
      fn(this.data[item], item);
    }
  }
};

let data = [{ num: 1 }, { num: 2 }, { num: 3 }];

function i(data) {
  const NewIterator = function () {
    if (!(this instanceof NewIterator)) {
      return new NewIterator();
    }
    this.data = data;
  };
  NewIterator.prototype.getHasSomenum = function (handler, num) {
    let _arr = [];
    let handleFn;
    if (typeof handler === "function") {
      handleFn = handler;
    } else {
      handleFn = function (item) {
        if (item[handler] === num) {
          return item;
        }
      };
    }
    for (let i = 0; i < this.data.length; i++) {
      let _result = handleFn.call(this, this.data[i]); // * 用call比较稳妥,当知道参数个数,无法确认fn本身的this指向的话
      if (_result) {
        _arr.push(_result);
      }
    }
    return _arr;
  };
  return NewIterator();
}

console.log(data);
console.log(i(data).getHasSomenum("num", 1));
console.log(
  i(data).getHasSomenum((item) => {
    if (item.num - 1 === 2) {
      return item;
    }
  })
);
