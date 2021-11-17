// * 工厂模式
(function () {
  function pop(type, content, color) {
    switch (type) {
      case "infoPop":
        return new infoPop(content, color);
      case "confirPop":
        return new confirPop(content, color);
      case "cancelPop":
        return new cancelPop(content, color);
    }
  }
  window.pop = pop;
})();
//* 建造者模式
function Editor() {
    this.init = new initHtml()
    this.fontControll = new fontControll()
    this.stateControll = new stateControll()
}

function initHtml() {}
initHtml.prototype.initStyle = function () {};

initHtml.prototype.renderDom = function () {};
function fontControll() {}
fontControll.prototype.changeColor = function () {};
fontControll, (prototype.changeFontsize = function () {});
function stateControll() {
    this.state = []
    this.nowstate = 0 
}
stateControll.prototype.saveState = function () {};
stateControll.prototype.stateBack = function () {
    const state = this.stsate[this.nowstate - 1]
    this.fontControll.changeColor(state.color)
    this.fontControll.changeFontsize(state.size)
}
stateControll.prototype.stateForward = fucntion() {}

window.Editor = Editor

function Vue (options) {
    if (!(this instanceof Vue)) {
        console.warn()
    }
    this._init(options)
}
//* 单例模式 
function Store() {
    if (this.store.install) {
        return this.store.install
    }   
    this.store = {

    }
    store.install = this //* always be the first instance
}

let _Vue

function installed (Vue) {
    if (install.installed && _Vue === Vue) return
    install.installed = true
    _Vue = Vue
}