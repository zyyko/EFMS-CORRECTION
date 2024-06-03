import { configureStore } from "@reduxjs/toolkit";
import stagiaireSlice from "./features/stagiaireSlice";

const store = configureStore({
  reducer: {
    stagiaires: stagiaireSlice,
  },
});

export default store;
