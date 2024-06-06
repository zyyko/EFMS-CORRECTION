import React from "react";
import styles from "./listStagiaire.module.css";
import { useDispatch, useSelector } from "react-redux";
import Stagiaire from "./Stagiaire";
import { deleteStagiaire } from "../redux/features/stagiaireSlice";
import { NavLink } from "react-router-dom";
export default function ListStagiaire() {
  const stagiaires = useSelector((state) => state.stagiaires);
  const dispatch = useDispatch();

  const handleDelete = (nom) => {
    dispatch(deleteStagiaire({ nom }));
  };
  return (
    <div className={styles.stagiairesContainer}>
      {stagiaires.stagiaires.map((stagiaire, key) => (
        <div>
          <Stagiaire stagiaire={stagiaire} key={key} />
          <button onClick={() => handleDelete(stagiaire.nom)}>Supprimer</button>
          <NavLink to={"/edit/" + stagiaire.nom}>Modifier</NavLink>
        </div>
      ))}
    </div>
  );
}
