function print(var1) {
  return function func(var2) {
    console.log(var1);
    console.log(var2);
  };
}

let a = print(1); // *func(var2)
a(2); // *func(2)
