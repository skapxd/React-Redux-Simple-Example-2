// @ts-check
import React, { useState } from "react";

export default function App() {
  const [change, setChange] = useState(0);

  return (
    <div>
      <ReadComponent text={change} />
      <WriteComponent
        onChange={(supS) => {
          setChange((s) => supS );
        }}
      />
    </div>
  );
}

function ReadComponent(props) {
  const { text = 0 } = props;

  return <p>{text}</p>;
}

function WriteComponent(props) {
  const { onChange = () => {
    console.log('el parametro se mando vacio')
  }} = props;

  const initStateCounter = 0;
  const [counter, setCounter] = useState(initStateCounter);

  return (
    <div>
      <button
        className="add"
        onClick={() => {
          onChange && onChange(counter);
          setCounter((s) => s + 1);
        }}
      >
        +1
      </button>

      <button className="minus"
      onClick={() => {
        onChange && onChange(counter);
        setCounter((s) => s - 1);
      }}
      >-1</button>

      <button className="reset"
      onClick={() => {
        onChange && onChange(counter);
        setCounter((s) => 0);
      }}
      >reset</button>
    </div>
  );
}
