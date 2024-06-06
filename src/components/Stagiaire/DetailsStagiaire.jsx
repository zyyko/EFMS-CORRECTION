import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ListStagiaires.module.css";
export default function DetailsStagiaire() {
  const { nom } = useParams();
  const stagiaire = useSelector((state) =>
    state.find((stagiaire) => stagiaire.nom === nom)
  );
  console.log(stagiaire);

  return (
    <div className={styles.stagiaireContainer}>
      <img src={stagiaire.image} />
      <h3>
        {stagiaire.nom} {stagiaire.prenom}
      </h3>
      <h3>Filiere : {stagiaire.filiere}</h3>
    </div>
  );
}
