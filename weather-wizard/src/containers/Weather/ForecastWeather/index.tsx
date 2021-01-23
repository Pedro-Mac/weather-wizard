import React from "react";
import { useSelector } from "react-redux";

import { weatherInfoType } from "../types";

import WeatherForecastRow from "../../../components/WeatherForecastRow";

import "./style.scss";

const ForecastWeather = () => {
  // const weatherList = useSelector(
  //   (state: weatherInfoType) => state.selectedLocation.forecastWeather,
  // );
  return (
    <>
      {/* {weatherList && (
        <article className="forecast-weather-container">
          {weatherList.map((item, index) => (
            <WeatherForecastRow
              humidity={item.humidity}
              temperature={item.temperature}
              weatherStatus={item.weatherStatus}
              key={index}
            />
          ))}
        </article>
      )} */}
    </>
  );
};

export default ForecastWeather;
