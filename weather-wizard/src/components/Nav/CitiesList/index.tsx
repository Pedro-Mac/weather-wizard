import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { citiesListType } from "./types";

import { getWeatherInfoByCoordinates } from "../../../services/weather-by-coordinates/getWeatherInfo";

import "./style.scss";
import { SET_WEATHER_INFO } from "../../../redux/location/actions";

interface citiesListProps {
  isActive: boolean;
}

const CitiesList: React.FC<citiesListProps> = ({ isActive }) => {
  const dispatch = useDispatch();
  const cities = useSelector((state: citiesListType) => state.locationsList);

  const setWeatherLocation = async (lat: number, lon: number) => {
    const weatherInfo = await getWeatherInfoByCoordinates(lat, lon);
    console.log("this is the info", weatherInfo);

    dispatch({
      type: SET_WEATHER_INFO,
      payload: { current: weatherInfo.current, forecast: weatherInfo.forecast },
    });
  };

  return (
    <section className={`nav-list-container ${isActive && "is-active"} `}>
      <ul className="nav-list-group">
        {cities.map((item, index) => {
          const { coord } = item;
          return (
            <li
              key={index}
              className="nav-list-item"
              onClick={() => setWeatherLocation(coord.lat, coord.lon)}
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
