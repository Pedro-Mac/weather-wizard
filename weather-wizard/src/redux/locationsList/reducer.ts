import { ADD_LOCATION, REMOVE_LOCATION, SET_LIST_FROM_LOCAL } from "./actions";

import { actionType, itemType } from "./types";

import { setItemLocal } from "./helpers/handleLocalStorage";

export const locationsListReducer = (
  state: itemType[] = [],
  action: actionType,
) => {
  const removeDefaultLocation = state.filter((item, index) => index !== 0);
  switch (action.type) {
    case ADD_LOCATION:
      const newLocation = action.payload;
      //handles localStorage update
      setItemLocal("locationsList", [...removeDefaultLocation, newLocation]);

      return [...state, newLocation];
    case REMOVE_LOCATION:
      const filteredLocationsList = state.filter((item: itemType) => {
        return (
          item.city !== action.payload.item.city ||
          (item.city === action.payload.item.city &&
            item.country !== action.payload.item.country)
        );
      });
      setItemLocal("locationsList", [filteredLocationsList]);
      return filteredLocationsList;
    case SET_LIST_FROM_LOCAL:
      return [...action.payload.localList];
    default:
      return state;
  }
};
