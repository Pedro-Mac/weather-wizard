import axios from "axios";

import {
  filterCurrentWeatherInfo,
  filterForecastWeatherInfo,
} from "./filterWeatherInfo";

export const getCurrentWeatherInfo = (lat: number, lon: number) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    )
    .then((data) => data);
};

export const getForecastWeatherInfo = (lat: number, lon: number) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    )
    .then((data) => data);
};

export const getWeatherInfo = async (lat: number, lon: number) => {
  const currentWeather = await getCurrentWeatherInfo(lat, lon);
  const filteredCurrentWeather = filterCurrentWeatherInfo(currentWeather.data);

  const forecastInfo = await getForecastWeatherInfo(lat, lon);
  // console.log(forecastInfo.data);
  const filteredForecastWeather = filterForecastWeatherInfo(forecastInfo.data);

  return { current: filteredCurrentWeather, forecast: filteredForecastWeather };
};
