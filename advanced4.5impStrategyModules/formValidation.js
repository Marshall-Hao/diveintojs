input.onblur = function () {
  let _value = this.value;
  let _arr = [font, other, other2, back];
  async function test() {
    let _result = _value;
    _arr.forEach((fn) => {
      _result = await fn(_result);
      if (_result.err) {
        return _result.errMess;
      }
    });
  }
  test().then((res) => {
    // * async fn 返回值是一个promise
    console.log(res);
  });
};
