// !涉及到业务逻辑的代码，还是面向对象，非常擅长组织逻辑
// ! tree-shaking : move the dead codes
import class1 from "./model";

new class1().f1(); // * if it's oop, then it won't be tree-shaking, since it's part of the object, that's why oop not good for bunler
console.log(1);
