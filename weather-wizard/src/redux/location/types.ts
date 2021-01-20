export interface actionType {
  type: string;
  payload: {
    date: string;
    weather: string;
    temperature: { current: number; min: number; max: number; feels: number };
    locationName: { city: string; country: string };
  };
}

export interface stateType {
  date: string;
  weather: string;
  temperature: { current: number; min: number; max: number; feels: number };
  locationName: { city: string; country: string };
}
