const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
const pictures = [
  "https://images.unsplash.com/photo-1593011951285-481ba527a7c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MH",
  "https://images.unsplash.com/photo-1589312397744-799d9f9c2944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  "https://images.unsplash.com/photo-1558691518-9509018f6614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80",
  "https://images.unsplash.com/photo-1621725428639-2abf92de4593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80",
  "https://images.unsplash.com/photo-1622816147681-ce8d2626ce17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782&q=80",
  "https://images.unsplash.com/photo-1621725322096-2c8b92b0b1b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/home", (req, res) => {
  res.render("home", { pictures: pictures });
});

app.get("/about", (req, res) => {
  res.render("about", { pictures: pictures });
});

app.listen(PORT, console.log(`listening on ${PORT}`));
