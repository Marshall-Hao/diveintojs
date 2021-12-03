function moveDiv() {
  this.stateList = [];
  this.nowState = 0;
}

moveDiv.prototype.move = function (type, num) {
  changeDiv(type, num);
  this.stateList.push({
    type: type,
    num: num,
  });
  this.nowState = this.stateList.length - 1;
};

move.prototype.go = function () {
  let _state;
  if (this.nowState < this.stateList.length - 1) {
    this.nowState++;
    _state = this.stateList[this.nowState];
    changeDiv(_state.type, _state.num);
  }
};
