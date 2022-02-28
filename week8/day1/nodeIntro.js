// NVM >> Node version manager (manage different versions of the program)
// NPM >> Node package manager

//No DOM and no window in Node (doesn't interact with browser)
//server-side javascript instead of client-side

const usefulFunctions = {
  printHello: () => {
    console.log("hello node");
  },

  printNumber: () => {
    console.log(4);
  },
};

module.exports = usefulFunctions;

// in other file
//const useful = require ( "./index");
//useful.printHello();
