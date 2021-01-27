import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, batch } from "react-redux";

// redux actions
import { SET_WEATHER_INFO } from "../../redux/selectedLocation/actions";
import { ADD_LOCATION } from "../../redux/locationsList/actions";
// http req handlers
import {
  getCurrentWeatherByCity,
  getForecastWeatherByCity,
} from "../../services/weather-by-city/getWeatherInfo";
//components
import ButtonIcon from "../../components/ButtonIcon";
import Error from "./Error";
//images
import searchIcon from "../../images/svg/search.svg";
import arrowIcon from "../../images/svg/arrow.svg";
//styles
import "./style.scss";
//helpers
import { checkRepeatedLocation } from "./helpers/checkLocation";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState<string>("");
  const [reqError, setReqError] = useState<string>("");

  const handleUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserInput(value);
  };

  const handleFormSubmission = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userInput) {
      setReqError("Please enter a city");
    } else {
      try {
        if (reqError) setReqError("");
        const currentWeather = await getCurrentWeatherByCity(userInput);
        const { coord, name, sys } = currentWeather.data;

        const repeats = checkRepeatedLocation({
          city: name,
          country: sys.country,
        });
        if (repeats) {
          setReqError("This locations is already in your list");
          return;
        }
        const forecastWeather = await getForecastWeatherByCity(
          coord.lat,
          coord.lon,
        );

        batch(() => {
          dispatch({
            type: SET_WEATHER_INFO,
            payload: {
              current: currentWeather.data,
              forecast: forecastWeather.data.daily,
            },
          });

          dispatch({
            type: ADD_LOCATION,
            payload: { coord, city: name, country: sys.country },
          });
        });

        setUserInput("");
      } catch (error) {
        setReqError("Please enter a valid city");
      }
    }
  };

  return (
    <>
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
      {reqError && <Error reqError={reqError} />}
    </>
  );
};

export default SearchBar;
