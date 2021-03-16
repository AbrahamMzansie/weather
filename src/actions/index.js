import axios from "axios";
const API_KEY = "f975ad667265c09aaeb11569de530f7d";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},za`;
  const request = axios.get(url);
  return { type: "FETCH_WEATHER", payload: request };
};
