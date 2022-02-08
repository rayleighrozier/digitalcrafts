// Write a function positiveNumbers which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.

function positiveNumbers(arr) {
  newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      newArr = newArr + arr[i];
    }
  }
  console.log(newArr);
}
