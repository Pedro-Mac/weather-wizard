import cloudsImg from "../../../../images/svg/weather/clouds.svg";
import snowFlakeImg from "../../../../images/svg/weather/snow.svg";
import clearSkyImg from "../../../../images/svg/weather/clear.svg";
import rainImg from "../../../../images/svg/weather/rain.svg";
import mistImg from "../../../../images/svg/weather/mist.svg";

export const getWeatherIcon = (weather: string) => {
  switch (weather) {
    case "Clouds":
      return cloudsImg;
    case "Snow":
      return snowFlakeImg;
    case "Clear":
      return clearSkyImg;
    case "Mist":
      return mistImg;
    case "Rain":
      return rainImg;
    default:
      return;
  }
};
