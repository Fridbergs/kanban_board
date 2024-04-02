import React from "react";
import { useState } from "react";
import CardDetails from "./CardDetails";

function Column({ name, cards }) {
  console.log("Rendering cards for column:", name, cards);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveCard = (cardContent) => {
    addCard(name, cardContent);
    setShowModal(false);
  };

  return (
    <div className="column">
      <h2>{name}</h2>
      {cards.map((card, index) => (
        <div key={index} className="card">
          {card.content}
        </div>
      ))}
    </div>
  );
}

export default Column;
