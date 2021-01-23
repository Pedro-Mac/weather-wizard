import axios from "axios";

import {
  filterCurrentWeatherInfo,
  filterForecastWeatherInfo,
} from "./filterWeatherInfo";

const getCurrentWeatherByCoordinates = (lat: number, lon: number) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    )
    .then((data) => data);
};

const getForecastWeatherByCoordinates = (lat: number, lon: number) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    )
    .then((data) => data);
};

export const getWeatherInfoByCoordinates = async (lat: number, lon: number) => {
  const currentWeather = await getCurrentWeatherByCoordinates(lat, lon);
  const filteredCurrentWeather = filterCurrentWeatherInfo(currentWeather.data);

  const forecastInfo = await getForecastWeatherByCoordinates(lat, lon);
  const filteredForecastWeather = filterForecastWeatherInfo(forecastInfo.data);

  return { current: filteredCurrentWeather, forecast: filteredForecastWeather };
};
