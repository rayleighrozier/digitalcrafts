// Write a function printNumbers which is given a start number and an end number.
// It will print the numbers from one to the other, one per line

// Write two versions of the above function.
// One using a while loop and the other using a for loop.

function printNumbers1(num, max) {
  while (num <= max) {
    console.log(num);
    num++;
  }
}

function printNumbers2(num, max) {
  for (i = num; i <= max; i++) {
    console.log(num);
    num++;
  }
}
