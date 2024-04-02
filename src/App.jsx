import Board from "./Board";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="app">
      <h1>Min Kanban Board</h1>
      <Board /> {/* Board-komponenten inkluderas här */}
    </div>
  );
}

export default App;
