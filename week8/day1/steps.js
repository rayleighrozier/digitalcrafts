// Steps to create a Node Server

//1. cd into your folder and do " npm init ". Or "npm init -y" to skip through all the okays.
//This sets up a folder called  "package.json".
// "package.json" is used to track the packages you'll be installing for that project.

// 2. "npm install " or "npm i" to get your tools >> you will definitely need "express"
//creates a package-lock.json and a folder called "node_modules"
//you pretty much never bother these

//3. Get boilerplate written on index.js file

//4. At the top, you have to requre all the tools you need. Require
//express first.

//5. Invoke express and put its return value in a variable. Default is
//to call it "app".

//6. Create a port number to use. Numbers around 3000 are good.

//7.Listen to your port.
//You are telling your server to listen for requests on a certain port.

//8. Add routes
//route always has a request and a response in that order
// can only respond ONE TIME
// Things sent to the server are requests
//response is what is sent back

//app. get, app.post, etc
//app.get("/") << means home
