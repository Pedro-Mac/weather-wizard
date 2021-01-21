import { SET_WEATHER_INFO } from "./actions";

import { actionType, stateType } from "./types";

const initialState = {
  currentWeather: {
    date: "",
    weather: "",
    temperature: { current: 0, min: 0, max: 0, feels: 0 },
    locationName: { city: "", country: "" },
  },
};

export const locationReducer = (
  state: stateType = initialState,
  action: actionType,
) => {
  switch (action.type) {
    case SET_WEATHER_INFO:
      return {
        ...state,
        currentWeather: {
          date: action.payload.current.date,
          weather: action.payload.current.weather,
          temperature: action.payload.current.temperature,
          locationName: action.payload.current.locationName,
        },
        forecastWeather: action.payload.forecast,
      };
    default:
      return state;
  }
};
