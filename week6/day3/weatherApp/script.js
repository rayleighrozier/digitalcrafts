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
  console.log(weatherJson);
  const title = weatherJson.name;
  const weatherType = weatherJson.weather[0].main;
  console.log(weatherType);
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
  console.log(forecastJson);
  let forecastArray = [];
  for (forecast of forecastJson.daily) {
    let obj = {};
    obj["low"] = forecast.temp.min;
    obj["high"] = forecast.temp.max;
    obj["weatherType"] = forecast.weather[0].main;
    obj["conditions"] = titleCase(forecast.weather[0].description);
    forecastArray.push(obj);
  }
  forecastArray.pop();
  console.log(forecastArray);

  //make
  const card = document.createElement("div");
  card.className = "card";

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
  cardBody.ClassName = "card-body-display";
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
    console.log("click");
  });

  //make forecast card
  const forecastCard = document.createElement("div");
  forecastCard.class = "forecast-card";
  for (obj of forecastArray) {
    const forecastDay = document.createElement("div");
    forecastDay.className = "forecast-day";
    const forecastIcon = document.createElement("img");
    forecastIcon.className = "forecast-icon";
    if (forecast.weatherType != "Clear") {
      forecastIcon.src = `icons/${obj.weatherType}.svg`;
    } else {
      if (checkedTime === "day") {
        forecastIcon.src = `icons/Day.svg`;
      } else {
        forecastIcon.src = `icons/Night.svg`;
      }
    }
    const forecastConditions = document.createElement("p");
    forecastConditions.className = "forecast-element";
    forecastConditions.innerText = obj.conditions;

    const forecastHighLow = document.createElement("p");
    forecastHighLow.className = "forecast-element";
    forecastHighLow.innerText = `H: ${obj.high} L:${obj.low}`;

    forecastDay.append(forecastIcon, forecastConditions, forecastHighLow);
    forecastCard.append(forecastDay);
  }
  ///FIX THIS LATER
  weatherContainer.append(forecastCard);

  //append
  cardTopDisplay.append(cardIcon, cardTemp);
  cardTop.append(cardTitle, cardTopDisplay);
  cardBody.append(cardConditions, cardFeelsLike, cardHighLow, cardButton);
  card.append(cardTop, cardBody);
  weatherContainer.append(card);
};

//button event
button.addEventListener("click", () => {
  searchWeather();
  input.value = "";
});
