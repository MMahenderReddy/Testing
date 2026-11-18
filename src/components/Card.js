import React from 'react';

function Card({ card, columnId, index, onDrop, setDraggedCard }) {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('cardId', card.id);
    e.dataTransfer.setData('fromColumnId', columnId);
    setDraggedCard(card.id);
  };

  const handleDragEnd = () => {
    setDraggedCard(null);
  };

  const handleDrop = (e) => {
    e.stopPropagation();
    const cardId = e.dataTransfer.getData('cardId');
    const fromColumnId = e.dataTransfer.getData('fromColumnId');
    if (cardId === card.id) return; // Don't drop onto itself
    // Drop before this card
    onDrop(cardId, fromColumnId, columnId, index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="card"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {card.title}
    </div>
  );
}

export default Card;
