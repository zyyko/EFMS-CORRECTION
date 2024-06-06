import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <div>
      <nav className={styles.nav}>
        <NavLink to={"/"} style={{ color: "white" }}>
          Liste des stagiaires
        </NavLink>
        <NavLink to={"/add"} style={{ color: "white" }}>
          Ajouter un stagiaire
        </NavLink>
      </nav>
    </div>
  );
}
