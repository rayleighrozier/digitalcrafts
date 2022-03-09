require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./models");
const bcrypt = require("bcrypt");
const PORT = process.env.PORT;
app.use(express.json());

app.get("/get_pets", async (req, res) => {
  let pets = await db.pets.findAll();
  res.send(pets);
});

app.get("/get_owners", async (req, res) => {
  let owners = await db.owners.findAll();
  res.send(owners);
});

app.post("/new_pet", async (req, res) => {
  let { type, species, name, age, ownerId } = req.body;
  let pet = await db.pets.create({
    type: type,
    name: name,
    age: age,
    ownerId: ownerId,
    species: species,
  });
  res.send(pet);
});

app.post("/new_owner", async (req, res) => {
  let { name, password, location, environment } = req.body;
  let salt = await bcrypt.genSalt(2);
  let hashed = await bcrypt.hash(password, salt);
  let owner = await db.owners.create({
    name: name,
    password: hashed,
    location: location,
    environment: environment,
  });
  res.send(owner);
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
