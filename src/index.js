import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ListLivres from "./redux/components/ListLivres";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Covid from "./redux/components/Covid";
import Menu from "./redux/components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/Exercice1" element={<App />} />
          <Route path="/Exercice2" element={<ListLivres />} />
          <Route path="/Exercice3" element={<Covid />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
