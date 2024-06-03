import axios from "axios";
import React, { useEffect, useState } from "react";

export default function StagiairesApi() {
  const [stagiaires, setStagiaires] = useState([]);
  console.log(stagiaires);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("Data : ", response.data);
        setStagiaires(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table border={1}>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Adresse/Street</th>
        </tr>
        {stagiaires.map((stagiaire, key) => (
          <tr>
            <td>{stagiaire.name}</td>
            <td>{stagiaire.username}</td>
            <td>{stagiaire.email}</td>
            <td>{stagiaire.address.street}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
