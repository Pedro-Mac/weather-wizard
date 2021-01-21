import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import { getWeatherInfo } from "./services/weatherInfo/getWeatherInfo";

import { SET_LOCATION } from "./redux/location/actions";

import CurrentWeather from "./containers/CurrentWeather";

import "./App.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handleSuccessfulUserLocation = useCallback(
    async (location) => {
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;

      const weather = await getWeatherInfo(lat, lon);

      dispatch({ type: SET_LOCATION, payload: weather });
    },
    [dispatch],
  );

  const handleUnsuccessfulUserLocation = useCallback(async () => {
    const weather = await getWeatherInfo(39.74362, -8.80705);
    dispatch({ type: SET_LOCATION, payload: weather });
  }, [dispatch]);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      handleSuccessfulUserLocation,
      handleUnsuccessfulUserLocation,
    );
  }, [handleSuccessfulUserLocation, handleUnsuccessfulUserLocation]);
  return (
    <div className="App">
      <CurrentWeather />
    </div>
  );
};

export default App;
