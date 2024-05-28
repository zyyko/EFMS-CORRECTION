import { createSlice } from "@reduxjs/toolkit";

const initialReservationsState = [
  {
    id_res: 1,
    num_chambre: 101,
    id_client: 1,
    date_reservation: new Date().toLocaleDateString(),
    nombre_jour: 5,
  },
  {
    id_res: 2,
    num_chambre: 102,
    id_client: 1,
    date_reservation: new Date().toLocaleDateString(),
    nombre_jour: 5,
  },
];

const reservationSlice = createSlice({
  name: "reservations",
  initialState: initialReservationsState,
  reducers: {
    addReservation: (state, action) => {
      state.push(action.payload);
    },
    deleteReservation: (state, action) => {
      return state.filter(
        (reservation) => reservation.id_res !== action.payload
      );
    },
  },
});

export const { addReservation, deleteReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
