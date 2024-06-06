import logo from "./logo.svg";
import "./App.css";
import ListVoyages from "./components/ListVoyages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsVoyage from "./components/DetailsVoyage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListVoyages />} />
          <Route path="/voyage/:id" element={<DetailsVoyage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
