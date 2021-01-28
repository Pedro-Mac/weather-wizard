import React from "react";
import { getWeatherIcon } from "../helpers/getWeatherIcon";
import "./style.scss";
interface weatherInfoProps {
  weatherStateInfo: {
    weather: { main: string }[];
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      feels_like: number;
    };
  };
}

const WeatherInfo: React.FC<weatherInfoProps> = ({ weatherStateInfo }) => {
  const { weather, main } = weatherStateInfo;
  return (
    <section className="containter-weather-info">
      <div className="weather-current">
        <img
          className="weather-icon"
          src={getWeatherIcon(weather[0].main)}
          alt={weather[0].main}
        />
        <h1 className="degrees-highlight">{Math.round(main.temp)}°</h1>
      </div>
      <ul className="weather-specs-list">
        <li className="weather-specs-item">{weather[0].main}</li>
        <li className="weather-specs-item">
          {Math.round(main.temp_min)}° / {Math.round(main.temp_max)}°
        </li>
        <li className="weather-specs-item">
          Feeling {Math.round(main.feels_like)}°
        </li>
      </ul>
    </section>
  );
};

export default WeatherInfo;
