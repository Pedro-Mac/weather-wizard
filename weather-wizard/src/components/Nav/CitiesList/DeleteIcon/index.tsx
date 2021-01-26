import React from "react";

import deleteImg from "../../../../images/svg/delete.svg";

import "./style.scss";

import { deleteIconProps } from "./types";

const DeleteIcon: React.FC<deleteIconProps> = ({ city, country }) => {
  const deleteLocation = (city: string, country: string) => {
    console.log("delete");
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
