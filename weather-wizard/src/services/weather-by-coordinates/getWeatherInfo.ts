import axios from "axios";

const getCurrentWeatherByCoordinates = (lat: number, lon: number) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    )
    .then((data) => data);
};

export const getForecastWeatherByCoordinates = (lat: number, lon: number) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    )
    .then((data) => data);
};

export const getWeatherInfoByCoordinates = async (lat: number, lon: number) => {
  const currentWeather = await getCurrentWeatherByCoordinates(lat, lon);

  const forecastInfo = await getForecastWeatherByCoordinates(lat, lon);

  return { current: currentWeather.data, forecast: forecastInfo.data.daily };
};
