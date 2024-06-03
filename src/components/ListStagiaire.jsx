import React from "react";
import styles from "./listStagiaire.module.css";
import { useSelector } from "react-redux";
import Stagiaire from "./Stagiaire";
export default function ListStagiaire() {
  const stagiaires = useSelector((state) => state.stagiaires);
  console.log(stagiaires);
  return (
    <div className={styles.stagiairesContainer}>
      {stagiaires.stagiaires.map((stagiaire, key) => (
        <Stagiaire stagiaire={stagiaire} key={key} />
      ))}
    </div>
  );
}
