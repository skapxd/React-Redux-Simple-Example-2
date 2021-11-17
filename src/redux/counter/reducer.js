// @ts-check
import { enumCounterType } from "./action";

const initState = 0;
export const reducerCounter = (state = initState, action) => {
  // export const reducerCounter = async (state = initState, action) => {
  if (action.type === enumCounterType.add) {
    // const response = await fetch('....')

    // const resposne = fetch('....')
    //   .then(r => r)
    return state + (action.payload ?? 1);
  }
  if (action.type === enumCounterType.minus) {
    return state - (action.payload ?? 1);
  }
  if (action.type === enumCounterType.reset) {
    return 0;
  }

  if (action.type === "f_get") {
    const newState = {
      loading: true
    }
    console.log("se esta ejecutando el fetch");
    return state;
  }

  if (action.type === "f_response") {
    console.log("action.payload:", action.payload ?? 'indefinido ');
    const newState = {
      loading: false
    }
    return state;
  }
  return state;
};
