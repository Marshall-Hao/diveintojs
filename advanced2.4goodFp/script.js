// ! 纯函数

var a = 10;
function add(a, b) {
  return a + b;
}
a = 6;
add(a, 1);

// ! 消除对外副作用
var a = 123;

function aPlus(a) {
  var a = a;
  a = a + 1;
  return a;
}

var obj = {
  a: 123,
};
function objPlus(obj, num) {
  var _obj = Object.create(obj); // {...obj}
  _obj.a += num;
  return _obj;
}
var arr = [1, 2, 3];
function arrPlus(arr, num) {
  var _arr = [...arr];
  _arr[0] += num;
  return _arr;
}
