function Person(name) {
  if (new.target === Person) {
    //! new.target check if using new to create a new object
    this.name = name;
  } else {
    throw new Error("You must new the Person");
  }
}

let person = new Person("Marshall");
// let person2 = Person("OKK");

/*
 *----------IIFE 立即执行函数------------
 */
(function () {
  //* ES6中不需要了
  //* 匿名函数
  let page = {
    init() {
      console.log("IIFE");
    },
  };
  page.init();
})();

/*
 *------------闭包---------访问了另一个作用域中的变量函数， for code interview
 */

var lists = document.querySelectorAll("li");

for (var i = 0; i < lists.length; i++) {
  //   lists[i].onclick = function () {
  //     console.log(i); // * 没有闭包，只会显示最后一个因为内存机制
  //   };
  click(i); //* 用一个function的调用来闭包， 可以阻止内存缓存机制
}

function click(li) {
  lists[li].onclick = function () {
    console.log(li);
  };
}

/*
 * tail call  尾调用
 */
function fib(n, a = 0, b = 1) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return b;
  }
  console.log(n, a, b); //! understand from this line, fucking hard
  return fib(n - 1, b, a + b);
}

console.log(fib(4));
