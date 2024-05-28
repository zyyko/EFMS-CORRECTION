import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { connectClient } from "../features/clientsSlice";
import { deleteReservation } from "../features/reservationSlice";

export default function Authentification() {
  const clients = useSelector((state) => state.clients);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  console.log(clients);

  const handleConnect = () => {
    if (login !== undefined && password !== undefined) {
      const client = clients.find(
        (client) => client.login == login && client.password == password
      );
      if (client) {
        dispatch(connectClient(client));
        navigate("/historique/" + client.id);
      } else {
        setError("login ou mot de pass est incorrect");
      }
    }
  };

  return (
    <div>
      <label htmlFor="">login : </label>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setLogin(e.target.value)}
      />
      <br />
      <label htmlFor="">password : </label>
      <input
        type="password"
        name=""
        id=""
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      {error && error}
      <br />
      <button onClick={handleConnect}>Connecter</button>
    </div>
  );
}
