export interface citiesListProps {
  isActive: boolean;
  closeNav: () => void;
}

export interface citiesListType {
  locationsList: {
    city: string;
    country: string;
    coord: { lat: number; lon: number };
  }[];
}
