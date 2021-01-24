import highHumidityImg from "../../../images/svg/full-drop.svg";
import midHumidityImg from "../../../images/svg/half-drop.svg";
import lowHumidityImg from "../../../images/svg/empty-drop.svg";

export const getHumidityIcon = (percentage: number) => {
  if (percentage > 66) {
    return highHumidityImg;
  } else if (percentage > 33) {
    return midHumidityImg;
  } else {
    return lowHumidityImg;
  }
};
