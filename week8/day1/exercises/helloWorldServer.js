const express = require("express");
const app = express();
const PORT = 3002;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, console.log(`listening on port http://localhost:${PORT}`));
