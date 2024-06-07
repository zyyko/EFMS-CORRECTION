import { configureStore } from "@reduxjs/toolkit";
import etudiantReducer from "./features/sliceLivres";
const store = configureStore({
  reducer: {
    etudiants: etudiantReducer,
  },
});

export default store;
