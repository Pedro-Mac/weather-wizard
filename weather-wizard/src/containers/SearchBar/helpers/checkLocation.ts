import { LOCATIONS_LIST } from "../../../globalConstants";

interface locationInfo {
  city: string;
  country: string;
}

export const checkRepeatedLocation = (location: locationInfo) => {
  const localList = JSON.parse(localStorage.getItem(LOCATIONS_LIST) || "[]");
  const locationRepeats = localList.some(
    (item: locationInfo) =>
      item.city === location.city && item.country === location.country,
  );
  return locationRepeats;
};
