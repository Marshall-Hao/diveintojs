const btn = document.querySelector("button");
const div = document.querySelector("div");
btn.addEventListener("click", (e) => {
  console.log("arrow this:", this); //! all the window
  console.log(e.target, e.currentTarget);
});

div.addEventListener("click", (e) => {
  console.log("div this:", this); //! all the window
  console.log(e.target, e.currentTarget);
});

btn.addEventListener("click", function (e) {
  console.log("normal this:", this); //! only the button
});

console.log(this === window); //! global scope, this always be the window

const alertArrow = () => {
  this.alert("arrow");
};

function alertNormal(params) {
  console.log(this);
  this.alert("normal");
}

alertArrow();
alertNormal();
