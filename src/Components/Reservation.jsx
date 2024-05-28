import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addReservation } from "../features/reservationSlice";

export default function Reservation() {
  const { id, id_chambre } = useParams();
  const dispatch = useDispatch();
  const idRes = useRef();
  const idChambre = useRef();
  const dateReservation = useRef();
  const nombreJour = useRef();

  const reservations = useSelector((state) => state.reservations);

  useEffect(() => {
    const lastReservation = reservations[reservations.length - 1];
    const nextId = lastReservation ? Number(lastReservation.id_res) + 1 : 1;
    idRes.current.value = nextId;
  }, [reservations]);

  const handleAddReservation = (e) => {
    e.preventDefault();
    const idResValue = Number(idRes.current.value);
    const idChambreValue = idChambre.current.value;
    const dateReservationValue = dateReservation.current.value;
    const nombreJourValue = nombreJour.current.value;

    const reservation = {
      id_res: idResValue,
      num_chambre: idChambreValue,
      id_client: id,
      date_reservation: dateReservationValue,
      nombre_jour: nombreJourValue,
    };
    dispatch(addReservation(reservation));
  };

  return (
    <div>
      <form action="" onSubmit={handleAddReservation}>
        <label htmlFor="">ID_RES :</label>
        <input type="number" defaultValue={idRes} ref={idRes} />
        <br />
        <label htmlFor="">ID_CHAMBRE :</label>
        <input type="text" defaultValue={id_chambre} disabled ref={idChambre} />
        <br />
        <label htmlFor="">DATE_RESERVATION :</label>
        <input
          type="text"
          defaultValue={new Date().toLocaleDateString()}
          disabled
          ref={dateReservation}
        />
        <br />
        <label htmlFor="">NOMBRE_JOUR :</label>
        <input type="number" ref={nombreJour} />
        <br />
        <button>Reserver ! </button>
      </form>
    </div>
  );
}
