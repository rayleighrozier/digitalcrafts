const express = require("express");
const app = express();
const PORT = 3001;
const photo = require("./routes/photo");
const user = require("./routes/user");
app.use(express.json());

app.use("/photo", photo);
app.use("/user", user);

app.listen(PORT, console.log(`listening on ${PORT}`));
