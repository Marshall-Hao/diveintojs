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
  function NewIterator(data) {
    this.data = data;
  }
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
      const element = array[i];
    }
  };
}
