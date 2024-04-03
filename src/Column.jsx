import React, { useState } from "react";
import ReadViewModal from "./ReadViewModal";

function Column({ name, cards, addCard }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showCardModal, setShowCardModal] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShowCardModal(true);
  };

  const handleCloseModal = () => {
    setShowCardModal(false);
    setSelectedCard(null);
  };

  const handleSaveCard = (card, selectedColumn) => {
    console.log("Saving card in column:", selectedColumn, "Card data:", card);
    addCard(selectedColumn || name, card.title, card.content);
    setShowCardModal(false); // Antagligen ska detta vara en annan modal, för att lägga till/redigera kort?
  };

  return (
    <div className="column">
      <h2>{name}</h2>
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          onClick={() => handleCardClick(card)}
        >
          <h3>{card.title}</h3>
          <p>{card.content}</p>
        </div>
      ))}
      {showCardModal && selectedCard && (
        <ReadViewModal card={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Column;
