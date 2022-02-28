const express = require("express");
const app = express();
const PORT = 3001;

//route
app.get("/", (req, res) => {
  const users = [{ name: "joe" }, { name: "sally" }];
  res.send(users);
});

app.post("/user_data", (req, res) => {
  res.send("posting user data");
});

app.listen(PORT, console.log(`listening on port http://localhost:${PORT}`));
