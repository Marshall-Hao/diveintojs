// * 观察者模式 （减少对象的耦合）定义一个中间件, 不好沟通的模块沟通数据,三大要素 注册 ,触发 ,删除
const observer = {
  message: {},
  regist: function (type, fn) {
    this.message[type] = fn;
  },
  fire: function (type) {
    this.message[type]();
  },
};
function comment() {
  observer.regist("hotComment", () => {
    return {};
  });
}

// * a.vue,
this.observer.regist("toC", function () {
  return 123;
});

// * c.vue
const a = this.AudioBufferSourceNode.fire("toC");
function index() {
  observer.fire("hotComment");
}

// * 在vue中写oberver 要是用defineProperty固定变量权限

// * 职责链模式
