// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// const list1 = [1, 2, 4, 0];
// const list2 = [1, 3, 4, 0];
// // Output: [1,1,2,3,4,4]
// const list3 = [];
// const list4 = [];
// // output: [];

// const combineList = (arr1, arr2) => {
//   for (num of arr2) {
//     arr1.push(num);
//   }
//   return arr1.sort();
// };
// console.log(combineList(list1, list2));
// console.log(combineList(list3, list4));

// const fizzBuzz = (num) => {
//   if (num % 2 == 0 && num % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (num % 2 == 0) {
//     console.log("Fizz");
//   } else if (num % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(num);
//   }
// };

// fizzBuzz(1);
// fizzBuzz(2);
// fizzBuzz(5);
// fizzBuzz(7);
// fizzBuzz(10);
// fizzBuzz(15);
// fizzBuzz(20);

const prices = [7, 1, 5, 3, 6, 4];
//Output: 5 (6-1)

const stockProfit = (arr) => {
  buy = arr[0];
  sell = arr[arr.length - 1];
  console.log("buy start", buy);
  console.log("sell start", sell);

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < buy) {
      buy = arr[i];
    }
    if (arr[i] > sell && arr.indexOf(buy) < arr.indexOf(arr[i])) {
      sell = arr[i];
    }
    console.log("index of buy", arr.indexOf(buy));
    console.log("index of sell", arr.indexOf(sell));
  }

  console.log("buy end", buy);
  console.log("sell end", sell);
  console.log(sell - buy);
};

stockProfit(prices);
