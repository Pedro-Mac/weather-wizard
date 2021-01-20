import { SET_LOCATION } from "./actions";

interface actionType {
  type: string;
  payload: {
    date: string;
    weather: string;
    temperature: { current: number; min: number; max: number; feels: number };
    locationName: { city: string; country: string };
  };
}

export const locationReducer = (state: {} = {}, action: actionType) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        weatherInfo: {
          date: action.payload.date,
          weather: action.payload.weather,
          temperature: action.payload.temperature,
          locationName: action.payload.locationName,
        },
      };
    default:
      return state;
  }
};
