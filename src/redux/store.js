import { configureStore } from "@reduxjs/toolkit";
import voyageReducer from "./features/voyagesSlice";
const store = configureStore({
  reducer: {
    voyages: voyageReducer,
  },
});

export default store;
