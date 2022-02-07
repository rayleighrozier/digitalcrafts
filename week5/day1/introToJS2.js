// #1
function findProduct(num1, num2) {
  console.log(num1 * num2);
  return num1 * num2;
}
product = findProduct(4, 5);
console.log(product);

// #2
function divide(num1, num2) {
  console.log(num1 / num2);
}

divide(10, 5);

// #3
function func3(first, last) {
  firstUpper = first.toUpperCase();
  lastUpper = last.toUpperCase();
  return `I am ${firstUpper} ${lastUpper} and I am from Atlanta.`;
}

func3("rayleigh", "rozier");
