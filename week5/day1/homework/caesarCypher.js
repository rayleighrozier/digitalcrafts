// Write a function cipher which is
// given a string, an offset, and returns the Caesar cipher of the string.
// cipher('Genius without education is like silver in the mine',8)
// 'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'

function cipher(string, offset) {
  let str = string.toLowerCase();
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let alphabetIndex = [];
  for (i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      alphabetIndex.push(" ");
    } else {
      x = alphabet.indexOf(str[i]);
      alphabetIndex.push(x);
    }
    // console.log(alphabetIndex);
  }
  let offsetIndex = alphabetIndex.map(function (x) {
    if (x === " ") {
      return " ";
    } else if (x + offset <= 25) {
      return x + offset;
    } else {
      return x + offset - 26;
    }
  });
  //   console.log(offsetIndex);
  let strCiphered = "";
  for (i = 0; i < offsetIndex.length; i++) {
    if (offsetIndex[i] === " ") {
      strCiphered = strCiphered + " ";
    } else {
      strCiphered = strCiphered + alphabet[offsetIndex[i]];
    }
  }
  console.log(strCiphered);
}
