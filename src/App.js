import logo from "./logo.svg";
import "./App.css";
import IssueList from "./Components/IssueList";
import AddIssueForm from "./Components/AddIssueForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/list" element={<IssueList />} />
          <Route path="/add" element={<AddIssueForm />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
