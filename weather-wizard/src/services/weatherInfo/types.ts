export interface currentWeatherRespData {
  base: string;
  clouds: object;
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: 2;
    temp_max: number;
    pressure: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: { id: number; main: string; description: string; icon: string }[];
  wind: { speed: number; deg: number };
}

export interface forecastWeatherRespData {
  current: {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: { id: number; main: string; description: string; icon: string }[];
    wind_deg: number;
    wind_speed: number;
  };
  daily: {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: { day: number; night: number; eve: number; morn: number };
    humidity: number;
    pop: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: { day: number; min: number; max: number; night: number; eve: number };
    uvi: number;
    weather: { id: number; main: string; description: string; icon: string }[];
    wind_deg: number;
    wind_speed: number;
  }[];
  minutely: { dt: number; precipitation: number }[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offse: number;
}
