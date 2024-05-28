import logo from "./logo.svg";
import Authentification from "./Components/Authentification";
import Historique from "./Components/Historique";
import Chambres from "./Components/Chambres";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Menu from "./Components/Menu";
import Reservation from "./Components/Reservation";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index element={<Authentification />} />
        <Route path={"/historique/:id"} element={<Historique />} />
        <Route path={"/chambres/:id"} element={<Chambres />} />
        <Route
          path={"/reservation/:id/:id_chambre"}
          element={<Reservation />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
