// * bind 的 this 指向前面的方程
Function.prototype.myBind = function (thisArg) {
  if (typeof this !== "function") {
    return;
  }
  console.log(this, arguments);
  const _self = this;
  const _args = Array.prototype.slice.call(arguments, 1);
  return function () {
    console.log(arguments.length);
    return _self.apply(thisArg, _args.concat([...arguments]));
  };
};

function a(b, c) {
  console.log(b + c);
}
const d = a.myBind(null, 6);
console.log(d);
d(3);
