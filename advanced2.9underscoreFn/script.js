// * 可执行性 代码质量 管道工序 关闭
console.log(
  _([1, 2, 3, 3, 4, 1, "a", "A"])
    .chain()
    .unique(
      (item) => {
        return typeof item === "string" ? item.toLowerCase() : item;
      },
      "marshall",
      28
    )
    .template("f@ck")
    .ending()
);
console.log(
  _.chain()
    .unique(
      [1, 2, 3, 3, 4, 1, "a", "A"],
      (item) => {
        return typeof item === "string" ? item.toLowerCase() : item;
      },
      "marshall",
      28
    )
    .ending()
);

// function Big() {
//   this.age = "biggy";
// }

// Big.prototype.callName = function () {
//   console.log(this);
// };
// Big.callName = function () {
//   console.log(this);
// };

// Big.callName();

// const small = new Big();
// console.log(Big.prototype);
// console.log(small);
// small.callName();
