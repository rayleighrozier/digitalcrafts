import { playlists } from "./playlists.js";
const clientId = "bfb19e2c22784bce8bae70aa1c85b853";
const clientSecret = "fe5b80a395a44db69213a87e4d891fa8";
const moodRingContainer = document.querySelector(".mood-ring-container");
const moodContainer = document.querySelector(".mood-container");
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

const storeSong = (song) => {
  localStorage.setItem(song.id, `${mood}`);
  console.log(localStorage);
};

const moodRing = (button) => {
  //capture mood on click and remove mood input
  button.addEventListener("click", () => {
    mood = button.id;
    console.log(mood);
    console.log(playlists[mood]);
    moodContainer.classList = "mood-container hidden";

    const genreContainer = document.createElement("div");
    genreContainer.classList = "genre-container fade-in-down";
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
    hiphop.innerText = "hip-hop";
    rb.innerText = "R&B";
    country.innerText = "country";
    rock.innerText = "rock";
    indie.innerText = "indie";
    setTimeout(() => {
      genreButtonContainer.append(pop, hiphop, rb, country, rock, indie);
      genreContainer.append(genreTitle, genreButtonContainer);
      moodRingContainer.append(genreContainer);
    }, 1000);

    //capture genre input on click and get song
    const getGenre = (button) => {
      button.addEventListener("click", () => {
        genre = button.id;
        console.log(genre);
        console.log(playlists[mood][genre]);
        const getSong = async (playlistID) => {
          genreContainer.classList = "genre-container hidden";
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
          spotifyTitle.innerText = "Your music mood ring is:";
          const spotifyButtonContainer = document.createElement("div");
          spotifyButtonContainer.className = "spotify-button-container";
          const againButton = document.createElement("button");
          againButton.innerText = "Try Again";
          againButton.classList = "spotify-button grow";
          againButton.onclick = () => {
            location.href = "mood-ring.html";
          };

          const addButton = document.createElement("button");
          addButton.innerText = "Add to My Songs";
          addButton.classList = "spotify-button grow";
          addButton.onclick = () => {
            if (song.id in localStorage === false) {
              storeSong(song);
            }
          };
          spotifyButtonContainer.append(addButton, againButton);
          const spotifyContainer = document.createElement("div");
          spotifyContainer.classList = " spotify-container fade-in-down";
          spotifyContainer.append(
            spotifyTitle,
            spotifyEmbed,
            spotifyButtonContainer
          );
          moodRingContainer.append(spotifyContainer);
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
  });
};

moodRing(happy);
moodRing(chill);
moodRing(pumped);
moodRing(angry);
moodRing(heartbroken);
moodRing(loved);
