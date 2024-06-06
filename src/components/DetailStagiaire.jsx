import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteStagiaire } from "../redux/features/stagiaireSlice";

export default function DetailStagiaire() {
  const { nom } = useParams();
  const stagiaire = useSelector((state) =>
    state.stagiaires.stagiaires.find((stagiaire) => stagiaire.nom === nom)
  );
  useSelector((state) => console.log(state));

  return (
    <div>
      <img src={stagiaire.image} alt="" />
      <h3>Nom : {stagiaire.nom}</h3>
      <h3>Prenom : {stagiaire.prenom}</h3>
      <h3>Filiere : {stagiaire.filiere}</h3>
    </div>
  );
}
