const cowsay = require("cowsay");
const express = require("express");
const app = express();
const PORT = 3001;

// console.log(cowsay.say({ text: "I'm a module" }));
app.post("/sendCowUserName", (req, res) => {
  const cowsayUser = cowsay.say({ text: "Adding cow user" });
  res.send(cowsayUser);
});
app.post("/sendCowAppointment", (req, res) => {
  const cowsayAppt = cowsay.say({ text: "Setting up cow appointment" });
  res.send(cowsayAppt);
});
app.get("/getCowUserName", (req, res) => {
  const cowsayUser = cowsay.say({ text: "Adding cow user" });
  res.send(cowsayUser);
});
app.get("/getCowAppointment", (req, res) => {
  const cowsayAppt = cowsay.say({ text: "Setting up cow appointment" });
  res.send(cowsayAppt);
});

app.delete("/deleteCowUser", (req, res) => {
  res.send(console.log("deleting user"));
});

app.listen(PORT, console.log(`listening on port http://localhost:${PORT}`));
