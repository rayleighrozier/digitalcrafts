// NVM >> Node version manager (manage different versions of the program)
// NPM >> Node package manager

//No DOM and no window in Node (doesn't interact with browser)
//server-side javascript instead of client-side

const printHello = () => {
  console.log("hello node");
};

module.exports = printHello;

// in other file
//const printInfo = require ( "./index")
