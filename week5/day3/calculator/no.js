//our first attempt at the calculator


let counter = 0;
console.log("this is the counter", counter);
function getNumber(e) {
  num = e.target.innerText;
  return num;
}

function getOperation(e) {
  operation = e.target.innerText;
  return operation;
}
function makeIntegers(num) {
  num = parseInt(num);
  return num;
}
function addNumbers(num1, num2) {
  num1 = makeIntegers(num1);
  num2 = makeIntegers(num2);
  return num1 + num2;
}
function subtractNumbers(num1, num2) {
  num1 = makeIntegers(num1);
  num2 = makeIntegers(num2);
  return num1 - num2;
}
function multiplyNumbers(num1, num2) {
  num1 = makeIntegers(num1);
  num2 = makeIntegers(num2);
  return num1 * num2;
}
function divideNumbers(num1, num2) {
  num1 = makeIntegers(num1);
  num2 = makeIntegers(num2);
  return num1 / num2;
}

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    getNumber(e);
    counter += 1;
    let num1 = "";
    console.log("this is the counter", counter);
    if (counter === 1) {
      num1 = num1 + getNumber(e);
    }
    if (e.target.innerText == "+" || e.target.innerText == "-" ||) {
      operation = getOperation(e);
      console.log("this is the operation:", operation);
    }
    console.log("this is the variable num1:", num1);
    if (counter === 3) {
      num2 = getNumber(e);
      console.log("this is the variable number 2:", num2);
      if (operation === "+") {
        answer = addNumbers(num1, num2);
        console.log("this is your answer:", answer);
      }
      if (operation === "-") {
        answer = subtractNumbers(num1, num2);
        console.log("this is your answer:", answer);
      }
      if (operation === "*") {
        answer = multiplyNumbers(num1, num2);
        console.log("this is your answer:", answer);
      }
      if (operation === "/") {
        answer = divideNumbers(num1, num2);
        console.log("this is your answer:", answer);
      }
    }
  });
}
