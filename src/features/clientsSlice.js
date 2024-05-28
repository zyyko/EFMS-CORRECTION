import { createSlice } from "@reduxjs/toolkit";

const initialClientsState = [
  {
    id: 1,
    nom: "zakaria",
    login: "zakaria",
    password: "123",
    connected: false,
  },
  {
    id: 2,
    nom: "oussama",
    login: "oussama",
    password: "123",
    connected: false,
  },
];

const clientsSlice = createSlice({
  name: "clients",
  initialState: initialClientsState,
  reducers: {
    connectClient: (state, action) => {
      const client = state.find((client) => client.id == action.payload.id);
      if (client) {
        client.connected = true;
      }
    },
    disconnectClient: (state, action) => {
      console.log(action, "meowww");
      const client = state.find((client) => client.id == action.payload.id);
      if (client) {
        client.connected = false;
      }
    },
  },
});

export default clientsSlice.reducer;

export const { connectClient, disconnectClient } = clientsSlice.actions;
