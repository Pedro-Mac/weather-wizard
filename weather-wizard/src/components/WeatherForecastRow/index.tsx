import React from "react";

import { WeatherForecastRowProps } from "./types";

const WeatherForecastRow: React.FC<WeatherForecastRowProps> = ({
  humidity,
  temperature,
  weatherStatus,
}) => {
  const { min, max } = temperature;
  const { main } = weatherStatus;
  return (
    <section>
      <h4>weekday</h4>
      <div>
        <img src="" alt="humidity" />
        <p>{humidity}</p>
      </div>
      <p>{main}</p>
      <p>
        {min}°/{max}°
      </p>
    </section>
  );
};

export default WeatherForecastRow;
