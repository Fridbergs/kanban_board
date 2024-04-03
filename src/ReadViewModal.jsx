import React from "react";

function ReadViewModal({ card, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{card.title}</h2>
        <p>{card.content}</p>
        {/* Här kan du lägga till mer information om kortet */}
        <button onClick={onClose}>Stäng</button>
      </div>
    </div>
  );
}

export default ReadViewModal;
