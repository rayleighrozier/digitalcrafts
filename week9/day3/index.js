const express = require("express");
const app = express();
const PORT = 3001;
const db = require("./models");
const { Photo, User } = db;
app.use(express.json());

//CRUD PHOTO
app.post("/create_photo/:id", async (req, res) => {
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

app.get("/read_photos", async (req, res) => {
  const photos = await Photo.findAll();
  res.send(photos);
});

app.post("/update_photo/:id", async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const { title, url } = req.body;
  await Photo.update({ title: title, url: url }, { where: { userId: id } });

  res.send(`User ${id} was updated`);
});

app.delete("/delete_photo/:id", async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const { title } = req.body;
  await Photo.destroy({ where: { title: title, userId: id } });
  res.send(`Photo ${title} was deleted from account`);
});

//CRUD USER

app.post("/create_user", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const user = await User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
  });
  res.send(user);
});

app.get("/read_users", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.post("/update_user/:id", async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  await User.update(
    { firstName: firstName, lastName: lastName, email: email },
    { where: { id: id } }
  );

  res.send(`User ${id} was updated`);
});

app.delete("/delete_user/:id", async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  await User.destroy({ where: { id: id } });
  res.send(`User ${id} was deleted`);
});

app.listen(PORT, console.log(`listening on ${PORT}`));
