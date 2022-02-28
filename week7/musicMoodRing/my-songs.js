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
const songsContainer = document.querySelector(".songs-container");
const songs = { ...localStorage };

const getStorageSongs = async (songs) => {
  const token = await getToken();
  for (const songId in songs) {
    const result = await fetch(`	https://api.spotify.com/v1/tracks/${songId}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });
    const song = await result.json();

    let name = song.name;
    let artists = song.artists[0].name;
    let emoji = "";
    if (song.artists.length > 1) {
      for (let i = 1; i < song.artists.length; i++) {
        artists = artists + ", " + `${song.artists[i].name}`;
      }
    }
    let mood = songs[songId];

    if (mood === "happy") {
      emoji = "😊";
    }
    if (mood === "pumped") {
      emoji = "💪";
    }
    if (mood === "chill") {
      emoji = "😴";
    }
    if (mood === "angry") {
      emoji = "😡";
    }
    if (mood === "heartbroken") {
      emoji = "💔";
    }
    if (mood === "loved") {
      emoji = "🥰";
    }
    const songCard = document.createElement("div");
    songCard.classList = "song-card container-grow";
    let cardEmoji = document.createElement("p");
    cardEmoji.className = "card-emoji";
    cardEmoji.innerText = emoji;

    let cardDisplay = document.createElement("p");
    cardDisplay.className = "card-display";
    cardDisplay.innerText = `${name} - ${artists}`;
    let spotifyEmbed = document.createElement("iframe");
    spotifyEmbed.src = `https://open.spotify.com/embed/track/${songId}?utm_source=generator`;
    spotifyEmbed.className = "card-spotify-embed";
    spotifyEmbed.allowfullscreen = "";
    spotifyEmbed.allow =
      "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    songCard.append(cardEmoji, cardDisplay, spotifyEmbed);
    songsContainer.append(songCard);
  }
};
getStorageSongs(songs);
