export interface weatherInfoType {
  selectedLocation: {
    currentWeather: {
      date: number;
      weather: string;
      temperature: { current: number; min: number; max: number; feels: number };
      locationName: { city: string; country: string };
    };

    forecastWeather: {
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
