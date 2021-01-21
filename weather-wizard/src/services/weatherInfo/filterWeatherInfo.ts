import { currentWeatherRespData, forecastWeatherRespData } from "./types";

export const filterCurrentWeatherInfo = (response: currentWeatherRespData) => {
  const date: number = response.dt;
  const weather: string = response.weather[0].main;
  const temperature: object = {
    current: response.main.temp,
    max: response.main.temp_max,
    min: response.main.temp_min,
    feels: response.main.feels_like,
  };
  const locationName: object = {
    city: response.name,
    country: response.sys.country,
  };

  return { date, weather, temperature, locationName };
};

export const filterForecastWeatherInfo = (
  response: forecastWeatherRespData,
) => {
  const dailyFiltered = response.daily.map((value) => {
    const { humidity, temp, weather } = value;
    const { min, max } = temp;
    const [weatherStatus] = weather;
    return { humidity, temperature: { min, max }, weatherStatus };
  });
  return dailyFiltered;
};
