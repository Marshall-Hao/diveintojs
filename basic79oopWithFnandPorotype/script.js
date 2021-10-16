//! 工厂模式
function Companyfactory(name, age) {
  return {
    name: name,
    age: age,
    sayName: function () {
      console.log(this.name);
    },
  };
}

var pornhub = Companyfactory("Pornhub", 22);
console.log(Object.getPrototypeOf(pornhub) == Companyfactory.prototype);
console.log(Object.getPrototypeOf(pornhub) == Object.prototype); //! 只能追溯回爷爷
pornhub.sayName();
//! 构造函数模式
function Comapnyfn(name, age) {
  (this.name = name),
    (this.age = age),
    function sayName() {
      console.log(this.name);
    };
  this.sayAge = function () {
    console.log(this.age);
  };
}

var wtaps = new Comapnyfn("wtaps", 20);
console.log(
  wtaps.constructor === Comapnyfn,
  wtaps instanceof Comapnyfn, // ! 父辈
  wtaps instanceof Object //! 祖辈都满足
);
console.log(Object.getPrototypeOf(wtaps) === Comapnyfn.prototype); //! 原型和本身的区别要注意

var dcdt = new Comapnyfn("dcdt", 8);
console.log(dcdt.sayName === wtaps.sayName); //! equal
console.log(dcdt.sayAge === wtaps.sayAge); //! not equal

//! 原型模式
function CompanyPro1() {}
CompanyPro1.prototype.name = "Daiwa";
CompanyPro1.prototype.age = 2;
CompanyPro1.prototype.sayName = function () {
  console.log(this.name);
};

var a = new CompanyPro1();
var b = new CompanyPro1();

console.log(Object.getPrototypeOf(a));
console.log(a.constructor); //! 函数是构造者
console.log(a);
console.log(CompanyPro1); //! 本质是一个函数，构造
console.log(CompanyPro1.prototype);
console.log(a.prototype); //! 实例没有属于自己的原型
console.log(Object.getPrototypeOf(a) === CompanyPro1.prototype);
console.log(a.sayName === b.sayName);

//* 简化写法
function CompanyPro2() {}
CompanyPro2.prototype = {
  constructor: CompanyPro2,
  name: "Wacko",
  age: 22,
  sayName: function () {
    console.log(this.name);
  },
};

const wacko = new CompanyPro2();
console.log(Object.getPrototypeOf(a));
console.log(wacko.constructor); //! 函数是构造者
wacko.sayName();
console.log(CompanyPro2); //! 本质是一个函数，构造
console.log(CompanyPro2.prototype);
console.log(wacko.prototype); //! 实例没有属于自己的原型
console.log(Object.getPrototypeOf(wacko) === CompanyPro2.prototype);
console.log(wacko instanceof CompanyPro2);

//! 组合模式
function CompanyComb(name, age) {
  (this.name = name), (this.age = age);
}

CompanyComb.prototype = {
  constructor: CompanyComb,
  sayName: function () {
    console.log(this.name);
  },
};

function Beams(name, age) {
  CompanyComb.call(this, name, age);
}

console.log(CompanyComb.prototype.sayName);
const kk = new Beams("a", 2);
console.log(Object.getOwnPropertyNames(kk));
kk.sayName;
