import React from "react";
import styles from "./Stagiaire.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function Stagiaire({ stagiaire }) {
  const dispatch = useDispatch();

  const handleDelete = (nom) => {
    dispatch({ type: "DELETE_STAGIAIRE", payload: nom });
  };
  return (
    <div className={styles.stagiaireContainer}>
      <NavLink to={"/stagiaire/" + stagiaire.nom}>
        <img src={stagiaire.image} />
      </NavLink>
      <h3>{stagiaire.nom}</h3>
      <button onClick={() => handleDelete(stagiaire.nom)}>Delete</button>
    </div>
  );
}
