import React, { useState } from "react";

const CardDetails = ({ card, show, onClose, onSave, columns }) => {
  const [cardContent, setCardContent] = useState(card.content || "");
  const [cardTitle, setCardTitle] = useState(card.title || "");
  const [selectedColumn, setSelectedColumn] = useState(
    card.column || "ToDoPage"
  );

  if (!show) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving card:", { title: cardTitle, content: cardContent });
    onSave({ title: cardTitle, content: cardContent }, selectedColumn);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Kort Detaljer</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="cardTitle"
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
            placeholder="Skriv din rubrik här"
          />
          <textarea
            className="cardContent"
            value={cardContent}
            onChange={(e) => setCardContent(e.target.value)}
            placeholder="Skriv innehållet för kortet"
          />
          <div className="status">
            <p>Välj status</p>
            <select
              value={selectedColumn}
              onChange={(e) => setSelectedColumn(e.target.value)}
            >
              {columns.map((column, index) => (
                <option key={index} value={column.name}>
                  {column.name}
                </option>
              ))}
            </select>
          </div>
          <div className="buttons">
            <button type="submit" onClick={handleSubmit}>
              Spara
            </button>
            <button onClick={onClose}>Stäng</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardDetails;
