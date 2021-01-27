export interface actionType {
  type: string;
  payload: { item: itemType; localList: itemType[] };
}

export interface itemType {
  city: string;
  country: string;
  coords: { lat: number; lon: number };
}
