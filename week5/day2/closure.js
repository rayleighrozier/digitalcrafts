// Closure
// A function inside of a function
// The inside function accesses something that wasn't made for it
// but was made by the outside function.

// AKA a function inside of a function that uses something outside of its scope
// OR a global thing being used locally in a function

function closureExample() {
  let parent = "Susan";
  function childofClosure() {
    console.log(parent); //this line is the closure (accessing something from its parent)
  }
  childofClosure();
}

closureExample();
