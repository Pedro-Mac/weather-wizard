import React from "react";
import { useDispatch, useSelector, batch } from "react-redux";

import "./style.scss";
//types
import { deleteIconProps } from "./types";
import { stateType } from "./types";
//redux actions
import { SET_WEATHER_INFO } from "../../../../redux/selectedLocation/actions";
import { REMOVE_LOCATION } from "../../../../redux/locationsList/actions";
//services
import { getWeatherInfoByCoordinates } from "../../../../services/weather-by-coordinates/getWeatherInfo";
//images
import deleteImg from "../../../../images/svg/delete.svg";

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

      batch(() => {
        dispatch({ type: SET_WEATHER_INFO, payload: weatherInfo });
        dispatch({ type: REMOVE_LOCATION, payload: { city, country } });
      });
    } else {
      dispatch({ type: REMOVE_LOCATION, payload: { city, country } });
    }
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
