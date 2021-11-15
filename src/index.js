// @ts-check

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { enumCounterType } from "./redux/action";

/**@typedef {import('./GlobalState').GlobalState} GlobalState */

const initState = 0;
const reducerCounter = (state = initState, action) => {
  if (action.type === enumCounterType.add) {
    return state + (action.payload ?? 1);
  }
  if (action.type === enumCounterType.minus) {
    return state - (action.payload ?? 1);
  }
  if (action.type === enumCounterType.reset) {
    return 0;
  }
  return state;
};

const storeCounter = createStore(reducerCounter);

//
const reducerAuth = (state = false, action) => {
  return state;
};

const storeAuth = createStore(reducerAuth);

//
const combineReducer = combineReducers({
  counter: reducerCounter,
  auth: reducerAuth,
});
const store = createStore(combineReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const clousure = (fn) => {
//   let state = 0;

//   return () => {
//     console.log(state);
//     fn();
//     state++;
//   };
// };

// const dispatch = clousure(() => {
//   console.log('<App />')
// })
