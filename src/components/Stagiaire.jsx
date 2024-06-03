import React from "react";
import styles from "./Stagiaire.module.css";
import { NavLink } from "react-router-dom";

export default function Stagiaire({ stagiaire }) {
  return (
    <div className={styles.container}>
      <div>
        <NavLink to={`/${stagiaire.nom}`}>
          <img src={stagiaire.image} alt="" />
        </NavLink>
      </div>
      <h3>{stagiaire.nom}</h3>
      {/* <h3>Prenom : {stagiaire.prenom}</h3>
      <h3>Filiere : {stagiaire.filiere}</h3> */}
    </div>
  );
}
