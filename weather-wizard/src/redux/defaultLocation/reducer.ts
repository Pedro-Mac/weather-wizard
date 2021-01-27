import { actionType } from "./types";

import { SET_USER_LOCATION } from "./actions";

export const defaultLocationReducer = (state = {}, action: actionType) => {
  switch (action.type) {
    case SET_USER_LOCATION:
      return action.payload;
    default:
      return state;
  }
};
