// Write a JavaScript program to compute the sum of the two given integers,
// If the sum is in the range 50..80 return 65 other wise return 80

function sum(num1, num2) {
  if (num1 + num2 >= 50 && num1 + num2 <= 80) {
    return 65;
  } else {
    return 80;
  }
}

sum(25, 26);
sum(100, 100);

// Write a program which will check whether a letter
// is a vowel or not. If the letter is vowel then print true else print false.

function isVowel(letter) {
  let letter = letter.tolowercase();
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    return true;
  } else {
    return false;
  }
}
