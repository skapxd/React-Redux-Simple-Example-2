// @ts-check

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";

export const counterTypes = {
  add: "add",
  minus: "minus",
  reset: "reset",
};

const initState = 0;

/**@typedef  */
/**
 * @param {number} state
 * @param {{type: string, payload: number}} action
 */
const reducer = (state = initState, action) => {
  if (action.type === counterTypes.add) {
    return state + (action.payload ?? 1);
  }

  if (action.type === counterTypes.minus) {
    return state - (action.payload ?? 1);
  }

  if (action.type === counterTypes.reset) {
    return 0;
  }

  return state;
};

const store = createStore(reducer);

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
