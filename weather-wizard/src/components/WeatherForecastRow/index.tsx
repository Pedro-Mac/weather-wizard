import React from "react";

import { WeatherForecastRowProps } from "./types";

import { getHumidityIcon } from "./helpers/humidity";
import { getWeekDay } from "./helpers/weekday";
import { getWeatherIcon } from "../../containers/Weather/CurrentWeather/helpers/getWeatherIcon";

import "./style.scss";

const WeatherForecastRow: React.FC<WeatherForecastRowProps> = ({
  humidity,
  temperature,
  weatherStatus,
  date,
}) => {
  const { main } = weatherStatus[0];

  const weekday = getWeekDay(date);
  const humidityIcon = getHumidityIcon(humidity);
  const weatherIcon = getWeatherIcon(main);

  return (
    <section className="forecast-row-container">
      <div className="forecast-weekday-highlight">
        <h4>{weekday}</h4>
      </div>
      <div className="forecast-humidity-container">
        <img src={humidityIcon} alt="humidity" className="humidity-img" />
        <p>{humidity}%</p>
      </div>
      <div className="forecast-weather">
        <img src={weatherIcon} alt={main} className="forecast-weather-icon" />
      </div>
      <div className="forecast-temperature">
        <p>{Math.round(temperature.min)}°</p>
        <span>/</span>
        <p>{Math.round(temperature.max)}°</p>
      </div>
    </section>
  );
};

export default WeatherForecastRow;
