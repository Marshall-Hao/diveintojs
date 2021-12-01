// * 复杂if else 分支优化
function mover() {
  this.status = [];
  this.direction = {
    left: moveLeft,
    right: moveRight,
    top: moveTop,
    bottom: moveBottom,
  };
}

mover.prototype.run = function () {
  this.status = [...arguments];
  this.status.forEach((action) => {
    this.direction[action]();
  });
};

new mover().run("left");
