const input = document.querySelector("input");
const button = document.querySelector("button");
const weatherContainer = document.querySelector(".weather-container");

button.addEventListener("click", () => {
  searchWeather();
});

const searchWeather = async () => {
  const getURL = () => {
    return parseInt(input.value)
      ? `http://api.openweathermap.org/data/2.5/weather?id=524901&appid=05407dc4254bea406be637af43796a6a&units=imperial&zip=${input.value}`
      : `http://api.openweathermap.org/data/2.5/weather?id=524901&appid=05407dc4254bea406be637af43796a6a&units=imperial&q=${input.value}`;
  };
  const url = getURL();
  console.log(url);
  const getWeather = await fetch(url);
  const weatherJson = await getWeather.json();
  const title = weatherJson.name;
  const weatherType = weatherJson.weather[0].main;
  const temp = `${Math.round(weatherJson.main.temp)}°`;
  //use later to change colors
  const timeZone = weatherJson.timezone;

  const card = document.createElement("div");
  card.className = "card";

  const cardTop = document.createElement("div");
  cardTop.classList = "card-top light-blue-bg";

  const cardBody = document.createElement("p");
  cardBody.innerText = "test test test test test test test test";

  const cardTitle = document.createElement("p");
  cardTitle.className = "card-title";
  cardTitle.innerText = title;

  const cardTopDisplay = document.createElement("div");
  cardTopDisplay.className = "card-top-display";

  const cardIcon = document.createElement("img");
  cardIcon.src = "icons/cloud-solid.svg";
  cardIcon.className = "card-icon";

  const cardTemp = document.createElement("p");
  cardTemp.className = "card-temp";
  cardTemp.innerText = temp;

  cardTopDisplay.append(cardIcon, cardTemp);
  cardTop.append(cardTitle, cardTopDisplay);
  card.append(cardTop, cardBody);
  weatherContainer.append(card);
};

const isCity = (input) => {
  return /^[\.a-zA-Z, ]*$/.test(input);
};
