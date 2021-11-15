// @ts-check

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  actionAddCounter,
  actionMinusCounter,
  actionResetCounter,
} from "./redux/counter/action";

/**@typedef {import('./GlobalState').GlobalState} GlobalState */

export default function App() {
  /**@type {GlobalState} */
  const globalState = useSelector((s) => s);
  const dispatch = useDispatch();


  useEffect(() => {

    const main = async () => {
      const getDataFromAPI = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const json = response.json();
        return json;
      };

      const paintDataInDocument = (data) => {
        document.querySelector("p").innerHTML = JSON.stringify(data);
      };

      //
      const data = await getDataFromAPI();
      paintDataInDocument(data)
    };

    main();
  }, []);

  return (
    <div>
      <p>{globalState.counter}</p>

      <div>
        <button
          className="add"
          onClick={() => {
            dispatch(actionAddCounter(2));
          }}
        >
          +1
        </button>

        <button
          className="minus"
          onClick={() => {
            dispatch(actionMinusCounter());
          }}
        >
          -1
        </button>

        <button
          className="reset"
          onClick={() => {
            dispatch(actionResetCounter());
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}

// function ReadComponent(props) {
//   const { text = 0 } = props;

//   return <p>{text}</p>;
// }

// function WriteComponent(props) {
//   const {
//     onChange = () => {
//       console.log("el parametro se mando vacio");
//     },
//   } = props;

//   const initStateCounter = 0;
//   const [counter, setCounter] = useState(initStateCounter);

//   return (
//     <div>
//       <button
//         className="add"
//         onClick={() => {
//           onChange && onChange(counter);
//           setCounter((s) => s + 1);
//         }}
//       >
//         +1
//       </button>

//       <button
//         className="minus"
//         onClick={() => {
//           onChange && onChange(counter);
//           setCounter((s) => s - 1);
//         }}
//       >
//         -1
//       </button>

//       <button
//         className="reset"
//         onClick={() => {
//           onChange && onChange(counter);
//           setCounter((s) => 0);
//         }}
//       >
//         reset
//       </button>
//     </div>
//   );
// }
