import React from "react";
import { useDispatch } from "react-redux";

import deleteImg from "../../../../images/svg/delete.svg";

import "./style.scss";

import { deleteIconProps } from "./types";

import { SET_WEATHER_INFO } from "../../../../redux/location/actions";
import { REMOVE_LOCATION } from "../../../../redux/locationsList/actions";

const DeleteIcon: React.FC<deleteIconProps> = ({ city, country }) => {
  const dispatch = useDispatch();
  const deleteLocation = (city: string, country: string) => {
    dispatch({ type: REMOVE_LOCATION, payload: { city, country } });
  };

  return (
    <img
      src={deleteImg}
      alt={`delete ${city}`}
      className="delete-icon"
      onClick={() => deleteLocation(city, country)}
    />
  );
};

export default DeleteIcon;
