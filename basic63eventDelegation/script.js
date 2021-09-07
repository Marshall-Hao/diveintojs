const btns = document.querySelectorAll("button");
//! documents close to js, then body, then the button
document.addEventListener(
  "click",
  () => {
    console.log("clicked document");
  },
  { capture: false } //! capture then the same as js, first document,then body, then button
);

document.body.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.matches("button")) {
    // ! match the selector
    console.log("btn clicked");
  }
  console.log(e.target);
});

btns.forEach((btn) => {
  //! the button5 hasnt been add to this queue
  btn.addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      console.log("Clicked btn");
    },
    { capture: true }
  );
});

const newButton = document.createElement("button");
newButton.innerText = "5";
document.body.append(newButton);
