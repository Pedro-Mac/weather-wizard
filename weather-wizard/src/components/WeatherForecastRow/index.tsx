import React from "react";

import { WeatherForecastRowProps } from "./types";

import { getHumidityIcon } from "./helpers/humidity";

import "./style.scss";

const WeatherForecastRow: React.FC<WeatherForecastRowProps> = ({
  humidity,
  temperature,
  weatherStatus,
  date,
}) => {
  const weekDaysList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateString = new Date(date * 1000);
  const weekDay = weekDaysList[dateString.getDay()];

  return (
    <section className="forecast-row-container">
      <div className="forecast-weekday-highlight">
        <h4>{weekDay}</h4>
      </div>
      <div className="forecast-humidity-container">
        <img
          src={getHumidityIcon(humidity)}
          alt="humidity"
          className="humidity-img"
        />
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
