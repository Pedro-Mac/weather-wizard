import React from "react";
import { useSelector } from "react-redux";

import WeatherLocation from "./WeatherLocation";

import { weatherInfoType } from "../types";

import { getWeatherIcon } from "./helpers/getWeatherIcon";

import "./style.scss";

const CurrentWeather: React.FC = () => {
  const weatherStateInfo = useSelector(
    (state: weatherInfoType) => state.selectedLocation.currentWeather,
  );

  return (
    <>
      {(weatherStateInfo && weatherStateInfo.name && (
        <article className="container-weather-main">
          <WeatherLocation weatherStateInfo={weatherStateInfo} />
          <section className="containter-weather-info">
            <div className="weather-current">
              <img
                className="weather-icon"
                src={getWeatherIcon(weatherStateInfo.weather[0].main)}
                alt={weatherStateInfo.weather[0].main}
              />
              <h1 className="degrees-highlight">
                {Math.round(weatherStateInfo.main.temp)}°
              </h1>
            </div>
            <ul className="weather-specs-list">
              <li className="weather-specs-item">
                {weatherStateInfo.weather[0].main}
              </li>
              <li className="weather-specs-item">
                {Math.round(weatherStateInfo.main.temp_min)}° /{" "}
                {Math.round(weatherStateInfo.main.temp_max)}°
              </li>
              <li className="weather-specs-item">
                Feeling {Math.round(weatherStateInfo.main.feels_like)}°
              </li>
            </ul>
          </section>
        </article>
      )) || <article className="container-weather-main"></article>}
    </>
  );
};

export default CurrentWeather;
