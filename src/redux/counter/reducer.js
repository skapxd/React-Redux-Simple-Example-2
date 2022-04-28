// @ts-check
import { enumCounterType } from "./action";

const initState = 0;
export const reducerCounter = (state = initState, action) => {

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
