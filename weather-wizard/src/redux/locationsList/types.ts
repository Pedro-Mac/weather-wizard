export interface stateType {}
export interface actionType {
  type: string;
  payload: itemType;
}

export interface itemType {
  city: string;
  country: string;
  coords: { lat: number; lon: number };
}
