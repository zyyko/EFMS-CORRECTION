import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        justifyContent: "center",
        backgroundColor: "red",
        padding: "15px",
      }}
    >
      <NavLink to={"/pays"}>Q3 </NavLink>
      <NavLink to={"/years"}>Q4 </NavLink>
      <NavLink to={"/filter"}>Q6 </NavLink>
    </div>
  );
}
