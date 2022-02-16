const form = document.querySelector(".form");
const movieContainer = document.querySelector(".movie-container");
movieContainer.className = "card-group";

const getMovies = async (url) => {
  const movies = await fetch(url);
  const moviesJson = await movies.json();
  displayMovies(moviesJson);
};

const displayMovies = (movies) => {
  for (movie of movies.Search) {
    const { Title, Poster } = movie;
    let displayCard = document.createElement("div");
    displayCard.classList.add("card");
    displayCard.style = "max-width: 18rem";
    let displayPoster = document.createElement("img");
    displayPoster.classList = "poster card-img-top";
    let displayTitle = document.createElement("p");
    displayTitle.classList = "card-text";
    displayPoster.src = movie.Poster;
    displayTitle.innerText = movie.Title;
    displayCard.append(displayPoster, displayTitle);
    movieContainer.append(displayCard);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //clear old movies
  while (movieContainer.firstChild) {
    movieContainer.removeChild(movieContainer.firstChild);
  }
  //get new movies
  input = document.querySelector(".input").value;
  let url = `http://www.omdbapi.com/?apikey=6566ee6b&s=${input}`;
  getMovies(url);

  //clear input bar
  document.querySelector(".input").value = "";
});
