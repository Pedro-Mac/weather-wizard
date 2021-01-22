import React from "react";
import { useSelector } from "react-redux";

import { weatherInfoType } from "../types";
import { modifyDate } from "./helpers";

import pinLocation from "../../images/svg/pin.svg";
import cloudsImg from "../../images/svg/clouds.svg";

import "./style.scss";

const CurrentWeather: React.FC = () => {
  const weatherInfo = useSelector(
    (state: weatherInfoType) => state.selectedLocation.currentWeather,
  );

  const { city, country } = weatherInfo.locationName;
  const { current, min, max, feels } = weatherInfo.temperature;
  const readableDate = modifyDate();

  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case "Clouds":
        return cloudsImg;
      default:
        return;
    }
  };
  const weatherIcon = getWeatherIcon(weatherInfo.weather);

  return (
    <>
      {weatherInfo.locationName.city && (
        <article className="container-weather-main">
          <section className="containter-weather-date">
            <div className="weather-location">
              <img src={pinLocation} alt="pin" />
              <h2 className="location-subtle">
                {city}, {country}
              </h2>
            </div>
            <p className="date">{readableDate}</p>
          </section>
          <section className="containter-weather-info">
            <div className="weather-current">
              <img className="weather-icon" src={weatherIcon} alt="weather" />
              <h1 className="degrees-highlight">{Math.round(current)}°</h1>
            </div>
            <ul className="weather-specs-list">
              <li className="weather-specs-item">{weatherInfo.weather}</li>
              <li className="weather-specs-item">
                {Math.round(min)}° / {Math.round(max)}°
              </li>
              <li className="weather-specs-item">
                Feeling {Math.round(feels)}°
              </li>
            </ul>
          </section>
        </article>
      )}
    </>
  );
};

export default CurrentWeather;
