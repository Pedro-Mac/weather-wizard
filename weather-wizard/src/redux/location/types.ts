export interface actionType {
  type: string;
  payload: {
    current: {
      date: string;
      weather: string;
      temperature: { current: number; min: number; max: number; feels: number };
      locationName: { city: string; country: string };
    };
    forecast: {
      humidity: number;
      temperature: { min: number; max: number };
      weatherStatus: {
        id: number;
        main: string;
        description: string;
        icon: string;
      };
    }[];
  };
}

export interface stateType {
  currentWeather: {
    date: string;
    weather: string;
    temperature: { current: number; min: number; max: number; feels: number };
    locationName: { city: string; country: string };
  };
}
