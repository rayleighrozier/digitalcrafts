// reverse a string that I give you

// using .reverse
function dotreverse(str) {
  let splitWord = word.split("").reverse().join("");
  //   need to turn it into an array to use reverse
  return splitWord;
}

// using for loop

function forReverseString(str) {
  let reversedWord = "";
  for (i = str.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}

// ... >> spread operator
let arr1 = ["hi"];
let arr2 = ["howdy"];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

let obj1 = { name: "Joe" };
let obj2 = { height: "6.1" };
let obj3 = { ...obj1, ...obj2 };

// weird oject rule: if you  don't define key name it will use whtever input you put in
