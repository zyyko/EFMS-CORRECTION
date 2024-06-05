import React from "react";
import { useSelector } from "react-redux";

export default function Output() {
  const calculations = useSelector((state) => state.calculations);
  console.log(calculations);
  return (
    <div>
      <h1>List des calculations </h1>
      {calculations.map((calculation, key) => (
        <p>
          {calculation.val1} {calculation.operator} {calculation.val2} ={" "}
          {calculation.result}
        </p>
      ))}
    </div>
  );
}
