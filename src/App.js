// @ts-check

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  actionAddCounter,
  actionMinusCounter,
  actionResetCounter,
} from "./redux/counter/action";

/**@typedef {import('./GlobalState').GlobalState} GlobalState */

export default function App() {
  const [counter, setCounter] = useState(0);

  const counterRedux = useSelector(s => s.counter);
  return (
    <div>
      <p>{counterRedux}</p>

      <div>
        <Add />

        <Reset />

        <Minus />
      </div>
    </div>
  );
}

function Add(props) {
  const { fn } = props;

  const dispatch = useDispatch();

  return (
    <button
      className="add"
      onClick={() => {
        // fn();
        dispatch(actionAddCounter(2));
      }}
    >
      +1
    </button>
  );
}

function Minus(props) {
  const { fn } = props;

  const dispatch = useDispatch();
  return (
    <button
      className="minus"
      onClick={() => {
        // fn();

        dispatch(actionMinusCounter());
      }}
    >
      -1
    </button>
  );
}

function Reset(props) {
  const { fn } = props;
  const dispatch = useDispatch();

  return (
    <button
      className="reset"
      onClick={() => {
        // fn();

        dispatch(actionResetCounter());
      }}
    >
      reset
    </button>
  );
}
