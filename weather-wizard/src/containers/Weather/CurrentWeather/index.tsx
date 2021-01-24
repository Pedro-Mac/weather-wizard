import React from "react";
import { useSelector } from "react-redux";

import { weatherInfoType } from "../types";
import { modifyDate } from "./helpers";

import pinLocation from "../../../images/svg/pin.svg";
import cloudsImg from "../../../images/svg/clouds.svg";

import "./style.scss";

const CurrentWeather: React.FC = () => {
  const weatherStateInfo = useSelector(
    (state: weatherInfoType) => state.selectedLocation.currentWeather,
  );

  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case "Clouds":
        return cloudsImg;
      default:
        return;
    }
  };

  return (
    <>
      {weatherStateInfo && (
        <article className="container-weather-main">
          <section className="containter-weather-date">
            <div className="weather-location">
              <img src={pinLocation} alt="pin" />
              <h2 className="location-subtle">
                {weatherStateInfo.name}, {weatherStateInfo.sys.country}
              </h2>
            </div>
            <p className="date">{modifyDate(weatherStateInfo.dt * 1000)}</p>
          </section>
          <section className="containter-weather-info">
            <div className="weather-current">
              <img
                className="weather-icon"
                src={getWeatherIcon(weatherStateInfo.weather[0].main)}
                alt="weather"
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
      )}
    </>
  );
};

export default CurrentWeather;
