// Write function printBox which is given a width and height
// and prints a hollow box of those given dimensions.

function printBox(height, width) {
  topBottom = " ";
  side = "|";
  for (i = 0; i < width; i++) {
    topBottom = topBottom + "-";
    side = side + " ";
  }
  side = side + "|";
  console.log(topBottom);
  for (i = 0; i < height; i++) {
    console.log(side);
  }
  console.log(topBottom);
}
