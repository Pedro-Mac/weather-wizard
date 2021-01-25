import { SET_WEATHER_INFO } from "./actions";

import { actionType, stateType } from "./types";

export const locationReducer = (
  state: stateType | {} = {},
  action: actionType,
) => {
  switch (action.type) {
    case SET_WEATHER_INFO:
      const { current, forecast } = action.payload;

      console.log("this is the payload sent to the reducer", action.payload);

      return {
        currentWeather: action.payload.current,
        forecastWeather: forecast,
      };
    default:
      return state;
  }
};
