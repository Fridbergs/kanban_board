import React, { useState } from "react";
import CardDetails from "./CardDetails";

function AddCard({ addCard, columns }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveCard = (cardContent, selectedColumn) => {
    addCard(selectedColumn, cardContent);
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Lägg till Kort</button>
      {showModal && (
        <CardDetails
          card={{ content: "" }}
          show={showModal}
          onClose={handleCloseModal}
          onSave={handleSaveCard}
          columns={columns}
          // Här kan du lägga till fler props som behövs för CardDetails
        />
      )}
    </div>
  );
}

export default AddCard;
