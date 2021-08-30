const array = [1, 2, 3, 4];

function addElement(a, element) {
  //! not a pure function,since the change the value of outside variable
  //   a.push(element);
  return [...a, element]; //! this way doesnt affect, create a new array
}

addElement(array, 5);

console.log(array);

/*
    * pure function rules
    !1, no side effect
    !2, doesn't affect outside variable
    !3, same input same output, like Math.random() not a pure function diff output everytime
*/
const person = {
  name: "M",
  friends: ["A", "b"],
};

const addFriend = (p, friendName) => {
  return { ...p, friends: [...p.friends, friendName] }; //! can have pure function inside
};

console.log(addFriend(person, "C"));
console.log(person);
