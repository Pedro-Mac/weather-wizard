import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import { getWeatherInfo } from "./services/getWeatherInfo";
import { filterWeatherInfo } from "./utils/filterWeatherInfo";

import { SET_LOCATION } from "./redux/location/actions";

import CurrentWeather from "./containers/CurrentWeather";

import "./App.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handleSuccessfulUserLocation = useCallback(
    (location) => {
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;

      getWeatherInfo(lat, lon).then((info) => {
        const weatherInfoToState = filterWeatherInfo(info.data);
        dispatch({ type: SET_LOCATION, payload: weatherInfoToState });
      });
    },
    [dispatch],
  );

  const handleUnsuccessfulUserLocation = useCallback(() => {
    getWeatherInfo(39.74362, -8.80705).then((info) => {
      const weatherInfoToState = filterWeatherInfo(info.data);
      dispatch({ type: SET_LOCATION, payload: weatherInfoToState });
    });
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
