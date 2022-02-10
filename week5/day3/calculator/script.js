let buttons = document.querySelectorAll(".buttons");
let buttonsPressed = [];
let display = document.querySelector("#display");
let num1 = "";
let num2 = "";

// function that combines numbers before the operator to make num1 and
//combines numbers after operator to make num2
function setVariables(index) {
  for (i = 0; i < index; i++) {
    num1 = num1 + buttonsPressed[i];
  }
  console.log("here is our num 1 variable", num1);
  for (i = index + 1; i < buttonsPressed.length; i++) {
    num2 = num2 + buttonsPressed[i];
  }
  console.log("here is our num 2 variable", num2);
}

function getValue(e) {
  //  if user presses clear button
  if (e.target.innerText === "C") {
    buttonsPressed = [];
    num1 = "";
    num2 = "";
    console.log("empty no buttons pressed", buttonsPressed);
    display.innerText = "";
  }

  //   else if user presses number or +-/*
  else if (e.target.innerText != "=") {
    value = e.target.innerText;
    buttonsPressed.push(value);
    display.innerText = display.innerText + e.target.innerText;
    console.log("here are the buttons we pressed:", buttonsPressed);
  }
  //   else if user presses equal button
  else {
    let plusIndex = buttonsPressed.indexOf("+");
    let minusIndex = buttonsPressed.indexOf("-");
    let multiplyIndex = buttonsPressed.indexOf("*");
    let divideIndex = buttonsPressed.indexOf("/");
    console.log(
      " Check for operator (-1 means there isn't one) >> plus index:",
      plusIndex,
      "minus index:",
      minusIndex,
      "multiply index:",
      multiplyIndex,
      "divide index:",
      divideIndex
    );
    //if there is a plus in your array
    if (plusIndex != -1) {
      setVariables(plusIndex);
      console.log(
        "here is the addition result",
        parseInt(num1) + parseInt(num2)
      );
      display.innerText = parseInt(num1) + parseInt(num2);
    }
    if (minusIndex != -1) {
      setVariables(minusIndex);
      console.log(
        "here is the subtraction result",
        parseInt(num1) - parseInt(num2)
      );
      display.innerText = parseInt(num1) - parseInt(num2);
    }
    if (multiplyIndex != -1) {
      setVariables(multiplyIndex);
      console.log(
        "here is the multiplication result",
        parseInt(num1) * parseInt(num2)
      );
      display.innerText = parseInt(num1) * parseInt(num2);
    }
    if (divideIndex != -1) {
      setVariables(divideIndex);
      console.log(
        "here is the division result",
        parseInt(num1) / parseInt(num2)
      );
      display.innerText = parseInt(num1) / parseInt(num2);
    }
  }
}

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    getValue(e);
  });
}
