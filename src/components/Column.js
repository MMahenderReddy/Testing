import React from 'react';
import Card from './Card';

function Column({ column, columns, setColumns, onDrop, setDraggedCard, setDragOverColumn, dragOverColumn }) {
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOverColumn(column.id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOverColumn(null);
    const cardId = e.dataTransfer.getData('cardId');
    const fromColumnId = e.dataTransfer.getData('fromColumnId');
    // Drop at the end of the column
    onDrop(cardId, fromColumnId, column.id, column.cards.length);
  };

  return (
    <div
      className={`column${dragOverColumn === column.id ? ' drag-over' : ''}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h2>{column.title}</h2>
      {column.cards.map((card, idx) => (
        <Card
          key={card.id}
          card={card}
          columnId={column.id}
          index={idx}
          onDrop={onDrop}
          setDraggedCard={setDraggedCard}
        />
      ))}
    </div>
  );
}

export default Column;
