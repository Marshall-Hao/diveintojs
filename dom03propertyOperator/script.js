// *getAttribute
const input = document.getElementById("userName");
const inputAttr = input.getAttribute("class");
//*setAttribute
input.setAttribute("value", "f@ck");
input.className;
console.log(input.value);
console.log(input["id"]);
console.log(input["onclick"]); //* itself
console.log(input.getAttribute("onclick")); //* only the description
input.value = "porn";
input.disabled = false;
const label = document.querySelector("label");
console.log(label.htmlFor);

//* dataset data-..-...
const user = document.querySelector(".user");
const data = user.dataset;
console.log(data.id);
console.log(data.accountName);
console.log(data.mobile);
console.log(data.email);
