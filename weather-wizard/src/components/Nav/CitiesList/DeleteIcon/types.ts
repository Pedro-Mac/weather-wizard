export interface deleteIconProps {
  city: string;
  country: string;
  closeNav: () => void;
}

export interface stateType {
  selectedLocation: {
    currentWeather: { name: string; sys: { country: string } };
  };
  locationsList: { coord: { lat: number; lon: number } }[];
}
