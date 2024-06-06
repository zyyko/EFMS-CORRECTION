import React from "react";
import { useSelector } from "react-redux";
import Livre from "./Livre";

export default function ListLivres() {
  const livres = useSelector((state) => state);
  console.log(livres);
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 15 }}>
      {livres.map((livre, key) => (
        <Livre livre={livre} id={key} />
      ))}
    </div>
  );
}
