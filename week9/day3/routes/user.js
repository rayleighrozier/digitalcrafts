const express = require("express");
const router = express.Router();
const db = require("../models");
const { User } = db;

router.post("/create", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const user = await User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
  });
  res.send(user);
});

router.get("/get", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

router.post("/update/:id", async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  await User.update(
    { firstName: firstName, lastName: lastName, email: email },
    { where: { id: id } }
  );

  res.send(`User ${id} was updated`);
});

router.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  await User.destroy({ where: { id: id } });
  res.send(`User ${id} was deleted`);
});

module.exports = router;
