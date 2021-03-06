import { ADD_LOCATION, REMOVE_LOCATION, SET_LIST_FROM_LOCAL } from "./actions";

import { actionType, itemType } from "./types";

import { setItemLocal } from "./helpers/handleLocalStorage";

import { LOCATIONS_LIST } from "../../globalConstants";

export const locationsListReducer = (
  state: itemType[] = [],
  action: actionType,
) => {
  switch (action.type) {
    case ADD_LOCATION:
      const newLocation = action.payload;
      //handles localStorage update
      setItemLocal(LOCATIONS_LIST, [...state, newLocation]);

      return [...state, newLocation];
    case REMOVE_LOCATION:
      const filteredLocationsList = state.filter((item: itemType) => {
        return (
          item.city !== action.payload.item.city ||
          (item.city === action.payload.item.city &&
            item.country !== action.payload.item.country)
        );
      });
      setItemLocal(LOCATIONS_LIST, [...filteredLocationsList]);
      return filteredLocationsList;
    case SET_LIST_FROM_LOCAL:
      return [...action.payload.localList];
    default:
      return state;
  }
};
