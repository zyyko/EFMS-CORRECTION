import { configureStore } from "@reduxjs/toolkit";
import reservationSlice from "./features/reservationSlice";
import clientsSlice from "./features/clientsSlice";
import chambresSlice from "./features/chambresSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationSlice,
    clients: clientsSlice,
    chambres: chambresSlice,
  },
});
