import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function DetailStagiaire() {
  const { nom } = useParams();
  console.log(nom);
  const stagiaire = useSelector((state) =>
    state.stagiaires.stagiaires.find((stagiaire) => stagiaire.nom === nom)
  );

  return (
    <div>
      <img src={stagiaire.image} alt="" />
      <h3>Nom : {stagiaire.nom}</h3>
      <h3>Prenom : {stagiaire.prenom}</h3>
      <h3>Filiere : {stagiaire.filiere}</h3>
    </div>
  );
}
