import { useState, useEffect } from "react";
import AddCard from "./AddCard";
import Column from "./Column";
import CardDetails from "./CardDetails";

const Board = () => {
  const [columns, setColumns] = useState(() => {
    try {
      const savedColumns = localStorage.getItem("kanbanColumns");
      return savedColumns ? JSON.parse(savedColumns) : getDefaultColumns();
    } catch (error) {
      console.error("Failed to load columns from localStorage:", error);
      return getDefaultColumns();
    }
  });

  function getDefaultColumns() {
    return [
      { name: "ToDoPage", cards: [] },
      { name: "In Progress", cards: [] },
      { name: "Done", cards: [] },
      // Lägg till fler kolumner vid behov
    ];
  }

  // Uppdatera localStorage när 'columns' ändras
  useEffect(() => {
    localStorage.setItem("kanbanColumns", JSON.stringify(columns));
  }, [columns]);

  // Använd denna funktion för att lägga till ett kort i en specifik kolumn
  const addCard = (columnName, title, content) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (column.name === columnName) {
          return {
            ...column,
            cards: [...column.cards, { title, content }],
          };
        }
        return column;
      })
    );
  };

  return (
    <div className="board">
      <AddCard addCard={addCard} columns={columns} />
      {columns.map((column, index) => (
        <Column
          key={index}
          name={column.name}
          cards={column.cards}
          addCard={addCard}
        />
      ))}
    </div>
  );
};

export default Board;
