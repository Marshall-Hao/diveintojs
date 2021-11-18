// ! DIY
// * 桥接模式 功能效果多的话用桥接模式， 多维度发展的时候,越来越多方法的时候
function menuItem(word, color) {
  this.word = word;
  this.dom = document.createElement("div");
  document.querySelector("body").appendChild(this.dom);
  this.dom.innerHTML = this.word;
  this.color = color;
}

function menuColor([colorover, colorout]) {
  this.colorOver = colorover;
  this.colorOut = colorout;
}

menuItem.prototype.bindStyle = function () {
  const self = this; //* this是实例
  this.dom.onmouseover = function () {
    this.style.color = self.color.colorOver; //* this是this.dom的dom对象，因为onmouse是dom对象上的方法
  };
  this.dom.onmouseout = function () {
    this.style.color = self.color.colorOut;
  };
};
const menus = [
  { word: "menu1", color: ["red", "black"] },
  { word: "menu2", color: ["green", "black"] },
  { word: "menu3", color: ["blue", "black"] },
];
for (let i = 0; i < menus.length; i++) {
  const menu = new menuItem(menus[i].word, new menuColor(menus[i].color));
  menu.bindStyle();
}

// * --------------------------------
function express() {}
const methods = ["get", "post", "patch", "delete"];
methods.forEach((method) => {});

// * 享元模式 （一个模特试穿100套衣服）私有属性公有化
// const data = [
//   {
//     type: "img",
//     file: fileob1,
//   },
//   {
//     type: "txt",
//     file: fileob2,
//   },
//   {
//     type: "img",
//     file: fileob3,
//   },
//   {
//     type: "word",
//     file: fileob4,
//   },
// ];

// function Uploader() {}
// Uploader.prototype.init = function () {};
// Uploader.prototype.delete = function () {};
// Uploader.prototype.uploading = function ({ fileType, file }) {};

// const uploader = new Uploader();
// for (let i = 0; i < data.length; i++) {
//   uploader.uploading(data[i]);
// }

function extend() {
  let target = arguments[0];
  let source;
  if (arguments.length === 1) {
    target = this;
    source = arguments[0];
  } else {
    source = arguments[1];
  }
  for (let item in source) {
    target[item] = source[item];
  }
}
// * 模版方法模式 类似于继承
function BasePop(word, size) {
  this.word = word;
  this.size = size;
  this.dom = null;
}

BasePop.prototype.init = function () {
  const div = document.createElement("div");
  div.innerHTML = this.word;
  div.style.width = this.size.width + "px";
  div.style.height = this.size.height + "px";
  this.dom = div;
};
BasePop.prototype.hidden = function () {
  this.dom.style.display = "none";
};
BasePop.prototype.confirm = function () {
  this.dom.style.display = "none";
};

function AjaxPop(word, size) {
  BasePop.call(this, word, size);
}
AjaxPop.prototype = new BasePop();

const hidden = AjaxPop.prototype.hidden;
AjaxPop.prototype.hidden = function () {
  hidden.call(this);
  console.log(1);
};
const confirm = AjaxPop.prototype.confirm;
AjaxPop.prototype.confirm = function () {
  confirm.call(this);
  fetch();
};

function Counter() {
  this.beforeCounter = [];
  this.afterCounter = [];
}
Counter.prototype.addBefore = function (fn) {
  this.beforeCounter.push(fn);
};
Counter.prototype.addAfter = function (fn) {
  this.afterCounter.push(fn);
};
Counter.prototype.count = function (num) {
  const _resultNum = num;
  const _arr = [baseCount];
  _arr = this.beforeCounter.concat(_arr);
  _arr = _arr.concat(this.afterCounter);
  function baseCount(num) {
    num += 4;
    num *= 4;
    return num;
  }
  while (_arr.length > 0) {
    // * can use reduce
    _resultNum = _arr.unshift()(_resultNum);
  }
  return _resultNum;
};

function a() {
  this.instance = axios.create({
    baseURL: "http://localhost:9002/",
    timeout: 5000,
  });
}

const url = [
  {
    name: "getIndex",

    url: "./model/index",

    type: "get",
  },

  {
    name: "loginIn",

    url: "./login/loginIn",

    type: "post",
  },

  {
    name: "loginOut",

    url: "./login/loginOut",

    type: "post",
  },

  {
    name: "shopList",

    url: "./shop/shopList",

    type: "get",
  },
];

function a() {
  this.instance = axios.create({
    baseURL: "http://localhost:9002",
    timeout: 5000,
  });
}

url.forEach((item) => {
  a.prototype[item.name] = function (fn) {
    this.instance[item.type](item.url).then(fn);
  };
});
