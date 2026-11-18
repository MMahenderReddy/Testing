import React, { useState } from 'react';
import Column from './Column';
import { moveCardApi } from '../services/api';

function Board({ columns, setColumns }) {
  const [draggedCard, setDraggedCard] = useState(null);
  const [dragOverColumn, setDragOverColumn] = useState(null);

  // Optimistically update UI on drop
  const handleDrop = (cardId, fromColumnId, toColumnId, toIndex) => {
    if (fromColumnId === toColumnId && draggedCard == null) return;
    // Find the card
    const card = columns
      .find(col => col.id === fromColumnId)
      .cards.find(c => c.id === cardId);
    if (!card) return;

    // Optimistically update columns
    const newColumns = columns.map(col => {
      if (col.id === fromColumnId) {
        return {
          ...col,
          cards: col.cards.filter(c => c.id !== cardId),
        };
      }
      if (col.id === toColumnId) {
        const newCards = [...col.cards];
        newCards.splice(toIndex, 0, card);
        return {
          ...col,
          cards: newCards,
        };
      }
      return col;
    });
    setColumns(newColumns);

    // Fire API call (no await)
    moveCardApi(cardId, fromColumnId, toColumnId, toIndex)
      .catch(() => {
        // Optionally: revert UI or show error
        // For now, just reload or refetch data
        // window.location.reload();
      });
  };

  return (
    <div className="board">
      {columns.map((column, idx) => (
        <Column
          key={column.id}
          column={column}
          columns={columns}
          setColumns={setColumns}
          onDrop={handleDrop}
          setDraggedCard={setDraggedCard}
          setDragOverColumn={setDragOverColumn}
          dragOverColumn={dragOverColumn}
        />
      ))}
    </div>
  );
}

export default Board;
