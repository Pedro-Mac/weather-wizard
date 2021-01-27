import React, { useEffect, useCallback } from "react";
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
//styles
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
          type: SET_USER_LOCATION,
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

    const userLocationsListJSON =
      window.localStorage.getItem("locationsList") || "[]";
    const parsedUserLocationList = JSON.parse(userLocationsListJSON);
    // console.log("parsed array", parsedUserLocationList);
    dispatch({
      type: SET_LIST_FROM_LOCAL,
      payload: { localList: parsedUserLocationList },
    });
  }, [handleSuccessfulUserLocation, handleUnsuccessfulUserLocation, dispatch]);
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
