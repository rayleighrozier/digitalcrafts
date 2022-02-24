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
console.log(localStorage);
const songsContainer = document.querySelector(".songs-container");
const songs = { ...localStorage };
console.log(songs);
const getStorageSongs = async (songs) => {
  const token = await getToken();
  for (const songId in songs) {
    const result = await fetch(`	https://api.spotify.com/v1/tracks/${songId}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });
    const song = await result.json();
    console.log(song);
    const spotifyEmbed = document.createElement("iframe");
    spotifyEmbed.src = `https://open.spotify.com/embed/track/${songId}?utm_source=generator`;
    spotifyEmbed.className = "spotify-embed";
    spotifyEmbed.allowfullscreen = "";
    spotifyEmbed.allow =
      "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    songsContainer.append(spotifyEmbed);
  }
};
getStorageSongs(songs);

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