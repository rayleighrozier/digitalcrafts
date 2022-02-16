const movie = {
  Title: "Mean Girls",
  Year: "2004",
  Rated: "PG-13",
  Released: "30 Apr 2004",
  Runtime: "97 min",
  Genre: "Comedy",
  Director: "Mark Waters",
  Writer: "Rosalind Wiseman, Tina Fey",
  Actors: "Lindsay Lohan, Jonathan Bennett, Rachel McAdams",
  Plot: "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
  Language: "English, German, Vietnamese, Swahili",
  Country: "United States, Canada",
  Awards: "7 wins & 25 nominations",
  Poster:
    "https://play-lh.googleusercontent.com/FaBWrOOZBR3NcTCNKsUnKG3zzIIIYech-dwsCgw0XdLsN4WIM68k9pnh6YhTaVLsV9UL=w400-h600-rw",
  Cover:
    "https://thumbnails.cbsig.net/_x/w1200/CBS_Production_Entertainment_VMS/2021/07/16/1922594371964/MG_SAlone_16_9_1920x1080_768754_1920x1080.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "7.0/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "84%",
    },
    {
      Source: "Metacritic",
      Value: "66/100",
    },
  ],
  Metascore: "66",
  imdbRating: "7.0",
  imdbVotes: "365,428",
  imdbID: "tt0377092",
  Type: "movie",
  DVD: "21 Sep 2004",
  BoxOffice: "$86,058,055",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};

//cover is horizontal, poster is vertical
//make cover function
const cover = document.querySelector(".cover");
const card = document.querySelector(".card");

function createCard(movie) {
  const { Year, Rated, Runtime, Plot, Poster, Cover } = movie;

  const moviePoster = document.createElement("img");
  moviePoster.src = Poster;
  moviePoster.className = "poster";

  const movieInfo = document.createElement("div");
  movieInfo.className = "info";

  const moviePlot = document.createElement("p");
  moviePlot.className = "plot";
  moviePlot.innerText = Plot;
  movieInfo.append(moviePlot);

  const movieDetails = document.createElement("h2");
  movieDetails.className = "details";
  movieDetails.append(`${Year} | ${Runtime} | ${Rated}`);
  movieInfo.append(movieDetails);

  const movieRatings = document.createElement("div");
  movieRatings.className = "ratings";
  for (rating of movie.Ratings) {
    const { Source, Value } = rating;
    console.log(Source);
    console.log(Value);
    const movieRating = document.createElement("div");
    movieRating.className = "rating";
    ratingValue = document.createElement("h2");
    ratingValue.innerText = Value;
    ratingIcon = document.createElement("img");
    if (Source === "Internet Movie Database") {
      ratingIcon.src = "imdb.svg";
    }
    if (Source === "Rotten Tomatoes") {
      ratingIcon.src = "rt.svg";
    }
    if (Source === "Metacritic") {
      ratingIcon.src = "metacritic.svg";
    }
    ratingIcon.className = "icons";
    movieRating.append(ratingIcon, ratingValue);
    movieRatings.append(movieRating);
  }
  movieInfo.append(movieRatings);
  const movieButton = document.createElement("button");
  movieButton.className = "button";
  movieButton.innerText = "Watch Now";
  movieInfo.append(movieButton);

  const movieCover = document.createElement("img");
  movieCover.src = Cover;
  movieCover.className = "cover-visible";
  cover.append(movieCover);

  movieCover.addEventListener("click", () => {
    movieCover.classList.remove("cover-visible");
    movieCover.classList.add("cover-hidden");

    card.append(moviePoster);
    card.append(movieInfo);

    card.addEventListener("click", () => {
      movieCover.classList.add("cover-visible");
      movieCover.classList.remove("cover-hidden");
    });
  });
}

createCard(movie);
