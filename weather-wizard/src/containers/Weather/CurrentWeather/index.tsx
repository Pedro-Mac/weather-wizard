import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { weatherInfoType } from "../types";
import { modifyDate } from "./helpers";

import pinLocation from "../../../images/svg/pin.svg";
import cloudsImg from "../../../images/svg/clouds.svg";

import "./style.scss";

const CurrentWeather: React.FC = () => {
  const { name, sys, weather, main } = useSelector(
    (state: weatherInfoType) => state.selectedLocation.currentWeather,
  );
  console.log(weather);

  useEffect(() => {
    console.log("redux state", weather);
  });

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
      {weather && (
        <article className="container-weather-main">
          <section className="containter-weather-date">
            <div className="weather-location">
              <img src={pinLocation} alt="pin" />
              <h2 className="location-subtle">
                {name}, {sys.country}
              </h2>
            </div>
            <p className="date">{"date"}</p>
          </section>
          <section className="containter-weather-info">
            <div className="weather-current">
              <img
                className="weather-icon"
                src={getWeatherIcon(weather[0].main)}
                alt="weather"
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
        </article>
      )}
    </>
  );
};

export default CurrentWeather;
