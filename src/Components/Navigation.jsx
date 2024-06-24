import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <NavLink to={"/list"}>List issues</NavLink>
      <NavLink to={"/add"}>Add Issue</NavLink>
    </div>
  );
}
