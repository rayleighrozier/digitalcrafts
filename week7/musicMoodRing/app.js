const container = document.querySelector(".container");

const playlists = [
  { name: "Happy Hits!", mood: "happy", id: "37i9dQZF1DXdPec7aLTmlC" },
  { name: "Happy Mix", mood: "happy", id: "37i9dQZF1EVJSvZp5AOML2" },
  { name: "Wake Up Happy", mood: "happy", id: "37i9dQZF1DX0UrRvztWcAU" },
  { name: "Happy Favorites", mood: "happy", id: "37i9dQZF1DWZKuerrwoAGz" },
  { name: "Happy Pop", mood: "happy", id: "37i9dQZF1DX1H4LbvY4OJi" },
  { name: "Good Vibes", mood: "happy", id: "37i9dQZF1DWYBO1MoTDhZI" },
  { name: "Mood Booster", mood: "happy", id: "37i9dQZF1DX3rxVfibe1L0" },
];

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
  spotifyEmbed.style = "border-radius:12px";
  spotifyEmbed.src = `https://open.spotify.com/embed/track/${song.id}?utm_source=generator`;
  spotifyEmbed.width = "100%";
  spotifyEmbed.height = "380";
  spotifyEmbed.frameBorder = "0";
  spotifyEmbed.allowfullscreen = "";
  spotifyEmbed.allow =
    "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  songCard.append(cardCover, cardName, cardArtists, spotifyEmbed);
  container.append(songCard);
  return data;
};
randomPlaylist = playlists[Math.floor(Math.random() * playlists.length)];
console.log(randomPlaylist);
getSong(randomPlaylist.id);

//<iframe style="border-radius:12px"
