import React from "react";

export default function reducer(state, action) {
  switch (action.type) {
    case "AJOUTER_STAGIAIRE":
      return [...state, action.payload];
    default:
      return state;
  }
}
