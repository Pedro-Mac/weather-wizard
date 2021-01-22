import React from "react";

import { WeatherForecastRowProps } from "./types";

import highHumidityImg from "../../images/svg/full-drop.svg";
import midHumidityImg from "../../images/svg/half-drop.svg";
import lowHumidityImg from "../../images/svg/empty-drop.svg";

import "./style.scss";

const WeatherForecastRow: React.FC<WeatherForecastRowProps> = ({
  humidity,
  temperature,
  weatherStatus,
}) => {
  const { min, max } = temperature;
  const { main } = weatherStatus;

  const humidityIcon = (percentage: number) => {
    if (percentage > 90) {
      return highHumidityImg;
    } else if (percentage > 33) {
      return midHumidityImg;
    } else {
      return lowHumidityImg;
    }
  };
  return (
    <section className="forecast-row-container">
      <h4 className="forecast-weekday-highlight">weekday</h4>
      <div className="forecast-humidity-container">
        <img
          src={humidityIcon(humidity)}
          alt="humidity"
          className="humidity-img"
        />
        <p>{humidity}%</p>
      </div>
      <p className="forecast-weather">{main}</p>
      <p className="forecast-temperature">
        {Math.round(min)}° / {Math.round(max)}°
      </p>
    </section>
  );
};

export default WeatherForecastRow;
