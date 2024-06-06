import React from "react";
import styles from "./Stagiaire.module.css";
import { NavLink } from "react-router-dom";
export default function Stagiaire({ stagiaire }) {
  return (
    <div className={styles.stagiaireContainer}>
      <NavLink to={"/stagiaire/" + stagiaire.nom}>
        <img src={stagiaire.image} />
      </NavLink>
      <h3>{stagiaire.nom}</h3>
    </div>
  );
}
