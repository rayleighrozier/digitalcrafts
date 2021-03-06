//grab
const input = document.querySelector("input");
const button = document.querySelector("button");
const weatherContainer = document.querySelector(".weather-container");

//functions
const checkTime = (time, sunrise, sunset) => {
  if (time < sunrise || time >= sunset) {
    return "night";
  } else {
    return "day";
  }
};
const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};
const isCity = (input) => {
  return /^[\.a-zA-Z, ]*$/.test(input);
};

const getURL = () => {
  return parseInt(input.value)
    ? `http://api.openweathermap.org/data/2.5/weather?id=524901&appid=05407dc4254bea406be637af43796a6a&units=imperial&zip=${input.value}`
    : `http://api.openweathermap.org/data/2.5/weather?id=524901&appid=05407dc4254bea406be637af43796a6a&units=imperial&q=${input.value}`;
};

const searchWeather = async () => {
  //grab
  const url = getURL();
  const getWeather = await fetch(url);
  const weatherJson = await getWeather.json();
  const title = weatherJson.name;
  const weatherType = weatherJson.weather[0].main;
  const temp = `${Math.round(weatherJson.main.temp)}°`;
  const feelsLike = `${Math.round(weatherJson.main.feels_like)}°`;
  const high = `${Math.round(weatherJson.main.temp_max)}°`;
  const low = `${Math.round(weatherJson.main.temp_min)}°`;
  const time = weatherJson.dt;
  const sunrise = weatherJson.sys.sunrise;
  const sunset = weatherJson.sys.sunset;
  const checkedTime = checkTime(time, sunrise, sunset);
  const conditions = titleCase(weatherJson.weather[0].description);
  const lat = weatherJson.coord.lat;
  const lon = weatherJson.coord.lon;
  const forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current&units=imperial&appid=05407dc4254bea406be637af43796a6a`;
  const getForecast = await fetch(forecastURL);
  const forecastJson = await getForecast.json();
  let forecastArray = [];
  for (forecast of forecastJson.daily) {
    let obj = {};
    obj["low"] = `${Math.round(forecast.temp.min)}°`;
    obj["high"] = `${Math.round(forecast.temp.max)}°`;
    obj["weatherType"] = forecast.weather[0].main;
    obj["conditions"] = titleCase(forecast.weather[0].description);
    forecastArray.push(obj);
  }
  forecastArray.pop();

  //make
  const card = document.createElement("div");
  card.classList = "card grow";

  const cardTop = document.createElement("div");
  if (checkedTime === "night") {
    cardTop.classList = "card-top dark-blue-bg";
  } else if (checkedTime === "day" && weatherType === "Clear") {
    cardTop.classList = "card-top yellow-bg";
  } else {
    cardTop.classList = "card-top light-blue-bg";
  }

  const cardTitle = document.createElement("p");
  cardTitle.className = "card-title";
  cardTitle.innerText = title;

  const cardTopDisplay = document.createElement("div");
  cardTopDisplay.className = "card-top-display";

  const cardIcon = document.createElement("img");
  cardIcon.className = "card-icon";
  if (weatherType != "Clear") {
    cardIcon.src = `icons/${weatherType}.svg`;
  } else {
    if (checkedTime === "day") {
      cardIcon.src = `icons/Day.svg`;
    } else {
      cardIcon.src = `icons/Night.svg`;
    }
  }

  const cardTemp = document.createElement("p");
  cardTemp.className = "card-temp";
  cardTemp.innerText = temp;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body-display";
  const cardConditions = document.createElement("p");
  cardConditions.className = "card-body";
  cardConditions.innerText = conditions;
  const cardFeelsLike = document.createElement("p");
  cardFeelsLike.className = "card-body";
  cardFeelsLike.innerText = `Feels Like ${feelsLike}`;
  const cardHighLow = document.createElement("p");
  cardHighLow.className = "card-body";
  cardHighLow.innerText = `High: ${high} Low: ${low}`;
  const cardButton = document.createElement("button");
  cardButton.className = "card-button";
  cardButton.innerText = "7-Day Forecast";
  cardButton.addEventListener("click", () => {
    if (checkedTime === "night") {
      forecastCard.classList = "forecast-card dark-blue-bg";
    } else if (checkedTime === "day" && weatherType === "Clear") {
      forecastCard.classList = "forecast-card yellow-bg";
    } else {
      forecastCard.classList = "forecast-card light-blue-bg";
    }
    cardTop.classList = "card-top-hide";
    cardBody.classList = "card-body-hide";
  });

  //append
  cardTopDisplay.append(cardIcon, cardTemp);
  cardTop.append(cardTitle, cardTopDisplay);
  cardBody.append(cardConditions, cardFeelsLike, cardHighLow, cardButton);
  card.append(cardTop, cardBody);
  weatherContainer.append(card);
  //make forecast card
  const forecastCard = document.createElement("div");
  forecastCard.className = "forecast-card-hide";
  const forecastTitle = document.createElement("p");
  forecastTitle.className = "forecast-card-title";
  forecastTitle.innerText = title;
  forecastButton = document.createElement("button");
  forecastButton.className = "forecast-card-button";
  forecastButton.innerText = "7-Day Forecast";
  forecastCard.append(forecastTitle, forecastButton);
  forecastButton.addEventListener("click", () => {
    forecastCard.classList = "forecast-card-hide";
    if (checkedTime === "night") {
      cardTop.classList = "card-top dark-blue-bg";
    } else if (checkedTime === "day" && weatherType === "Clear") {
      cardTop.classList = "card-top yellow-bg";
    } else {
      cardTop.classList = "card-top light-blue-bg";
    }
    cardBody.classList = "card-body-display";
  });

  for (obj of forecastArray) {
    const forecastDay = document.createElement("div");
    forecastDay.className = "forecast-day";
    const forecastIcon = document.createElement("img");
    forecastIcon.className = "forecast-icon";
    if (obj.weatherType != "Clear") {
      forecastIcon.src = `icons/${obj.weatherType}.svg`;
    } else {
      forecastIcon.src = `icons/Day.svg`;
    }
    const forecastConditions = document.createElement("p");
    forecastConditions.className = "forecast-element";
    forecastConditions.innerText = obj.conditions;

    const forecastHighLow = document.createElement("p");
    forecastHighLow.className = "forecast-element";
    forecastHighLow.innerText = `${obj.high}/${obj.low}`;

    forecastDay.append(forecastIcon, forecastConditions, forecastHighLow);
    forecastCard.append(forecastDay);
  }
  forecastCard.lastChild.classList = "forecast-day-end";
  card.append(forecastCard);
};

//button event
button.addEventListener("click", () => {
  searchWeather();
  input.value = "";
});
