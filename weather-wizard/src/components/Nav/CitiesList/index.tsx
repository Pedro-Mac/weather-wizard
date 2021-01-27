import React from "react";
import { useSelector, useDispatch } from "react-redux";

//images
import DeleteIcon from "./DeleteIcon";
//http request handlers
import { getWeatherInfoByCoordinates } from "../../../services/weather-by-coordinates/getWeatherInfo";
//types
import { citiesListType, citiesListProps } from "./types";
//actions
import { SET_WEATHER_INFO } from "../../../redux/selectedLocation/actions";
//styles
import "./style.scss";

const CitiesList: React.FC<citiesListProps> = ({ isActive, closeNav }) => {
  const dispatch = useDispatch();

  const cities = useSelector((state: citiesListType) => {
    const listItems = {
      locationsList: state.locationsList,
      defaultLocation: state.defaultLocation,
    };
    return listItems;
  });

  const { defaultLocation, locationsList } = cities;

  const setWeatherLocation = async (lat: number, lon: number) => {
    const weatherInfo = await getWeatherInfoByCoordinates(lat, lon);

    dispatch({
      type: SET_WEATHER_INFO,
      payload: { current: weatherInfo.current, forecast: weatherInfo.forecast },
    });
  };

  const handleClick = (lat: number, lon: number) => {
    setWeatherLocation(lat, lon);
    closeNav();
  };

  return (
    <section className={`nav-list-container ${isActive && "is-active"} `}>
      <ul className="nav-list-group">
        <li className="nav-list-item">
          <p
            onClick={() => {
              const { coord } = defaultLocation;
              return handleClick(coord.lat, coord.lon);
            }}
          >
            {defaultLocation.city}, {defaultLocation.country}{" "}
          </p>
        </li>
        {locationsList.map((item, index) => {
          const { coord } = item;
          return (
            <li key={index} className="nav-list-item">
              <p
                onClick={() => {
                  handleClick(coord.lat, coord.lon);
                }}
              >
                {item.city}, {item.country}{" "}
              </p>

              <DeleteIcon
                city={item.city}
                country={item.country}
                closeNav={closeNav}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CitiesList;
