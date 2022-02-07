// Write a function printSquare which is
// given a size and prints a square of that size using asterisks.

function printSquare(num) {
  stars = "";
  for (i = 0; i < num; i++) {
    stars = stars + "*";
  }
  for (i = 0; i < num; i++) {
    console.log(stars);
  }
}
