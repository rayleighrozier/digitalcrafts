let buttons = document.querySelectorAll(".buttons");
let buttonsPressed = [];

function getValue(e) {
  //   user presses clear button
  if (e.target.innerText === "C") {
    buttonsPressed = [];
    console.log("empty no buttons pressed", buttonsPressed);
  }

  //   user presses number or +-/*
  else if (e.target.innerText != "=") {
    value = e.target.innerText;
    buttonsPressed.push(value);
    console.log("here are the buttons we pressed:", buttonsPressed);
  }
  //   user presses equal button
  else {
    //#### This is the code we were working on to make double digit numbers. does not work yet. ###
    // firstValue = "";
    // secondValue = "";
    // for (i = 0; i < buttonsPressed.length; i++) {
    //   //   if array item is a number
    //   if (
    //     buttonsPressed[i] !== "+" &&
    //     buttonsPressed[i] !== "-" &&
    //     buttonsPressed[i] !== "*" &&
    //     buttonsPressed[i] !== "/"
    //   ) {
    //     firstValue = firstValue + buttonsPressed[i];
    //     console.log("adding to first value", firstValue);
    //   }
    //   //   if array item is not a number
    //   else {
    //     let operation = buttonsPressed[i];
    //     console.log("this is the operation", operation);
    //   }
    // }
    //### End of double digit number code

    operation = buttonsPressed[1];
    if (operation === "+") {
      console.log(
        "here is the addition result",
        parseInt(buttonsPressed[0]) + parseInt(buttonsPressed[2])
      );
      return parseInt(buttonsPressed[0]) + parseInt(buttonsPressed[2]);
    }
    if (operation === "-") {
      console.log(
        "here is the subtraction result",
        parseInt(buttonsPressed[0]) - parseInt(buttonsPressed[2])
      );
      return parseInt(buttonsPressed[0]) - parseInt(buttonsPressed[2]);
    }
    if (operation === "*") {
      console.log(
        "here is the multiplication result",
        parseInt(buttonsPressed[0]) * parseInt(buttonsPressed[2])
      );
      return parseInt(buttonsPressed[0]) * parseInt(buttonsPressed[2]);
    }
    if (operation === "/") {
      console.log(
        "here is the division result",
        parseInt(buttonsPressed[0]) / parseInt(buttonsPressed[2])
      );
      return parseInt(buttonsPressed[0]) / parseInt(buttonsPressed[2]);
    }
  }
}
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    getValue(e);
  });
}
