import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_QUERY, CHANGE_WEATHER } from "../action-types";

export default function Weather() {
  const dispatch = useDispatch();
  const q = useSelector((state) => state.weather.q);
  const city = useSelector((state) => state.weather.city);
  const temperature = useSelector((state) => state.weather.temperature);

  const updateQuery = (e) => {
    dispatch({
      type: CHANGE_QUERY,
      payload: e.target.value,
    });
  };

  const fetchWeather = async (q) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${key}&units=imperial`;
    let data = await fetch(url);
    let json = await data.json();
    dispatch({
      type: CHANGE_WEATHER,
      payload: {
        city: json.name,
        temperature: Math.floor(json.main.temp) + "°",
      },
    });
  };
  return (
    <div>
      <h1>Weather</h1>
      <h2>{temperature}</h2>
      <h2>{city}</h2>
      <input
        onChange={updateQuery}
        placeholder="Search for a city here"
        type="text"
        value={q}
      />
      <button onClick={() => fetchWeather(q)}>Search</button>
    </div>
  );
}
