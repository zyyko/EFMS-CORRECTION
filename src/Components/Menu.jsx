import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { disconnectClient } from "../features/clientsSlice";

export default function Menu() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const connectedUserId = useSelector((state) =>
    state.clients.find((client) => client.connected == true)
  );

  useEffect(() => {
    if (!connectedUserId) {
      navigate("/");
    }
  }, [connectedUserId]);
  if (location.pathname == "/") {
    if (connectedUserId) {
      dispatch(disconnectClient(connectedUserId));
    }
    return null;
  }
  return (
    <div>
      <nav>
        <NavLink to={"/historique/" + connectedUserId?.id}>Historique</NavLink>
        <NavLink to={"/chambres/" + connectedUserId?.id}>Chambre</NavLink>
        <NavLink to={"/"}>Déconnexion</NavLink>
      </nav>
    </div>
  );
}
