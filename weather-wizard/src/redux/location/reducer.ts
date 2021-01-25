import { SET_WEATHER_INFO } from "./actions";

import { actionType, stateType } from "./types";

export const locationReducer = (
  state: stateType | {} = {},
  action: actionType,
) => {
  switch (action.type) {
    case SET_WEATHER_INFO:
      const { current, forecast } = action.payload;

      return {
        currentWeather: current,
        forecastWeather: forecast,
      };
    default:
      return state;
  }
};
