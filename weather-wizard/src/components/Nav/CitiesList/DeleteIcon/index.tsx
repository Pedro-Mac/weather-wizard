import React from "react";
import { useDispatch, useSelector } from "react-redux";

import deleteImg from "../../../../images/svg/delete.svg";

import "./style.scss";

import { deleteIconProps } from "./types";

import { SET_WEATHER_INFO } from "../../../../redux/location/actions";
import { REMOVE_LOCATION } from "../../../../redux/locationsList/actions";

import { stateType } from "./types";

import { getWeatherInfoByCoordinates } from "../../../../services/weather-by-coordinates/getWeatherInfo";

const DeleteIcon: React.FC<deleteIconProps> = ({ city, country, closeNav }) => {
  const dispatch = useDispatch();

  const { locationsList, selectedLocation } = useSelector(
    (state: stateType) => state,
  );

  const deleteLocation = async (city: string, country: string) => {
    //if the deleted city is the one being displayed at the moment, get weather info for the default/user location and display it
    if (
      city === selectedLocation.currentWeather.name &&
      country === selectedLocation.currentWeather.sys.country
    ) {
      const { lat, lon } = locationsList[0].coord;
      const weatherInfo = await getWeatherInfoByCoordinates(lat, lon);

      dispatch({ type: SET_WEATHER_INFO, payload: weatherInfo });
    }
    dispatch({ type: REMOVE_LOCATION, payload: { city, country } });
  };

  const handleClick = () => {
    deleteLocation(city, country);
    closeNav();
  };

  return (
    <img
      src={deleteImg}
      alt={`delete ${city}`}
      className="delete-icon"
      onClick={handleClick}
    />
  );
};

export default DeleteIcon;
