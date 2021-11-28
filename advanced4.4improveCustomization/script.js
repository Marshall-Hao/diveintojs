// * 不需要重写
// * 代码修改不会引起大规模变动
// * 方便加入新模块

// * 适配器模式 （新老模块 接口不通用）

// * 装饰者模式
// TODO: 重写新方法，不改变老版的代码
function decoration(dom, fn) {
  if (typeof dom.onclick === "function") {
    const _old = dom.onclick;
    dom.onclick = function () {
      _old.apply(this, arguments);
      fn();
    };
  }
}

const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);

const methodsArr = ["push", "pop"];

methodsArr.forEach((method) => {
  arrayMethods[method] = function () {
    const original = arrayProto[method];
    const result = original.apply(this, arguments);
    return result;
  };
});
// * 命令者模式， 直接调用即可，不用考虑怎么实现
function myCanvas() {}

myCanvas.prototype.drawCircle = function () {};

myCanvas.prototype.drawRect = function () {};

const canvasCommand = (function () {
  const action = {
    drawCircle: function () {},
    drawRect: function () {},
  };
  return function excute(commander) {
    commander.forEach((item) => {
      item.arr.forEach((num) => {
        action["draw" + item.action](num);
      });
    });
  };
})();

canvasCommand(commander);
const commander = [
  {
    action: "Circle",
    arr: [1, 2, 3, 4, 5],
  },
  {
    action: "Rect",
    arr: [2, 3, 1],
  },
];

const data = {
  imgArr: [
    {
      imagUrl: "xxx",
      title: "t",
    },
    {
      imagUrl: "xxx",
      title: "t",
    },
    {
      imagUrl: "xxx",
      title: "t",
    },
  ],
  type: "normal",
  target: document.getElementById("app"),
};

const createImg = (function () {
  const action = {
    createImg(img) {},
    createHTML() {},
    show: function () {},
  };
  return function excute(data) {
    const _arr = [];
    data.imgArr.forEach((img) => {
      const _imgDom = action.createImg(img);
      _arr.push(_imgDom);
    });
    const _html = action.createHTML(_arr);
    action.show(_html);
  };
})();
