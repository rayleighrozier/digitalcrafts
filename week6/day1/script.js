// ES6

//Declaring Variables
// let, const
// let lets you assign it a new value (mostly used in block scope)
//const stays the same (can push,slece et.c from an array, but can't assign new blank array)

//Functions
//fat arrow
//fat arrow functions do NOT get access to "this" but you do get access to "this" with traditional functions

const myFunction = () => {};

//set << fancy array no duplicates, looks like an object
const names = new Set();

//map <<class-like objects?
//you CAN have duplicates here 
const mapName = new Map();

//Destructuring

const santos = {
name :"santos";
height: "100"
}
const {name , height} = santos;

const array1 = ["hello" , "goodbye"]
const [x,y] = array1;

//loops 
//for of ... arrays
for (let student of array) {console.log("hi");}
//for in ... objects
for (let student in object) {console.log("hi");}

//default values 

const printArray = (arr=[]) => {
console.log(arr[0]);
}

//typeof
if (typeof value !== "object") {} 
// << "object" is used for objects *and arrays

//one line functions

const functionName = () => "hi";
//return and {} are  implied