import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";

export default function Cinputs() {
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();
  console.log(val1, val2);
  const dispatch = useDispatch();

  const handleOperation = (typeOp) => {
    dispatch({
      type: typeOp,
      payload: { val1: Number(val1), val2: Number(val2), operator: typeOp },
    });
  };
  return (
    <div>
      val1 : <input type="number" onChange={(e) => setVal1(e.target.value)} />
      <br />
      val2 : <input type="number" onChange={(e) => setVal2(e.target.value)} />
      <br />
      <button onClick={(e) => handleOperation(e.target.textContent)}>+</button>
      <button onClick={(e) => handleOperation(e.target.textContent)}>-</button>
      <button onClick={(e) => handleOperation(e.target.textContent)}>*</button>
      <button onClick={(e) => handleOperation(e.target.textContent)}>/</button>
    </div>
  );
}
