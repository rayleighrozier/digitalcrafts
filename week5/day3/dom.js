console.log(document);

//querySelector
//querySelector lets you target elements based on
//ID, class
// getElementByID
// single element by ID
// getElementsByClassName
//plural ones give you our elements in an array
let howdy = document.querySelectorAll(".howdy");
console.log(howdy);
let button = document.getElementById("magicbutton");
console.log(button);
let yo = document.getElementsByClassName("yo");
console.log(yo);

//Changing the DOM >>
// 1. select OR create what you want to change
// 2. add the info to whatever you want to create/modify
// 3. append it to your container that you selected in step 1
