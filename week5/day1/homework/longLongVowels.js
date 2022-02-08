// Write a function, which is given a string,
// return the result of extending any long vowels to the length of 5.

function longLongVowels(string) {
  let vowelIndex = string.search(/[aeiouAEIOU]/);
  let longString = "";
  for (i = 0; i < string.length; i++) {
    if (i === vowelIndex) {
      longString = longString + string[i].repeat(5);
    } else {
      longString = longString + string[i];
    }
  }
  console.log(longString);
}
