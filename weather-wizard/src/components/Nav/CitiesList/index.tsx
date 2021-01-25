import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { citiesListType } from "./types";

import { getCurrentWeatherByCity } from "../../../services/weather-by-city/getWeatherInfo";
import { getForecastWeatherByCoordinates } from "../../../services/weather-by-coordinates/getWeatherInfo";

import "./style.scss";
import { SET_WEATHER_INFO } from "../../../redux/location/actions";

interface citiesListProps {
  isActive: boolean;
}

const CitiesList: React.FC<citiesListProps> = ({ isActive }) => {
  const dispatch = useDispatch();
  const cities = useSelector((state: citiesListType) => state.locationsList);

  return (
    <section className={`nav-list-container ${isActive && "is-active"} `}>
      <ul className="nav-list-group">
        {cities.map((item, index) => {
          return (
            <li
              key={index}
              className="nav-list-item"
              // onClick={}
            >
              {item.city}, {item.country}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CitiesList;
