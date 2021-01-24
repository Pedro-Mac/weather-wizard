import React from "react";

import { WeatherForecastRowProps } from "./types";

import { getHumidityIcon } from "./helpers/humidity";
import { getWeekDay } from "./helpers/weekday";

import "./style.scss";

const WeatherForecastRow: React.FC<WeatherForecastRowProps> = ({
  humidity,
  temperature,
  weatherStatus,
  date,
}) => {
  const weekday = getWeekDay(date);
  const humidityIcon = getHumidityIcon(humidity);

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
        <p>{weatherStatus[0].main}</p>
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
