import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddCard from "./AddCard";
import Column from "./Column";
import { useTheme } from "./ThemeContext"; //

const Board = () => {
  const { columnName } = useParams();
  const { backgroundColor } = useTheme();
  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }

  const [columns, setColumns] = useState(() => {
    try {
      const savedColumns = localStorage.getItem("kanbanColumns");
      return savedColumns ? JSON.parse(savedColumns) : getDefaultColumns();
    } catch (error) {
      console.error("Failed to load columns from localStorage:", error);
      return getDefaultColumns();
    }
  });

  const filteredColumns = columnName
    ? columns.filter((column) => column.name === columnName)
    : columns;

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
            cards: [...column.cards, { id: generateId(), title, content }],
          };
        }
        return column;
      })
    );
  };

  const handleRemoveCard = (cardId, columnName) => {
    console.log(`Försöker ta bort kort ${cardId} från ${columnName}`);
    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (column.name === columnName) {
          return {
            ...column,
            cards: column.cards.filter((card) => card.id !== cardId),
          };
        }
        return column;
      })
    );
  };

  const handleCardUpdate = (updatedCard) => {
    setColumns((prevColumns) => {
      // Ta först bort kortet från dess nuvarande kolumn
      let newColumns = prevColumns.map((column) => ({
        ...column,
        cards: column.cards.filter((card) => card.id !== updatedCard.id),
      }));

      // Lägg sedan till kortet i den nya kolumnen
      return newColumns.map((column) => {
        if (column.name === updatedCard.columnName) {
          return {
            ...column,
            cards: [...column.cards, updatedCard],
          };
        }
        return column;
      });
    });
  };

  return (
    <div className="board" style={{ backgroundColor: backgroundColor }}>
      <AddCard addCard={addCard} columns={columns} />
      {filteredColumns.map((column, index) => (
        <Column
          key={index}
          name={column.name}
          cards={column.cards}
          addCard={addCard}
          columns={columns}
          setColumns={setColumns}
          onUpdate={handleCardUpdate}
          handleRemoveCard={handleRemoveCard}
        />
      ))}
    </div>
  );
};

export default Board;
