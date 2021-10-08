console.log(Array.isArray([0])); //! check if the arg is an array

console.log(Array.from("163")); //! 根据传入的类似数组的值产生新的数组，与index有关

function parse2Int(item) {
  return parseInt(item) * 2;
}

console.log(Array.from("163", parse2Int)); //! second args is the mapfn

const operator = {
  add: function (n) {
    return n + 2;
  },
  operator: function (n) {
    return this.add(n);
  },
};

console.log(Array.from([1, 6, 3], operator.operator, operator)); //! third args is the this
console.log(Array.from([1, 6, 3], operator.add));

console.log(Array.of("163")); //! 根据输入的值直接产生数组,跟index无关，注意与from的区别

//! sort 方法
const songs = [
  { name: "junya", score: 85 },
  { name: "lose myself", score: 95 },
  { name: "after hourse", score: 84 },
];

function byScore(a, b) {
  //* sort 的 compare fn 函数
  return b.score - a.score;
}

console.log(songs.sort(byScore));

// ! reverse 方法
console.log(songs.reverse());

// ! push 方法
songs.push({ name: "fuck", score: 88 }); //! add as  the last element
console.log(songs);

// ! unshift
songs.unshift({ name: "okk", score: 87 }); //!add as the first element
console.log(songs);

//! pop
songs.pop(); //! delete the last one
console.log(songs);

//! shift
songs.shift(); //! delete the first one
console.log(songs);

//! splice 在给定的位置改变element的值
songs.splice(1, 1, { name: "ooo", score: 100 }); //* (index, Count多少个，items替换成什么)
console.log(songs);

//! fill 从什么位置开始 全部覆盖新的值
songs.fill({ name: "hha", score: 66 }, 0, 1); //* （value, start, end)
console.log(songs);

//! copyWithin 浅复制, 将数组中的 element复制overwrite到另外一个位置
songs.copyWithin(0, 1);
console.log(songs);

/*
 ***************************
 */

//! slice
console.log(songs.slice(0, 1)); //* 浅拷贝

//! concat， 将多个数组合并

//! join 合并数组成字符串
console.log(["asd", "qwe", "ppp"].join(";"));

//! forEach 后面跟的是 callbackfn with arrow function format, 还有一个thisarg
["123", "qwqw", "qwr"].forEach((item, index, array) => {
  console.log(item, index, array);
});

//! map 后面跟的是 callbackfn with arrow function format, 还有一个thisarg

//! reduce,
const songs1 = [
  { name: "junya", score: 85 },
  { name: "lose myself", score: 95 },
  { name: "after hourse", score: 84 },
];
function sum(previousResult, item, index, array) {
  return previousResult + item.score;
}

console.log(songs1.reduce(sum, 0));

//! reduceRight, 开始位置反过来

//! indexOF

console.log(songs1.indexOf({ name: "junya", score: 85 }));

//! includes, 有没有

//! find ,can find certain element with predictfn but the first one

console.log(
  songs1.find((item, index, array) => {
    return item.score > 80;
  })
);

//! findIndex
console.log(
  songs1.findIndex((item, index, array) => {
    return item.score > 90;
  })
);

//! filter, can find certain elements with callbackfn
console.log(
  songs1.filter((item, index, array) => {
    return item.score > 80;
  })
);

//! every, test if every element of the array meet the callbackfn condition
console.log(
  songs1.every((item, index, array) => {
    return item.score > 90;
  })
);

//! some , test if one of the elements meet the callbackfn condition
console.log(
  songs1.some((item, index, array) => {
    return item.score > 90;
  })
);

//! entries
const iterator = songs1.entries();
console.log(iterator.next()); //* 看console理解
//！ keys() ,记得 next()
const iterator1 = songs1.keys();
console.log(iterator1.next()); //* 看console理解
//! values()
const iterator2 = songs1.values();
console.log(iterator2.next()); //* 看console理解
