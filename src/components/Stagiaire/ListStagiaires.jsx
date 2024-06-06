import React from "react";
import { useSelector } from "react-redux";
import Stagiaire from "./Stagiaire";
import styles from "./ListStagiaires.module.css";
export default function ListStagiaires() {
  const stagiaires = useSelector((state) => state);
  console.log(stagiaires);
  return (
    <div className={styles.container}>
      {stagiaires.map((stagiaire, key) => (
        <Stagiaire stagiaire={stagiaire} key={key} />
      ))}
    </div>
  );
}
