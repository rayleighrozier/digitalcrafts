console.log("hi");

function printMessage(e) {
  number1 = e.target.innerText;
  return number1;
}
let button = document.querySelector(".btn");

button.addEventListener("click", (e) => {
  printMessage(e);
});

console.log(;
