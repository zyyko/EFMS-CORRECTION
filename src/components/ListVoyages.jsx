import React from "react";
import { useSelector } from "react-redux";
import Voyage from "./Voyage";

export default function ListVoyages() {
  const voyages = useSelector((state) => state.voyages);
  console.log(voyages);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 15,
      }}
    >
      {voyages.map((voyage, key) => (
        <Voyage voyage={voyage} key={key} />
      ))}
    </div>
  );
}
