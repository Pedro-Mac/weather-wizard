import React from "react";
import { useSelector } from "react-redux";

import { weatherInfoType } from "./types";
import { modifyDate } from "./helpers";

import "./style.scss";

const CurrentWeather: React.FC = () => {
  const weatherInfo = useSelector(
    (state: weatherInfoType) => state.selectedLocation.currentWeather,
  );

  const { city, country } = weatherInfo.locationName;
  const { current, min, max, feels } = weatherInfo.temperature;
  const modifiedDate = modifyDate();
  return (
    <>
      {weatherInfo.date && (
        <article className="container-weather-main">
          <section className="containter-weather-date">
            <div className="weather-location">
              <img src="https://picsum.photos/30/30" alt="pin" />
              <h2 className="location-subtle">
                {city}, {country}
              </h2>
            </div>
            <p className="date">{modifiedDate}</p>
          </section>
          <section className="containter-weather-info">
            <div className="weather-current">
              <img src="https://picsum.photos/30/30" alt="weather" />
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
