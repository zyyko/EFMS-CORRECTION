import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cinputs from "./redux/components/Cinputs";
import Output from "./redux/components/Output";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <p style={{ textAlign: "center" }}>
        --------------------------------------------------------------------------Exercice
        1--------------------------------------------------------------------------
      </p>
      <App />
      <hr />
      <p style={{ textAlign: "center" }}>
        --------------------------------------------------------------------------Exercice
        2 Redux
        --------------------------------------------------------------------------
      </p>
      <Cinputs /> {/* <App /> Exercice 1 */}
      <hr />
      <Output />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
