import logo from "./logo.svg";
import "./App.css";
import Q3 from "./redux/components/Q3";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./redux/components/Menu";
import Q4 from "./redux/components/Q4";
import Q5 from "./redux/components/Q5";
import Q6 from "./redux/components/Q6";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/pays" element={<Q3 />} />
          <Route path="/years" element={<Q4 />} />
          <Route path="/add/ville/:code" element={<Q5 />} />
          <Route path="/update/ville/:code" element={<Q5 />} />
          <Route path="/filter" element={<Q6 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
