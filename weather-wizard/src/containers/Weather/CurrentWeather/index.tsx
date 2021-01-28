import React from "react";
import { useSelector } from "react-redux";

import WeatherLocation from "./WeatherLocation";
import WeatherInfo from "./WeatherInfo";

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
          <WeatherInfo weatherStateInfo={weatherStateInfo} />
        </article>
      )) || <article className="container-weather-main"></article>}
    </>
  );
};

export default CurrentWeather;
