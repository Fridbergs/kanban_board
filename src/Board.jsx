import { useState } from "react";
import AddCard from "./AddCard";
import Column from "./Column";
import CardDetails from "./CardDetails";

const Board = () => {
  const [columns, setColumns] = useState([
    { name: "ToDoPage", cards: [] },
    { name: "In Progress", cards: [] },
    { name: "Done", cards: [] },
    // Lägg till fler kolumner vid behov
  ]);

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
