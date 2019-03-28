import { createStore, combineReducers } from "redux";
import counter from "./counter/reducer";
import name from "./name/reducer";

const store = createStore(
  combineReducers({
    counter,
    name
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
