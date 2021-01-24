import axios from "axios";

export const getCurrentWeatherByCity = (cityName: string) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
  );

export const getForecastWeatherByCity = (lat: number, lon: number) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}
    `,
  );
