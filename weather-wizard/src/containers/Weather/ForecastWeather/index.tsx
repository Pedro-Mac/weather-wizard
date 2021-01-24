import React from "react";
import { useSelector } from "react-redux";

import { weatherInfoType } from "../types";

import WeatherForecastRow from "../../../components/WeatherForecastRow";

import "./style.scss";

const ForecastWeather = () => {
  const weatherList = useSelector(
    (state: weatherInfoType) => state.selectedLocation.forecastWeather,
  );

  console.log("this is the weather list", weatherList);
  return (
    <>
      {weatherList && (
        <article className="forecast-weather-container">
          {weatherList.map((item, index) => (
            <WeatherForecastRow
              humidity={item.humidity}
              temperature={item.temp}
              weatherStatus={item.weather}
              key={index}
            />
          ))}
        </article>
      )}
    </>
  );
};

export default ForecastWeather;
