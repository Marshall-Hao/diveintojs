// * bind 的 this 指向前面的方程
Function.prototype.myBind = function (thisArg) {
  if (typeof this !== "function") {
    return;
  }
  const _self = this;
  const _args = Array.prototype.slice.call(arguments, 1);
  return function () {
    return _self.apply(thisArg, _args.concat([...arguments]));
  };
};
