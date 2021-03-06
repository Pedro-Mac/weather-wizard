export interface deleteIconProps {
  city: string;
  country: string;
}

export interface stateType {
  selectedLocation: {
    currentWeather: { name: string; sys: { country: string } };
  };
  locationsList: { coord: { lat: number; lon: number } }[];
  defaultLocation: { coord: { lat: number; lon: number } };
}
