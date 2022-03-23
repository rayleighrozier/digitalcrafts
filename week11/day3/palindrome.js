const checkPalindrome = (str) => {
  let l = 0;
  let r = str.length - 1;
  while (l < r) {
    if (str[l] === str[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(checkPalindrome("tacocat"));
console.log(checkPalindrome("blue"));
console.log(checkPalindrome("abcdefghihgfeddcba"));
