import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducerAuth } from "./auth/reducer";
import { reducerCounter } from "./counter/reducer";
import rootSaga from "./counter/saga";


const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
  const {logger} = require(`redux-logger`);
  middlewares.push(logger);
}

//
const combineReducer = combineReducers({
  counter: reducerCounter,
  auth: reducerAuth,
});
export const store = createStore(combineReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
