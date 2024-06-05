import logo from "./logo.svg";
import "./App.css";
import AddNoteForm from "./components/AddNoteForm";
import NoteList from "./components/NoteList";

function App() {
  return (
    <div className="App">
      <NoteList />
      <hr />
      <AddNoteForm />
    </div>
  );
}

export default App;
