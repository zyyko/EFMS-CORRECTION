import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.li}>
          Liste des stagiaires
        </NavLink>
        <NavLink to="/add" className={styles.li}>
          Ajouter un stagiaire
        </NavLink>
        <NavLink to="/stagiairesApi" className={styles.li}>
          StagiairesApi {/* Optional */}
        </NavLink>
      </nav>
    </div>
  );
}
