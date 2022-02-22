import { playlists } from "./playlists.js";
const container = document.querySelector(".song-container");

const happy = document.querySelector("#happy");
const chill = document.querySelector("#chill");
const pumped = document.querySelector("#pumped");
const angry = document.querySelector("#angry");
const pop = document.querySelector("#pop");
const hiphop = document.querySelector("#hiphop");
const rb = document.querySelector("#rb");
const country = document.querySelector("#country");
const rock = document.querySelector("#rock");
const indie = document.querySelector("#indie");

let mood = "";
let genre = "";
const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });
  const data = await result.json();
  return data.access_token;
};

// const getCategories = async () => {
//   const token = await getToken();
//   const result = await fetch(`https://api.spotify.com/v1/browse/categories`, {
//     method: "GET",
//     headers: { Authorization: "Bearer " + token },
//   });
//   const data = await result.json();
//   console.log(data.categories.items);
//   for (category of data.categories.items) {
//     console.log(category.name, category.id);
//   }
// };

// getCategories();

// const getPlaylists = async (categoryID) => {
//   const token = await getToken();
//   const result = await fetch(
//     `https://api.spotify.com/v1/browse/categories/${categoryID}/playlists`,
//     {
//       method: "GET",
//       headers: { Authorization: "Bearer " + token },
//     }
//   );
//   const data = await result.json();
//   console.log(data.playlists.items);
//   for (playlist of data.playlists.items) {
//     console.log(playlist.name, playlist.id);
//   }
// };
// // getPlaylists("chill");
// // getPlaylists("party");
// // getPlaylists("workout");

const getSong = async (playlistID) => {
  container.innerHTML = "";
  const token = await getToken();
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );
  const data = await result.json();
  let playlistSongs = data.items;
  let song =
    playlistSongs[Math.floor(Math.random() * playlistSongs.length)].track;
  // console.log(song);
  // let name = song.name;
  // let artists = song.artists[0].name;
  // if (song.artists.length > 1) {
  //   for (i = 1; i < song.artists.length; i++) {
  //     artists = artists + ", " + `${song.artists[i].name}`;
  //   }
  // }
  // console.log(artists);
  // let cover = song.album.images[0].url;
  // let songCard = document.createElement("div");
  // songCard.className = "song-card";
  // let cardName = document.createElement("p");
  // cardName.innerText = name;
  // let cardArtists = document.createElement("p");
  // cardArtists.innerText = artists;
  // let cardCover = document.createElement("img");
  // cardCover.className = "card-cover";
  // cardCover.src = cover;
  let spotifyEmbed = document.createElement("iframe");
  spotifyEmbed.src = `https://open.spotify.com/embed/track/${song.id}?utm_source=generator`;
  spotifyEmbed.className = "spotify-embed";
  spotifyEmbed.allowfullscreen = "";
  spotifyEmbed.allow =
    "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  // songCard.append(cardCover, cardName, cardArtists, spotifyEmbed);
  container.append(spotifyEmbed);
  return data;
};
// randomPlaylist = playlists[Math.floor(Math.random() * playlists.length)];
// console.log(randomPlaylist);
// getSong(randomPlaylist.id);

const getMood = (button) => {
  button.addEventListener("click", () => {
    mood = button.id;
    console.log(mood);
    console.log(playlists[mood]);
    // getSong(
    //   playlists[mood][Math.floor(Math.random() * playlists[mood].length)]
    // );
  });
};
const getGenre = (button) => {
  button.addEventListener("click", () => {
    genre = button.id;
    console.log(genre);
    console.log(playlists[mood][genre]);
    getSong(
      playlists[mood][genre][
        Math.floor(Math.random() * playlists[mood][genre].length)
      ]
    );
  });
};

getMood(happy);
getMood(chill);
getMood(pumped);
getMood(angry);
getGenre(pop);
getGenre(hiphop);
getGenre(rb);
getGenre(country);
getGenre(rock);
getGenre(indie);
