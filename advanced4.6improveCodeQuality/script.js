// * 策略模式 / 状态模式 (做小程序屏幕类型的检测可用来优化)

function ShowControll() {
  (this.status = ""),
    (this.power = {
      boss: function () {
        showPart1();
        showPart2();
        showPart3();
      },
      manager: function () {
        showPart1();
        showPart2();
      },
      staff: function () {
        showPart1();
      },
    });
}

ShowControll.prototype.show = function () {
  const _self = this;
  axios
    .get("xxx")
    .then((res) => {
      self.status = res;
      self.power[self.status]();
    })
    .catch((err) => {
      console.error(err);
    });
};

new ShowControll().show();

// * 外观模式

// * 迭代器

// * 备忘录
