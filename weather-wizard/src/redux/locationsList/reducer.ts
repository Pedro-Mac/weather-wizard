import {
  ADD_LOCATION,
  REMOVE_LOCATION,
  UPDATE_DEFAULT_LOCATION,
} from "./actions";

import { actionType, itemType } from "./types";

export const locationsListReducer = (
  state: itemType[] = [],
  action: actionType,
) => {
  switch (action.type) {
    case ADD_LOCATION:
      const newLocation = action.payload;

      return [...state, newLocation];

    case UPDATE_DEFAULT_LOCATION:
      const defaultLocation = action.payload;
      //changes the user's location in the list of locations
      state[0] = defaultLocation;
      return [...state];
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
