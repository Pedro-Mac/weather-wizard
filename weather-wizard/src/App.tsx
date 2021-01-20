import React, { useEffect, useCallback } from "react";

import "./App.scss";

const App: React.FC = () => {
  const handleSuccessfulUserLocation = useCallback((location) => {
    console.log(location.coords);
    console.log(Math.round(location.coords.latitude));
    console.log(Math.round(location.coords.longitude));
  }, []);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      handleSuccessfulUserLocation,
    );
  }, [handleSuccessfulUserLocation]);
  return <div className="App">hello world</div>;
};

export default App;
