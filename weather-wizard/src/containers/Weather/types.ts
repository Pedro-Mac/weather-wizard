export interface weatherInfoType {
  selectedLocation: {
    currentWeather: {
      base: string;
      clouds: { all: number };
      cod: number;
      coord: { lon: number; lat: number };
      dt: number;
      id: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
        pressure: number;
      };
      name: string;
      sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
      };
      timezone: number;
      visibility: number;
      weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
      }[];
      wind: { deg: number; speed: number };
    };

    forecastWeather: {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: { day: number; night: number; eve: number; morn: number };
      humidity: number;
      pop: number;
      pressure: number;
      rain: number;
      snow: number;
      sunrise: number;
      sunset: number;

      temp: {
        min: number;
        max: number;
        day: number;
        eve: number;
        morn: number;
        night: number;
      };
      uvi: number;
      weather: {
        description: string;
        icon: string;
        id: number;
        main: string;
      }[];
      wind_deg: number;
      wind_speed: number;
    }[];
  };
}
