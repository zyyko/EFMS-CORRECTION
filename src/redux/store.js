import React from "react";
import { createStore } from "redux";
import reducer from "./reducer";

export const initialState = [
  {
    titre: "Restful java webservices",
    auteur: "David lu",
    edition: "Packt",
    poster:
      "https://m.media-amazon.com/images/I/71tCVS8JEIL._AC_UF894,1000_QL80_.jpg",
    likes: 0,
  },

  {
    titre: "Restful API with Node.js",
    auteur: "Fernando daglio",
    edition: "Apress",
    poster:
      "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-3715-1",
    likes: 0,
  },

  {
    titre: "Restful Web Services CookBook",
    auteur: "Subbu Allamarju",
    edition: "OREILLY",
    poster:
      "https://m.media-amazon.com/images/I/81BSr5FJJfL._AC_UF1000,1000_QL80_.jpg",
    likes: 0,
  },
];

export const store = createStore(reducer, initialState);
