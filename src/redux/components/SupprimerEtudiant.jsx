import React from "react";
import { useDispatch } from "react-redux";
import { supprimerEtudiant } from "../features/sliceLivres";

export default function SupprimerEtudiant({ id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(supprimerEtudiant(id));
  };
  return <button onClick={handleDelete}>Supprimer Etudiant</button>;
}
