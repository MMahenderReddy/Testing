import React, { useRef, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

const CARD_HEIGHT = 80; // px, adjust to your card's actual height
const BUFFER = 5; // Number of extra cards to render above and below

function KanbanColumn({ title, cards }) {
  const containerRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.clientHeight);
    }
  }, []);

  // Virtualization logic
  let visibleCards = cards;
  let start = 0;
  let end = cards.length;
  let paddingTop = 0;
  let paddingBottom = 0;

  if (cards.length > 50) {
    const visibleCount = Math.ceil(containerHeight / CARD_HEIGHT) + 2 * BUFFER;
    start = Math.max(0, Math.floor(scrollTop / CARD_HEIGHT) - BUFFER);
    end = Math.min(cards.length, start + visibleCount);
    visibleCards = cards.slice(start, end);
    paddingTop = start * CARD_HEIGHT;
    paddingBottom = (cards.length - end) * CARD_HEIGHT;
  }

  return (
    <div className="kanban-column">
      <div className="kanban-column-title">{title}</div>
      <div
        className="kanban-column-cards"
        ref={containerRef}
        style={{
          overflowY: cards.length > 50 ? 'auto' : 'visible',
          maxHeight: cards.length > 50 ? '600px' : 'none',
        }}
        onScroll={cards.length > 50 ? handleScroll : undefined}
        data-testid="kanban-column-cards"
      >
        {cards.length > 50 && paddingTop > 0 && (
          <div style={{ height: paddingTop }} />
        )}
        {visibleCards.map((card, idx) => (
          <div
            className="kanban-card"
            key={card.id || `${start + idx}`}
            style={{ height: CARD_HEIGHT }}
          >
            {card.content}
          </div>
        ))}
        {cards.length > 50 && paddingBottom > 0 && (
          <div style={{ height: paddingBottom }} />
        )}
      </div>
    </div>
  );
}

KanbanColumn.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default KanbanColumn;
