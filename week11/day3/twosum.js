const twoSum = (arr, target) => {
  let arrSorted = arr.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  let left = 0;
  let right = arr.length - 1;
  for (i = 0; i < arrSorted.length; i++) {
    if (arrSorted[left] + arrSorted[right] === target) {
      let answerArray = [arrSorted[left], arrSorted[right]];
      return answerArray;
    }
    if (arrSorted[left] + arrSorted[right] > target) {
      right = right - 1;
    }
    if (arrSorted[left] + arrSorted[right] < target) {
      left = left + 1;
    }
  }
  return [];
};

console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoSum([4, 6, 1, -3], 3));
