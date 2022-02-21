const container = document.querySelector(".container");

const happyButton = document.querySelector("#happy");
const sadButton = document.querySelector("#sad");
const partyButton = document.querySelector("#party");
const playlists = {
  happy: [
    "37i9dQZF1DXdPec7aLTmlC",
    "37i9dQZF1EVJSvZp5AOML2",
    "37i9dQZF1DX0UrRvztWcAU",
    "37i9dQZF1DWZKuerrwoAGz",
    "37i9dQZF1DX1H4LbvY4OJi",
    "37i9dQZF1DWYBO1MoTDhZI",
    "37i9dQZF1DX3rxVfibe1L0",
  ],
  sad: [
    "37i9dQZF1DWZUAeYvs88zc",
    "37i9dQZF1DX7qK8ma5wgG1",
    "37i9dQZF1DWVV27DiNWxkR",
    "37i9dQZF1DWZFicI79sEj9",
    "37i9dQZF1DWSqBruwoIXkA",
    "37i9dQZF1DXa39zZwdBPSN",
  ],
  party: [
    "37i9dQZF1DXa2PvUpywmrr",
    "37i9dQZF1DWXti3N4Wp5xy",
    "37i9dQZF1DX7e8TjkFNKWH",
    "37i9dQZF1DWWylYLMvjuRG",
    "37i9dQZF1DXdo6A3mWpdWx",
    "37i9dQZF1DXaXB8fQg7xif",
  ],
};
let mood = "";
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
  console.log(song);
  let name = song.name;
  let artists = song.artists[0].name;
  if (song.artists.length > 1) {
    for (i = 1; i < song.artists.length; i++) {
      artists = artists + ", " + `${song.artists[i].name}`;
    }
  }
  console.log(artists);
  let cover = song.album.images[0].url;
  let songCard = document.createElement("div");
  songCard.className = "song-card";
  let cardName = document.createElement("p");
  cardName.innerText = name;
  let cardArtists = document.createElement("p");
  cardArtists.innerText = artists;
  let cardCover = document.createElement("img");
  cardCover.className = "card-cover";
  cardCover.src = cover;
  let spotifyEmbed = document.createElement("iframe");
  spotifyEmbed.src = `https://open.spotify.com/embed/track/${song.id}?utm_source=generator`;
  spotifyEmbed.className = "spotify-embed";
  spotifyEmbed.allowfullscreen = "";
  spotifyEmbed.allow =
    "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  songCard.append(cardCover, cardName, cardArtists, spotifyEmbed);
  container.append(songCard);
  return data;
};
// randomPlaylist = playlists[Math.floor(Math.random() * playlists.length)];
// console.log(randomPlaylist);
// getSong(randomPlaylist.id);

const getMood = (button) => {
  button.addEventListener("click", () => {
    mood = button.innerText;
    console.log(playlists[mood]);
    getSong(
      playlists[mood][Math.floor(Math.random() * playlists[mood].length)]
    );
  });
};

getMood(happy);
getMood(sad);
getMood(party);
