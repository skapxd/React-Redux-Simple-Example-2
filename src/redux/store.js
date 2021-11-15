import { combineReducers, createStore } from "redux";
import { reducerAuth } from "./auth/reducer";
import { reducerCounter } from "./counter/reducer";

//
const combineReducer = combineReducers({
  counter: reducerCounter,
  auth: reducerAuth,
});
export const store = createStore(combineReducer);
