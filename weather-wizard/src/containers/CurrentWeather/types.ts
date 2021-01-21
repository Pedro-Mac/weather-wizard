export interface weatherInfoType {
  selectedLocation: {
    currentWeather: {
      date: string;
      weather: string;
      temperature: { current: number; min: number; max: number; feels: number };
      locationName: { city: string; country: string };
    };
  };
}
