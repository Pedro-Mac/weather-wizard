import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const CurrentWeather: React.FC = () => {
  return (
    <article className="container-weather-main">
      <section className="containter-weather-date">
        <div className="weather-location">
          <img src="pin" alt="pin" />
          <h2 className="location-subtle">city, country</h2>
        </div>
        <p className="date">Weekday, 0th of Febember</p>
      </section>
      <section className="containter-weather-info">
        <div className="weather-current">
          <img src="weather" alt="weather" />
          <h1 className="degrees-highlight">0°</h1>
        </div>
        <ul className="weather-specs-list">
          <li className="weather-specs-item">Weather</li>
          <li className="weather-specs-item">Min/Max</li>
          <li className="weather-specs-item">Sensation</li>
        </ul>
      </section>
    </article>
  );
};

export default CurrentWeather;
