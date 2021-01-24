import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { SET_WEATHER_INFO } from "../../redux/location/actions";

import {
  getCurrentWeatherByCity,
  getForecastWeatherByCity,
} from "../../services/weather-by-city/getWeatherInfo";

import ButtonIcon from "../../components/ButtonIcon";

import searchIcon from "../../images/svg/search.svg";
import arrowIcon from "../../images/svg/arrow.svg";

import "./style.scss";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState<string>("");

  const handleUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserInput(value);
  };

  const handleFormSubmission = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentWeather = await (await getCurrentWeatherByCity(userInput))
      .data;
    const { coord } = currentWeather;
    const forecastWeather = await getForecastWeatherByCity(
      coord.lat,
      coord.lon,
    );
    dispatch({
      type: SET_WEATHER_INFO,
      payload: {
        current: currentWeather,
        forecast: forecastWeather.data.daily,
      },
    });
  };

  return (
    <form className="searchbar-form" onSubmit={handleFormSubmission}>
      <img className="search-icon" src={searchIcon} alt="lupe" />
      <input
        className="searchbar-input"
        type="text"
        value={userInput}
        onChange={handleUserInput}
        placeholder="Search another city"
      />
      <ButtonIcon icon={arrowIcon} alt="arrow" />
    </form>
  );
};

export default SearchBar;
