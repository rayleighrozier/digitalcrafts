require("dotenv").config();
// console.log(process.env.RAYLEIGH);
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const db = require("./models");
const PORT = process.env.PORT;
app.use(express.json());

app.get("/get_users", async (req, res) => {
  let users = await db.Users.findAll();
  res.send(users);
});

app.listen(PORT, console.log(`listening on ${PORT} `));
