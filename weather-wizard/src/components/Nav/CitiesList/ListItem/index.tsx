import React from "react";
import { useDispatch } from "react-redux";

import DeleteIcon from "../DeleteIcon";

import { SET_WEATHER_INFO } from "../../../../redux/selectedLocation/actions";

import { getWeatherInfoByCoordinates } from "../../../../services/weather-by-coordinates/getWeatherInfo";

interface listItemProps {
  city: string;
  country: string;
  coord: { lat: number; lon: number };
  isDefault: boolean;
  closeNav: () => void;
}

const ListItem: React.FC<listItemProps> = ({
  city,
  country,
  coord,
  isDefault,
  closeNav,
}) => {
  const dispatch = useDispatch();

  const setWeatherLocation = async (lat: number, lon: number) => {
    const weatherInfo = await getWeatherInfoByCoordinates(lat, lon);
    dispatch({
      type: SET_WEATHER_INFO,
      payload: { current: weatherInfo.current, forecast: weatherInfo.forecast },
    });
  };

  return (
    <li className="nav-list-item">
      <p
        onClick={() => {
          setWeatherLocation(coord.lat, coord.lon);
          closeNav();
        }}
      >
        {city}, {country}{" "}
      </p>
      {!isDefault && <DeleteIcon city={city} country={country} />}
    </li>
  );
};

export default ListItem;
