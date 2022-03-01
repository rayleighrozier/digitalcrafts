const express = require("express");
const app = express();
//middleware >> lets you read JSON
app.use(express.json());
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/cats", (req, res) => {
  res.send("Meow!");
});
app.get("/dogs", (req, res) => {
  res.send("Woof!");
});
app.get("/cats_and_dogs", (req, res) => {
  res.send("Dogs and cats living together...mass hysteria!!");
});

// Route with parameters
// app.get("/greet/:name", (req, res) => {
//   console.log(req.params);
//   res.send(`Hello, ${req.params.name}!`);
// });

//HTML Response
app.get("/greet/:name", (req, res) => {
  let htmlResponse = `<h1> Hello ${req.params.name} !</h1>`;
  res.send(htmlResponse);
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
