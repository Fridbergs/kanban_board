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
  onRemoveCard,
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

  function handleCardUpdate(updatedCard) {
    console.log("Uppdaterat kort:", updatedCard);
    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (column.name === updatedCard.columnName) {
          return {
            ...column,
            cards: column.cards.map((card) =>
              card.id === updatedCard.id ? updatedCard : card
            ),
          };
        }
        return column;
      })
    );
  }

  const handleSaveCard = (card, selectedColumn) => {
    console.log("Saving card in column:", selectedColumn, "Card data:", card);
    addCard(selectedColumn || name, card.title, card.content);
    setShowCardModal(false); // Antagligen ska detta vara en annan modal, för att lägga till/redigera kort?
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
          onUpdate={handleCardUpdate}
          onRemoveCard={(cardId) => onRemove(cardId, name)}
        />
      )}
    </div>
  );
}

export default Column;
