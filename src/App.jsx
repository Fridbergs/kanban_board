import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Board from "./Board";
import "./App.css";
import "./index.css";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggler from "./ThemeToggler";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Link to="/" className="homeLink">
            <h1>Min Kanban Board</h1>
          </Link>
          <ThemeToggler />
          <Routes>
            <Route path="/:columnName" element={<Board />} />
            <Route path="/" element={<Board />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
