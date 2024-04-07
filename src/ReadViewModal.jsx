import React, { useState } from "react";

function ReadViewModal({
  card,
  onClose,
  onUpdate,
  onRemoveCard,
  columnName,
  columns,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(card.title);
  const [content, setContent] = useState(card.content);
  const [selectedColumn, setSelectedColumn] = useState(card.columnName);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const updatedCard = {
      id: card.id,
      title,
      content,
      columnName: selectedColumn,
    };
    onUpdate(updatedCard);
    setIsEditing(false);
    onClose();
  };

  const handleRemoveClick = () => {
    onRemoveCard(card.id);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        {isEditing ? (
          <div className="editDiv">
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />{" "}
            <select
              value={selectedColumn}
              onChange={(e) => setSelectedColumn(e.target.value)}
            >
              {columns.map((column) => (
                <option key={column.name} value={column.name}>
                  {column.name}
                </option>
              ))}
            </select>
            <button onClick={handleSaveClick}>Spara Ändringar</button>
          </div>
        ) : (
          <div>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            <div className="buttons">
              <button onClick={handleEditClick}>Redigera</button>
              <button onClick={handleRemoveClick}>Ta bort</button>{" "}
              <button onClick={onClose}>Stäng</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReadViewModal;
