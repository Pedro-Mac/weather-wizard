import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { locationReducer } from "./location/reducer";
import { locationsListReducer } from "./locationsList/reducer";

const reducer = combineReducers({
  selectedLocation: locationReducer,
  locationsList: locationsListReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
