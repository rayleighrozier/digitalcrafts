const express = require("express");
const router = express.Router();
const db = require("../models");
const { Photo } = db;

router.post("/create/:id", async (req, res) => {
  const { title, url } = req.body;
  let { id } = req.params;
  id = parseInt(id);
  const photo = await Photo.create({
    title: title,
    url: url,
    userId: id,
  });
  res.send(photo);
});

router.get("/get", async (req, res) => {
  const photos = await Photo.findAll();
  res.send(photos);
});

router.post("/update/:id", async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const { title, url } = req.body;
  await Photo.update({ title: title, url: url }, { where: { userId: id } });

  res.send(`User ${id} was updated`);
});

router.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const { title } = req.body;
  await Photo.destroy({ where: { title: title, userId: id } });
  res.send(`Photo ${title} was deleted from account`);
});

module.exports = router;
