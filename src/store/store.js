import { createStore, combineReducers, compose } from "redux";
import PlaceReducer from "./reducers/PlacesReducer";

const rootReducer = combineReducers({
  places: PlaceReducer
});

let composeEnhancers = compose;
if (__DEV__)
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = () => createStore(rootReducer, composeEnhancers());

export default store;
