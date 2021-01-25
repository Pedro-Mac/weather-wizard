import highHumidityImg from "../../../images/svg/weather/humidity/full-drop.svg";
import midHumidityImg from "../../../images/svg/weather/humidity/half-drop.svg";
import lowHumidityImg from "../../../images/svg/weather/humidity/empty-drop.svg";

export const getHumidityIcon = (percentage: number) => {
  if (percentage > 66) {
    return highHumidityImg;
  } else if (percentage > 33) {
    return midHumidityImg;
  } else {
    return lowHumidityImg;
  }
};
