function food1() {}

function food2() {}

function food3() {}

function food4() {}

function order(food) {
  return restaurant(food);
}

order.prototype.orderFood1 = function () {};

order.prototype.orderFood2 = function () {};

order.prototype.orderFood3 = function () {};

function restaurant(food) {
  const _list = {
    food1: new food1(),
    food2: new food2(),
    food3: new food3(),
  };
  return _list[food];
}
