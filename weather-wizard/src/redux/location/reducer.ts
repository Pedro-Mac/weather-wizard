import { SET_WEATHER_INFO } from "./actions";

import { actionType, stateType } from "./types";

const initialState = {
  currentWeather: {
    date: NaN,
    weather: "",
    temperature: { current: 0, min: 0, max: 0, feels: 0 },
    locationName: { city: "", country: "" },
  },
};

export const locationReducer = (
  state: stateType | {} = {},
  action: actionType,
) => {
  switch (action.type) {
    case SET_WEATHER_INFO:
      const { current, forecast } = action.payload;
      return {
        ...state,
        currentWeather: {
          base: current.base,
          clouds: current.clouds,
          cod: current.cod,
          coord: current.coord,
          dt: current.dt,
          id: current.id,
          main: current.main,
          name: current.name,
          sys: current.sys,
          timezone: current.timezone,
          visibility: current.visibility,
          weather: current.weather,
          wind: current.wind,
        },
        forecastWeather: forecast,
      };
    default:
      return state;
  }
};
