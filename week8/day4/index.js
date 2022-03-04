const express = require("express");
const app = express();
const PORT = 3001;
const creds = require("./db");
app.use(express.json());

app.get("/getDogs", (req, res) => {
  creds.connect((err, client, release) => {
    client.query("SELECT * FROM dogs", (err, result) => {
      res.send(result.rows);
    });
  });
});

app.post("/makeDog", (req, res) => {
  creds.connect((err, client, release) => {
    if (err) {
      res.send(err);
    }
    client.query(
      `INSERT INTO dogs (name, breed) VALUES ('${req.body.name}', '${req.body.breed}')`,
      (err, result) => {
        if (err) {
          res.status(400).send(err);
        }
        res.send(result);
      }
    );
  });
});

app.listen(PORT, console.log(`listening on ${PORT}`));
