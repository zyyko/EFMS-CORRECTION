import React from "react";

export default function reducer(state, action) {
  switch (action.type) {
    case "AJOUTER_STAGIAIRE":
      return [...state, action.payload];
    case "DELETE_STAGIAIRE":
      return state.filter((stagiaire) => stagiaire.nom !== action.payload);
    default:
      return state;
  }
}
