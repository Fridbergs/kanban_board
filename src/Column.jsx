import React, { useState } from "react";
import ReadViewModal from "./ReadViewModal";
import { Link } from "react-router-dom";

function Column({
  name,
  cards,
  addCard,
  onUpdate,
  handleRemoveCard,
  setColumns,
  columns,
}) {
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

  return (
    <div className="column">
      <h2>
        <Link to={`/${name}`}>{name}</Link>
      </h2>
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
        <ReadViewModal
          card={selectedCard}
          onClose={handleCloseModal}
          columnName={name}
          columns={columns}
          onUpdate={onUpdate}
          onRemoveCard={(cardId) => handleRemoveCard(cardId, name)}
        />
      )}
    </div>
  );
}

export default Column;
