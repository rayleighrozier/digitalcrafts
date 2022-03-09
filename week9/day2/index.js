require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT;
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("hi");
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
