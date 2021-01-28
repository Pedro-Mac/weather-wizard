import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, batch } from "react-redux";
// http request handlers
import { getWeatherInfoByCoordinates } from "./services/weather-by-coordinates/getWeatherInfo";
// redux actions
import { SET_WEATHER_INFO } from "./redux/selectedLocation/actions";
import { SET_USER_LOCATION } from "./redux/defaultLocation/actions";
import { SET_LIST_FROM_LOCAL } from "./redux/locationsList/actions";

//components
import CurrentWeather from "./containers/Weather/CurrentWeather";
import ForecastWeather from "./containers/Weather/ForecastWeather";
import SearchBar from "./containers/SearchBar";
import Nav from "./components/Nav";
import ErrorMessage from "./components/ErrorMessage";
//styles
import "./App.scss";

import { LOCATIONS_LIST } from "./globalConstants";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [reqError, setReqError] = useState<string>("");

  const handleUserLocationReq = useCallback(
    async (location) => {
      if (reqError) setReqError("");
      let lat: number;
      let lon: number;
      if (location.coords) {
        lat = location.coords.latitude;
        lon = location.coords.longitude;
      } else {
        lat = 39.74362;
        lon = -8.80705;
      }

      try {
        const weather = await getWeatherInfoByCoordinates(lat, lon);
        const { coord, name, sys } = weather.current;

        batch(() => {
          dispatch({ type: SET_WEATHER_INFO, payload: weather });
          dispatch({
            type: SET_USER_LOCATION,
            payload: { coord, city: name, country: sys.country },
          });
        });
      } catch (error) {
        setReqError(
          "There was problem communicating with the server, please reload the page",
        );
      }
    },
    [dispatch, reqError],
  );

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      handleUserLocationReq,
      handleUserLocationReq,
    );

    const userLocationsListJSON =
      window.localStorage.getItem(LOCATIONS_LIST) || "[]";
    const parsedUserLocationList = JSON.parse(userLocationsListJSON);

    // populate state with the list of locations from user's device
    dispatch({
      type: SET_LIST_FROM_LOCAL,
      payload: { localList: parsedUserLocationList },
    });
  }, [handleUserLocationReq, dispatch]);
  return (
    <div className="App">
      <Nav />
      <SearchBar />
      <CurrentWeather />
      <ForecastWeather />
      {reqError && <ErrorMessage message={reqError} />}
    </div>
  );
};

export default App;
