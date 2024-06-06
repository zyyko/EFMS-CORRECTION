import React from "react";
import { NavLink } from "react-router-dom";

export default function Voyage({ voyage }) {
  return (
    <div>
      <img src={voyage.source} />
      <h3>{voyage.intitule}</h3>
      <button>
        <NavLink to={"/voyage/" + voyage.id}>Plus details</NavLink>
      </button>
    </div>
  );
}
