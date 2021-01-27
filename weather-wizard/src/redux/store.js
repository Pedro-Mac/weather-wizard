import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { locationReducer } from "./selectedLocation/reducer";
import { locationsListReducer } from "./locationsList/reducer";
import { defaultLocationReducer } from "./defaultLocation/reducer";

const reducer = combineReducers({
  selectedLocation: locationReducer,
  locationsList: locationsListReducer,
  defaultLocation: defaultLocationReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
