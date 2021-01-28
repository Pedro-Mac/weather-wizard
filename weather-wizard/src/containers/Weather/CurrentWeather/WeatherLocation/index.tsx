import React from "react";

import { weatherLocationProps } from "./types";

import { modifyDate } from "../helpers/getDate";

import pinLocation from "../../../../images/svg/pin.svg";

const WeatherLocation: React.FC<weatherLocationProps> = ({
  weatherStateInfo,
}) => {
  return (
    <section className="containter-weather-date">
      <div className="weather-location">
        <img src={pinLocation} alt="pin" />
        <h2 className="location-subtle">
          {weatherStateInfo.name}, {weatherStateInfo.sys.country}
        </h2>
      </div>
      <p className="date">{modifyDate(weatherStateInfo.dt * 1000)}</p>
    </section>
  );
};

export default WeatherLocation;
