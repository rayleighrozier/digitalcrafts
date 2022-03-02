const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
//middleware (always use app.set)
//view engine/template engine
//create file path and add views folder
//__dirname is your current file path/where you are
app.set("views", path.join(__dirname, "views"));
//render everything in the views folder with ejs
app.set("view engine", "ejs");

//setup public folder (for CSS/static files)
app.use(express.static("./public"));

//minimum to show EJS required on front page
// const ejs = require("ejs");
// let students = ["Santos", "Jason", "Rayleigh", "Ciara"];
// let html = ejs.render('<h2><%= students.join(", "); %></h2>', {
//   students: students,
// });
// ORRR let html = ejs.render("<%= class.join(", "); %>", { class: students });

app.get("/", (req, res) => {
  // render html file(you get this when you use a template engine)
  // goes to the ejs file you made
  res.render("pages/home");
});
app.get("/userAccount", (req, res) => {
  res.render("pages/userAccount");
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
