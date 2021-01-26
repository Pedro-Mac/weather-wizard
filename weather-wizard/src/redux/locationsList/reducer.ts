import { ADD_LOCATION, REMOVE_LOCATION } from "./actions";

import { actionType, itemType } from "./types";

export const locationsListReducer = (state: [] = [], action: actionType) => {
  switch (action.type) {
    case ADD_LOCATION:
      const newLocation = action.payload;

      return [...state, newLocation];
    case REMOVE_LOCATION:
      const filteredLocationsList = state.filter(
        (item: itemType) =>
          item.city !== action.payload.city &&
          item.country !== action.payload.country,
      );
      return filteredLocationsList;
    default:
      return state;
  }
};
