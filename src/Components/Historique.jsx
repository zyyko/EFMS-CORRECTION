import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteReservation } from "../features/reservationSlice";

export default function Historique() {
  const { id } = useParams();
  const reservations = useSelector((state) =>
    state.reservations.filter((reservation) => reservation.id_client == id)
  );
  const chambres = useSelector((state) => state.chambres);
  const dispatch = useDispatch();
  console.log(reservations);

  const calculeTotal = () => {
    let total = 0;
    reservations.forEach((reservation) => {
      const chambre = chambres.find(
        (chambre) => reservation.id_chambre == chambre.id
      );
      if (chambre) {
        total = Number(total + chambre.prix * reservation.nombre_jour);
      }
    });
    return total;
  };

  const handleDelete = (id_res) => {
    dispatch(deleteReservation(id_res));
  };

  return (
    <div>
      {reservations.map((reservation, key) => (
        <li key={key}>
          {reservation.id_res} | {reservation.num_chambre} |{" "}
          {reservation.date_reservation} | {reservation.nombre_jour}
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => handleDelete(reservation.id_res)}
          >
            Supprimer
          </button>
        </li>
      ))}
      <strong>TOTAL : {calculeTotal()}</strong>
    </div>
  );
}
