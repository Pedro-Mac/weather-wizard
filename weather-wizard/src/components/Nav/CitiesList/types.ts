export interface citiesListProps {
  isActive: boolean;
  closeNav: () => void;
}

interface cityItem {
  city: string;
  country: string;
  coord: { lat: number; lon: number };
}

export interface citiesListType {
  locationsList: cityItem[];
  defaultLocation: cityItem;
}
