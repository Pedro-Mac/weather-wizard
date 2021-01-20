import axios from "axios";

export const getWeatherInfo = (lat: number, lon: number) => {
  return axios
    .get(
      // `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}
      // `,
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    )
    .then((data) => data);
};
