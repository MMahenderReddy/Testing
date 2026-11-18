import React, { useRef, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const CARD_HEIGHT = 80; // px, adjust as needed
const BUFFER = 5; // number of cards to render above and below viewport

function KanbanColumn({ title, cards }) {
  const scrollContainerRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(600); // default height

  const totalCards = cards.length;
  const totalHeight = totalCards * CARD_HEIGHT;

  const onScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      setScrollTop(scrollContainerRef.current.scrollTop);
    }
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      setContainerHeight(scrollContainerRef.current.clientHeight);
    }
  }, []);

  let startIndex = 0;
  let endIndex = totalCards - 1;

  if (totalCards > 50) {
    startIndex = Math.max(
      0,
      Math.floor(scrollTop / CARD_HEIGHT) - BUFFER
    );
    endIndex = Math.min(
      totalCards - 1,
      Math.ceil((scrollTop + containerHeight) / CARD_HEIGHT) + BUFFER
    );
  }

  const itemsToRender = cards.slice(startIndex, endIndex + 1);
  const paddingTop = startIndex * CARD_HEIGHT;
  const paddingBottom = (totalCards - endIndex - 1) * CARD_HEIGHT;

  return (
    <div className="kanban-column">
      <div className="kanban-column-title">{title}</div>
      <div
        className="kanban-column-scroll-container"
        ref={scrollContainerRef}
        style={{
          height: '600px',
          overflowY: 'auto',
          position: 'relative',
        }}
        onScroll={onScroll}
      >
        <div style={{ height: totalHeight, position: 'relative' }}>
          <div style={{ paddingTop, paddingBottom }}>
            {itemsToRender.map((card, idx) => (
              <div
                key={card.id || idx + startIndex}
                className="kanban-card"
                style={{
                  height: CARD_HEIGHT,
                  boxSizing: 'border-box',
                  marginBottom: 8,
                  background: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: 4,
                  padding: 12,
                  position: 'relative',
                }}
              >
                {card.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

KanbanColumn.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      content: PropTypes.node,
    })
  ).isRequired,
};

export default KanbanColumn;
