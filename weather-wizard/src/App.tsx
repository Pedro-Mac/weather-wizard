import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  getCurrentWeatherInfo,
  getForecastWeatherInfo,
  getWeatherInfo,
} from "./services/weatherInfo/getWeatherInfo";

import { SET_LOCATION } from "./redux/location/actions";

import CurrentWeather from "./containers/CurrentWeather";

import "./App.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handleSuccessfulUserLocation = useCallback(async (location) => {
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;

    const weather = await getWeatherInfo(lat, lon);
    console.log(weather);
  }, []);

  // const handleUnsuccessfulUserLocation = useCallback(() => {
  //   getCurrentWeatherInfo(39.74362, -8.80705).then((info) => {
  //     const weatherInfoToState = filterWeatherInfo(info.data);
  //     dispatch({ type: SET_LOCATION, payload: weatherInfoToState });
  //   });
  // }, [dispatch]);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      handleSuccessfulUserLocation,
      // handleUnsuccessfulUserLocation,
    );
  }, [handleSuccessfulUserLocation]);
  return (
    <div className="App">
      <CurrentWeather />
    </div>
  );
};

export default App;
