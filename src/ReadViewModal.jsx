import React, { useState } from "react";

function ReadViewModal({ card, onClose }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(card.title);
  const [content, setContent] = useState(card.content);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Spara ändringar
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        {isEditing ? (
          <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleSaveClick}>Spara Ändringar</button>
          </div>
        ) : (
          <div>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            <button onClick={handleEditClick}>Redigera</button>
          </div>
        )}
        <button onClick={onClose}>Stäng</button>
      </div>
    </div>
  );
}

export default ReadViewModal;
