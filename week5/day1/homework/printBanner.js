// Write a function printBanner which is given some text and
// prints a banner with a border surrounding the text.
// The border has to stretch to the length of the text.

function printBanner(text) {
  let topBottom = "----";
  let side = "- ";
  for (i = 0; i < text.length; i++) {
    topBottom = topBottom + "-";
  }
  for (i = 0; i < text.length; i++) {
    side = side + text.charAt(i);
  }
  side = side + " - ";
  console.log(topBottom);
  console.log(side);
  console.log(topBottom);
}
