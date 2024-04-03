import React from "react";
import { useState } from "react";
import CardDetails from "./CardDetails";

function Column({ name, cards, addCard }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveCard = (card, selectedColumn) => {
    console.log("Saving card in column:", selectedColumn, "Card data:", card); // För felsökning
    addCard(selectedColumn || name, card.title, card.content);
    setShowModal(false);
  };

  return (
    <div className="column">
      <h2>{name}</h2>
      {cards.map((card, index) => (
        <div key={index} className="card">
          <h3>{card.title}</h3> {/* Rendera titeln */}
          <p>{card.content}</p> {/* Rendera innehållet */}
        </div>
      ))}
    </div>
  );
}

export default Column;
