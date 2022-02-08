// Write a function leetspeak which is given a string,
// and returns the leetspeak equivalent of the string.
//  To convert text to its leetspeak version, make the following substitutions:

// A => 4 E => 3 G => 6 I => 1 O => 0 S => 5 T => 7

function leetSpeak(str) {
  let strLower = str.toLowerCase();
  let newStr = "";
  for (i = 0; i < strLower.length; i++) {
    if (strLower.charAt(i) === "a") {
      newStr = newStr + "4";
    } else if (strLower.charAt(i) === "e") {
      newStr = newStr + "3";
    } else if (strLower.charAt(i) === "g") {
      newStr = newStr + "6";
    } else if (strLower.charAt(i) === "i") {
      newStr = newStr + "1";
    } else if (strLower.charAt(i) === "o") {
      newStr = newStr + "0";
    } else if (strLower.charAt(i) === "s") {
      newStr = newStr + "5";
    } else if (strLower.charAt(i) === "t") {
      newStr = newStr + "7";
    } else {
      newStr = newStr + strLower.charAt(i);
    }
  }
  console.log(newStr);
}
