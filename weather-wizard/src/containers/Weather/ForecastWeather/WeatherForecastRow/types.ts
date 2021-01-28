export interface WeatherForecastRowProps {
  humidity: number;
  temperature: { min: number; max: number };
  weatherStatus: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  date: number;
}
