import React from "react";
import { initialState } from "./store";

export default function reducer(state, action) {
  switch (action.type) {
    case "like":
      console.log(action.payload);
      return state.map((livre, key) => {
        if (key === action.payload) {
          return { ...livre, likes: livre.likes + 1 };
        }
        return livre;
      });

    default:
      return state;
  }
}
