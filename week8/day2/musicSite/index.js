const express = require("express");
const app = express();
const PORT = 3001;
// app.use(express.json());

const albums = require("./albums");
// console.log(albums);

app.get("/", (req, res) => {
  let frontPage = `
      <h1> Lorde Music Site </h1>
      <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/RF_3006_Lorde%40Arena_Krists_Luhaers-5_%2835769377251%29_%28cropped%29.jpg/440px-RF_3006_Lorde%40Arena_Krists_Luhaers-5_%2835769377251%29_%28cropped%29.jpg" style="height:300px">
      <p> Ella Marija Lani Yelich-O'Connor, known professionally as Lorde, is a New Zealand singer-songwriter. Taking inspiration from the British aristocracy for her stage name, she is known for employing unconventional musical styles and introspective songwriting. Lorde's music is primarily electropop and contains elements of subgenres such as dream pop and indie-electro.</p>`;
  res.send(frontPage);
});

app.get("/cds", (req, res) => {
  let cdPage = ``;
  for (album of albums) {
    cdPage += `<a href=http://localhost:3001/cds/${album.name}> ${album.name} </a>
    `;
  }
  res.send(cdPage);
});

app.get("/cds/:name", (req, res) => {
  let thisAlbum = albums.find((album) => album.name === req.params.name);
  let albumPage = `<h1>${thisAlbum.name}</h1>
  <img src=${thisAlbum.imgURL} style="height:300px">
  <h2>Tracklist </h2>`;
  for (song of thisAlbum.songTitles) {
    albumPage += `<p>${song}</p>`;
  }
  res.send(albumPage);
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
