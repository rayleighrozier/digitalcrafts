const express = require("express");
const app = express();
//middleware >> lets you read JSON
app.use(express.json());
const PORT = 3001;
let studentDB = [
  { name: "Rayleigh" },
  { name: "Santos" },
  { name: "Jason" },
  { name: "Ciara" },
];

//CRUD -- Create Read Update Delete

//Create
app.post("/create_users", (req, res) => {
  studentDB.push(req.body);
  res.send(studentDB);
});
//Read
app.get("/", (req, res) => {
  let greeting = `<div>`;
  for (student of studentDB) {
    greeting += `<h1> Howdy ${student.name}</h1>`;
  }
  greeting += `</div>`;
  res.send(greeting);
});

//Update
app.post("/update_users", (req, res) => {
  const found = studentDB.find((student) => student.name === req.body.name);
  found.name = req.body.newValue;
  res.send(studentDB);
});

//Delete
app.post("/delete_users", (req, res) => {
  const filtered = studentDB.splice(
    (student) => student.name !== req.body.name
  );
  studentDB = filtered;
  res.send(studentDB);
});
app.listen(PORT, console.log(`listening on port ${PORT}`));
