import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <h3>Gestion Stagiaire</h3>
      <nav
        style={{
          backgroundColor: "yellow",
          display: "flex",
          justifyContent: "center",
          gap: 15,
        }}
      >
        <NavLink to={"/"}>Liste Stagiaires</NavLink>
        <NavLink to={"add"}>Ajouter Stagiaire</NavLink>
        <NavLink to={"/delete"}>Supprimer Stagiaire</NavLink>
        <NavLink to={"/search"}>Rechercher par nom</NavLink>
        <NavLink to={"/Exercice2"}>Exercice 2 (REDUX)</NavLink>
      </nav>
    </div>
  );
}
