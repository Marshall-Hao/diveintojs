// * 转盘html初始化, 奖品选定  转动控制模块 动画效果模块
const observer = {
  message: {},
  regist: function (type, fn) {
    this.message[type] = fn;
  },
  fire: function (type) {
    let _args = Array.prototype.slice.call(arguments, 1);
    this.message[type]().apply(this, _args);
  },
};

const domArr = [...document.querySelectorAll("div")];
function htmlInit() {}

function getFinal() {
  const _num = Math.random() * 10 + 40; // * 0 - 1 random
  return Math.floor(_num, 0);
}

function moveControl() {
  let _final = getFinal();
  let _circle = Math.floor(_final / 10, 0);
  let _runCircle = 0;
  let _stopNum = _final % 10;
  let _speed = 200;
  animation({
    moveTime: 10,
    speed: _speed,
  });
  observer.regist("finish", () => {
    _runCircle++;
    console.log(_runCircle);
    let _time = 10;
    _speed += 50;
    if (_runCircle >= _circle) {
      _time = _stopNum;
    }
    animation({
      speed: _speed,
      moveTime: _time,
    });
  });
}

function animation(config) {
  let _nowIn = 0;
  let removeNum = 9;
  const _timer = setInterval(() => {
    if (_nowIn !== 0) {
      removeNum = _nowIn - 1;
      domArr[removeNum].setAttribute("class", "item");
      domArr[_nowIn].setAttribute("class", "item item-on");
    }
    _nowIn++;
    if (_nowIn === config.moveTime) {
      clearInterval(_timer);
      observer.fire("finish");
    }
  }, config.speed);
}

moveControl();

observer.regist("dataBack", (res) => {
  if (c.arr.length >= 2) {
    c();
  } else {
    c.arr.push(res);
  }
});

axios.get("/a").then((res) => {
  observer.fire("dateBack", res);
});
function c() {}
c.arr = [];
