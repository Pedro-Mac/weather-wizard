import React from "react";
import { useSelector } from "react-redux";

import { citiesListType } from "./types";

import "./style.scss";

interface citiesListProps {
  isActive: boolean;
}

const CitiesList: React.FC<citiesListProps> = ({ isActive }) => {
  const cities = useSelector((state: citiesListType) => state.locationsList);
  console.log(cities);

  return (
    <section className={`nav-list-container ${isActive && "is-active"} `}>
      <ul className="nav-list">
        {cities.map((item, index) => {
          return (
            <li key={index}>
              {item.city}, {item.country}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CitiesList;
