import React from "react";
import { useSelector } from "react-redux";

import { weatherInfoType } from "../types";

import WeatherForecastRow from "../../../components/WeatherForecastRow";

import "./style.scss";

const ForecastWeather = () => {
  const weatherList = useSelector(
    (state: weatherInfoType) => state.selectedLocation.forecastWeather,
  );

  return (
    <>
      {(weatherList && (
        <article className="forecast-weather-container">
          {weatherList
            .filter((item, index) => index !== 0)
            .map((item, index) => {
              return (
                <WeatherForecastRow
                  humidity={item.humidity}
                  temperature={item.temp}
                  weatherStatus={item.weather}
                  date={item.dt}
                  key={index}
                />
              );
            })}
        </article>
      )) || <article className="forecast-weather-container"></article>}
    </>
  );
};

export default ForecastWeather;
