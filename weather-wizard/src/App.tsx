import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import { getWeatherInfo } from "./services/getWeatherInfo";
import { filterWeatherInfo } from "./utils/filterWeatherInfo";

import { SET_LOCATION } from "./redux/location/actions";

import "./App.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handleSuccessfulUserLocation = useCallback(
    (location) => {
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;

      //should update state with user's location, should update state with SELCTED location and, from the selected location, display the weather info

      getWeatherInfo(lat, lon).then((info) => {
        const { data } = info;
        console.log(data);

        const weatherInfoToState = filterWeatherInfo(data);
        dispatch({ type: SET_LOCATION, payload: weatherInfoToState });
      });
    },
    [dispatch],
  );

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      handleSuccessfulUserLocation,
    );
  }, [handleSuccessfulUserLocation]);
  return <div className="App">hello world</div>;
};

export default App;
