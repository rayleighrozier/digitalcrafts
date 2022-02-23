import { playlists } from "./playlists.js";

const moodRingContainer = document.querySelector(".mood-ring-container");
const moodContainer = document.querySelector(".mood-container");
const songContainer = document.querySelector(".song-container");
const happy = document.querySelector("#happy");
const chill = document.querySelector("#chill");
const pumped = document.querySelector("#pumped");
const angry = document.querySelector("#angry");
const heartbroken = document.querySelector("#heartbroken");
const loved = document.querySelector("#loved");
let mood = "";
let genre = "";

//functions
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

const moodRing = (button) => {
  //capture mood on click and remove mood input
  button.addEventListener("click", () => {
    mood = button.id;
    console.log(mood);
    console.log(playlists[mood]);
    moodContainer.classList = "hidden";
    //make genre input
    const genreContainer = document.createElement("div");
    genreContainer.className = "mood-container";
    const genreButtonContainer = document.createElement("div");
    genreButtonContainer.classList = "button-container container-grow";
    const genreTitle = document.createElement("p");
    genreTitle.className = "mood-title";
    genreTitle.innerText = `✨ Pick your genre ✨`;
    const pop = document.createElement("button");
    const hiphop = document.createElement("button");
    const rb = document.createElement("button");
    const country = document.createElement("button");
    const rock = document.createElement("button");
    const indie = document.createElement("button");
    pop.classList = "genre-button grow";
    hiphop.classList = "genre-button grow";
    rb.classList = "genre-button grow";
    country.classList = "genre-button grow";
    rock.classList = "genre-button grow";
    indie.classList = "genre-button grow";
    pop.id = "pop";
    hiphop.id = "hiphop";
    rb.id = "rb";
    country.id = "country";
    rock.id = "rock";
    indie.id = "indie";
    pop.innerText = "pop";
    hiphop.innerText = "hiphop";
    rb.innerText = "rb";
    country.innerText = "country";
    rock.innerText = "rock";
    indie.iinnerText = "indie";
    genreButtonContainer.append(pop, hiphop, rb, country, rock, indie);
    genreContainer.append(genreTitle, genreButtonContainer);
    moodRingContainer.append(genreContainer);

    //capture genre input on click and get song
    const getGenre = (button) => {
      button.addEventListener("click", () => {
        genre = button.id;
        console.log(genre);
        console.log(playlists[mood][genre]);
        const getSong = async (playlistID) => {
          genreContainer.classList = "hidden";
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
            playlistSongs[Math.floor(Math.random() * playlistSongs.length)]
              .track;

          let spotifyEmbed = document.createElement("iframe");
          spotifyEmbed.src = `https://open.spotify.com/embed/track/${song.id}?utm_source=generator`;
          spotifyEmbed.className = "spotify-embed";
          spotifyEmbed.allowfullscreen = "";
          spotifyEmbed.allow =
            "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
          // songCard.append(cardCover, cardName, cardArtists, spotifyEmbed);
          const spotifyTitle = document.createElement("p");
          spotifyTitle.className = "spotify-title";
          spotifyTitle.innerText = "Your current music mood ring is:";
          songContainer.append(spotifyTitle, spotifyEmbed);
          return data;
        };
        getSong(
          playlists[mood][genre][
            Math.floor(Math.random() * playlists[mood][genre].length)
          ]
        );
      });
    };

    getGenre(pop);
    getGenre(hiphop);
    getGenre(rb);
    getGenre(country);
    getGenre(rock);
    getGenre(indie);
    // getSong(
    //   playlists[mood][Math.floor(Math.random() * playlists[mood].length)]
    // );
  });
};

moodRing(happy);
moodRing(chill);
moodRing(pumped);
moodRing(angry);
moodRing(heartbroken);
moodRing(loved);

//delete get song stuff

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
