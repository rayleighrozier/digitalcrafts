// function returnName(first, last) {
//   return `${first.toUpperCase()} ${last.toUpperCase()}`;
// }

//you will be given an array
//it will be called
//array
//this array will have [1,2,3,4,5,6,7,8,9,10]
//print out only the odd numbers
//print out only the even numbers
//print out double of every number
//do each of these in separate functions
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenArray(arr) {
  const evenArray2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray2.push(arr[i]);
    }
  }
  return evenArray2;
}
console.log(evenArray(x));

function oddArray(arr) {
  const oddArray2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddArray2.push(arr[i]);
    }
  }
  return oddArray2;
}
console.log(oddArray(x));

function doubleArray(arr) {
  const doubleArray2 = [];
  for (let i = 0; i < arr.length; i++) {
    doubleArray.push(arr[i * 2]);
  }
  return doubleArray2;
}
console.log(doubleArray(arr));
