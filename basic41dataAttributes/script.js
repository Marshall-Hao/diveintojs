// const test = document.querySelector("[data-test]");

// test.dataset.test = 5555;

// console.log(test.dataset); //! convert the test-two to testTwo
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentCLicks = parseInt(button.dataset.clicks);
    button.innerText = currentCLicks + 1;
    button.dataset.clicks = currentCLicks + 1;
  });
});
