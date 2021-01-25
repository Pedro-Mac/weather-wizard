import cloudsImg from "../../../../images/svg/weather/clouds.svg";
import snowFlakeImg from "../../../../images/svg/weather/snow.svg";
import clearSkyImg from "../../../../images/svg/weather/clear.svg";

export const getWeatherIcon = (weather: string) => {
  switch (weather) {
    case "Clouds":
      return cloudsImg;
    case "Snow":
      return snowFlakeImg;
    case "Clear":
      return clearSkyImg;
    default:
      return;
  }
};
