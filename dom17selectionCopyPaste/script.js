const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
// btn.addEventListener("click", () => {
//   const inputText = document.getElementById("inputText");
//   const focusEle = document.activeElement;
//   inputText.focus();
//   inputText.setSelectionRange(0, inputText.value.length);
//   document.execCommand("copy", true); //* how u make client easy to copy
//   focusEle.focus();
// });

btn2.addEventListener("click", () => {
  const text = document.getElementsByTagName("p")[0];
  inputText.value = text.innerText;
  console.log(inputText.value);
  inputText.focus(); //! this is a pre-fix
  inputText.setSelectionRange(0, inputText.value.length); //! only works for input
  document.execCommand("copy", true);
});
