import React from "react";
import { useSelector } from "react-redux";
import SupprimerEtudiant from "./SupprimerEtudiant";
import AjouterEtudiant from "./AjouterEtudiant";
import { NavLink } from "react-router-dom";

export default function ListEtudiant() {
  const etudiants = useSelector((state) => state.etudiants);
  return (
    <div>
      <AjouterEtudiant />
      {etudiants.dbEtudiant.map((etudiant) => (
        <li key={etudiant.id}>
          {etudiant.nom} - {etudiant.filiere}
          <NavLink to={"/modifier/" + etudiant.id}>Modifier</NavLink>
          <SupprimerEtudiant id={etudiant.id} />
        </li>
      ))}
    </div>
  );
}
