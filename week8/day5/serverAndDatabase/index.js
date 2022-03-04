const express = require("express");
const app = express();
const PORT = 3001;
const creds = require("./db");
app.use(express.json());

app.get("/getFlowers", (req, res) => {
  creds.connect((err, client, release) => {
    if (err) {
      console.log("error");
      res.send(err);
    }
    client.query(`SELECT * FROM flowers;`, (err, result) => {
      if (err) {
        console.log("error");
        res.send(err);
      }
      console.log("connection successful");
      res.send(result.rows);
    });
  });
  //   console.log("flowersssssss");
});

app.post("/createFlower", (req, res) => {
  console.log("new flower! ");
});
app.listen(PORT, console.log(`listening on ${PORT}`));
