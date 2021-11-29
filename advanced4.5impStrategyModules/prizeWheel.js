// * 转盘html初始化, 奖品选定  转动控制模块 动画效果模块
const observer = {
  message: {},
  regist: function (type, fn) {
    this.message[type] = fn;
  },
  fire: function (type) {
    this.message[type]();
  },
};

const domArr = [];
function htmlInit() {}

function getFinal() {
  const _num = Math.random() * 10 + 40; // * 0 - 1 random
  return Math.floor(_num, 0);
}

function moveControl() {
  const _final = getFinal();
  const _circle = Math.floor(_final / 10, 0);
}

function animation(config) {
  let _nowIN = 0;
  const removeNum = 9;
  const _timer = setInterval(() => {
    if (nowIn !== 0) {
      removeNum = nowIn - 1;
      domArr[removeNum].setAttribute("class", "item");
      domArr[nowIn].setAttribute("class", "item item-on");
    }
    nowIN++;
    if (nowIn === config.moveTime) {
      clearInterval(timer);
      observer.fire("finish");
    }
  }, config.speed);
}
