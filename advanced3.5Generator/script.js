function* createIterator() {
  let first = yield 1; // * 第一次右边停止，左边还没有赋值
  let second = yield first + 2;
  yield second + 3;
}
let iterator = createIterator();

console.log(iterator.next(2)); // * 在yield处停止
console.log(iterator.next(4));
console.log(iterator.next(5));
console.log(iterator.next());
