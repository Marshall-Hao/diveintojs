console.log(sum(1, 2));

function sum(a, b) {
  /*
    !hoisting means all the normal function 
    !will be moved to the top automatically
    !but doesnt apply to the arrow function
    ! since arrow function defined as a variable
*/
  return a + b;
}
