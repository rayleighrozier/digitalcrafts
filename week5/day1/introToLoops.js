// while

// for

// original for loop
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

// for in loop > only for objects

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
  }
}

// for of > use with arrays

for (const iterator of object) {
}

//map > loop over whole array and return a new aray with what you did

arr.map(function (element) {
  return element.toUppercase();
});
