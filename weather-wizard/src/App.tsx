import React, { useEffect, useCallback } from "react";
import { useDispatch, batch } from "react-redux";

import { getWeatherInfoByCoordinates } from "./services/weather-by-coordinates/getWeatherInfo";

import { SET_WEATHER_INFO } from "./redux/location/actions";
import { UPDATE_DEFAULT_LOCATION } from "./redux/locationsList/actions";

import CurrentWeather from "./containers/Weather/CurrentWeather";
import ForecastWeather from "./containers/Weather/ForecastWeather";
import SearchBar from "./containers/SearchBar";
import Nav from "./components/Nav";

import "./App.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handleSuccessfulUserLocation = useCallback(
    async (location) => {
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;

      const weather = await getWeatherInfoByCoordinates(lat, lon);
      const { coord, name, sys } = weather.current;

      batch(() => {
        dispatch({ type: SET_WEATHER_INFO, payload: weather });

        dispatch({
          type: UPDATE_DEFAULT_LOCATION,
          payload: { coord, city: name, country: sys.country },
        });
      });
    },
    [dispatch],
  );

  const handleUnsuccessfulUserLocation = useCallback(async () => {
    const weather = await getWeatherInfoByCoordinates(39.74362, -8.80705);
    dispatch({ type: SET_WEATHER_INFO, payload: weather });
  }, [dispatch]);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      handleSuccessfulUserLocation,
      handleUnsuccessfulUserLocation,
    );
  }, [handleSuccessfulUserLocation, handleUnsuccessfulUserLocation]);
  return (
    <div className="App">
      <Nav />
      <SearchBar />
      <CurrentWeather />
      <ForecastWeather />
    </div>
  );
};

export default App;
