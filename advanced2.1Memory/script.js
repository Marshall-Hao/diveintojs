function testMemory(num) {
  // * window.performance.memory 测试窗口的memory usage，但是是在最后垃圾已经回收完了
  const memory = process.memoryUsage().heapUsed;
  console.log(num + "---------", memory / 1024 / 1024 + "mb");
}

// const size = 30 * 1024 * 1024;
// const arr1 = new Array(size); // * 全局变量全部执行完之前无法回收
// testMemory(1);
// (function () {
//   // * 局部变量被垃圾回收
//   const arr2 = new Array(size);
//   testMemory(2);
//   const arr3 = new Array(size);
//   testMemory(3);
// })();
// const arr4 = new Array(size);
// testMemory(4);
// const arr5 = new Array(size);
// testMemory(5);
// const arr6 = new Array(size);
// testMemory(6);

const fn = (function () {
  const arr = []; //*
  return function () {
    if (arr.length >= 4) {
      arr.shift();
    }
    // * 因为利用函数闭包，导致arr一直被global引用，就算是局部变量也无法被垃圾回收
    arr.push(new Array(30 * 1024 * 1024));
    testMemory(7);
  };
})();

for (let i = 0; i < 10; i++) {
  fn();
}

// ! node 垃圾回收 garbage returns
// * global.gc

// * --max-old-space-size = 老空间， 要进行磁盘整理
// * --max-new-space-size = 新生代空间，要进行 复制 清除 转移 from -》 to

// ! 垃圾回收会中断代码执行， 性能表现受影响
