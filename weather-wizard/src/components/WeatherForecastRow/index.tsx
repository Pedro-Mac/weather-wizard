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
  const humidityIcon = (percentage: number) => {
    if (percentage > 66) {
      return highHumidityImg;
    } else if (percentage > 33) {
      return midHumidityImg;
    } else {
      return lowHumidityImg;
    }
  };

  console.log("weather status", weatherStatus);
  return (
    <section className="forecast-row-container">
      <div className="forecast-weekday-highlight">
        <h4>weekday</h4>
      </div>
      <div className="forecast-humidity-container">
        <img
          src={humidityIcon(humidity)}
          alt="humidity"
          className="humidity-img"
        />
        <p>{humidity}%</p>
      </div>
      <div className="forecast-weather">
        <p>{weatherStatus.main}</p>
      </div>
      <div className="forecast-temperature">
        <p>
          {Math.round(temperature.min)}° / {Math.round(temperature.max)}°
        </p>
      </div>
    </section>
  );
};

export default WeatherForecastRow;
