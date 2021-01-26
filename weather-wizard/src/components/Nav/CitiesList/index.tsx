import React from "react";
import { useSelector, useDispatch } from "react-redux";

import DeleteIcon from "./DeleteIcon";

import { getWeatherInfoByCoordinates } from "../../../services/weather-by-coordinates/getWeatherInfo";

import { citiesListType, citiesListProps } from "./types";

import { SET_WEATHER_INFO } from "../../../redux/location/actions";

import "./style.scss";

const CitiesList: React.FC<citiesListProps> = ({ isActive, closeNav }) => {
  const dispatch = useDispatch();
  const cities = useSelector((state: citiesListType) => state.locationsList);

  const setWeatherLocation = async (lat: number, lon: number) => {
    const weatherInfo = await getWeatherInfoByCoordinates(lat, lon);

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
            <li key={index} className="nav-list-item">
              <p
                onClick={() => {
                  setWeatherLocation(coord.lat, coord.lon);
                  closeNav();
                }}
              >
                {item.city}, {item.country}{" "}
              </p>
              {index !== 0 && (
                <DeleteIcon city={item.city} country={item.country} />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CitiesList;
