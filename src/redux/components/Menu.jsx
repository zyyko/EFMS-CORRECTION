import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav style={{ display: "flex", gap: 15 }}>
      <NavLink to="/Exercice1">Exercice 1 (Poids)</NavLink>
      <NavLink to="/Exercice2">Exercice 2 (Livres)</NavLink>
      <NavLink to="/Exercice3">Exercice 3 (Covid)</NavLink>
    </nav>
  );
}
