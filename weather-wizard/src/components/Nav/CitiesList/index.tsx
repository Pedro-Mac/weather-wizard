import React from "react";
import { useSelector } from "react-redux";

import ListItem from "./ListItem";

//types
import { citiesListType, citiesListProps } from "./types";

//styles
import "./style.scss";

const CitiesList: React.FC<citiesListProps> = ({ isActive, closeNav }) => {
  const cities = useSelector((state: citiesListType) => {
    const listItems = {
      locationsList: state.locationsList,
      defaultLocation: state.defaultLocation,
    };
    return listItems;
  });

  const { defaultLocation, locationsList } = cities;

  return (
    <section className={`nav-list-container ${isActive && "is-active"} `}>
      {defaultLocation.coord && (
        <ul className="nav-list-group">
          <ListItem
            city={defaultLocation.city}
            country={defaultLocation.country}
            coord={{
              lat: defaultLocation.coord.lat,
              lon: defaultLocation.coord.lon,
            }}
            isDefault={true}
            closeNav={closeNav}
          />
          {locationsList.map((item, index) => {
            const { coord } = item;
            return (
              <ListItem
                city={item.city}
                country={item.country}
                coord={{
                  lat: coord.lat,
                  lon: coord.lon,
                }}
                isDefault={false}
                closeNav={closeNav}
                key={index}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default CitiesList;
