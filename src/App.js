// @ts-check
import { useDispatch, useSelector } from "react-redux";
import { counterTypes } from ".";

export default function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{state}</p>

      <div>
        <button
          className="add"
          onClick={() => {
            dispatch({
              type: counterTypes.add,
            });
          }}
        >
          +1
        </button>

        <button
          className="minus"
          onClick={() => {
            dispatch({
              type: counterTypes.minus,
            });
          }}
        >
          -1
        </button>

        <button
          className="reset"
          onClick={() => {
            dispatch({
              type: counterTypes.reset,
            });
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
