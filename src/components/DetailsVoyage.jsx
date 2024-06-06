import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function DetailsVoyage() {
  const { id } = useParams();
  const voyage = useSelector((state) =>
    state.voyages.find((voyage) => voyage.id == id)
  );
  console.log(voyage);
  return (
    <div>
      <img src={voyage.source} />
      <h3>{voyage.intitule}</h3>
      <h3>Prix : {voyage.prix}</h3>
    </div>
  );
}
