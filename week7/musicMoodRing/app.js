const container = document.querySelector(".container");

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
  let cardButton = document.createElement("button");
  cardButton.innerText = "Listen on Spotify";
  songCard.append(cardCover, cardName, cardArtists, cardButton);
  container.append(songCard);
  return data;
};
getSong("37i9dQZF1DXdPec7aLTmlC");

// getPlaylist("37i9dQZF1DX6VdMW310YC7");
