export interface actionType {
  type: string;
  payload: {
    current: {
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
  current: {
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
}
