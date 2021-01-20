import React, { useEffect, useCallback } from "react";

import { getWeatherInfo } from "./services/getWeatherInfo";

import "./App.scss";

const App: React.FC = () => {
  const handleSuccessfulUserLocation = useCallback((location) => {
    const lat = Math.round(location.coords.latitude);
    const lon = Math.round(location.coords.longitude);
    getWeatherInfo(lat, lon).then((info) => console.log(info.data));
  }, []);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      handleSuccessfulUserLocation,
    );
  }, [handleSuccessfulUserLocation]);
  return <div className="App">hello world</div>;
};

export default App;
