let names = ["Bob", "Luna", "Smith"];

const reverseNames = (names) => {
  const reverseSingleName = (name) => {
    let reversed = "";
    for (i = name.length - 1; i >= 0; i--) {
      reversed += name[i];
    }
    return reversed;
  };
  for (name in names) {
    names[name] = reverseSingleName(names[name]);
  }
  console.log(names);
  return names;
};

// reverseNames(names);

const capitalizeNames = (names) => {
  for (i = 0; i < names.length; i++) {
    names[i] = names[i].toUpperCase();
  }
  console.log(names);
  return names;
};
// capitalizeNames(names);

const findSmith = (names) => {
  for (i = 0; i < names.length; i++) {
    if (names[i] === "smith" || names[i] === "Smith") {
      console.log(`Smith is at ${i}`);
      return i;
    }
  }
};

// findSmith(names);

const isPalindrome = (word) => {
  word = word.toLowerCase();
  let reversed = "";
  for (i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  if (word === reversed) {
    return true;
  }
  return false;
};

// console.log(isPalindrome("cat"));
// console.log(isPalindrome("tacocat"));
// console.log(isPalindrome("tAcOCaT"));

const twoSum = (arr, target) => {
  let l = 0;
  let r = arr.length - 1;
  let solution = [];
  arr = arr.sort((a, b) => a - b);
  while (l < r) {
    if (arr[l] + arr[r] === target) {
      solution = [arr[l], arr[r]];
      return solution;
    }
    if (arr[l] + arr[r] > target) {
      r--;
    }
    if (arr[l] + arr[r] < target) {
      l++;
    }
  }
  return solution;
};

// twoSum([2, 7, 11, 15], 9);
