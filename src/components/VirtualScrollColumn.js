import React, { useRef, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const CARD_HEIGHT = 120; // px, adjust according to your card's height
const BUFFER = 5; // number of extra cards to render above and below

function VirtualScrollColumn({ cards, renderCard, columnId }) {
  const containerRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(600); // default height

  const totalHeight = cards.length * CARD_HEIGHT;

  const onScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.clientHeight);
    }
  }, []);

  const startIndex = Math.max(
    0,
    Math.floor(scrollTop / CARD_HEIGHT) - BUFFER
  );
  const visibleCount = Math.ceil(containerHeight / CARD_HEIGHT) + 2 * BUFFER;
  const endIndex = Math.min(cards.length, startIndex + visibleCount);

  const items = [];
  for (let i = startIndex; i < endIndex; i++) {
    items.push(
      <div
        key={cards[i].id}
        style={{
          position: 'absolute',
          top: i * CARD_HEIGHT,
          left: 0,
          right: 0,
          width: '100%',
        }}
      >
        {renderCard(cards[i], i, columnId)}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '100%',
        overflowY: 'auto',
        minHeight: '300px',
        maxHeight: '100vh',
        background: '#f7f7f7',
      }}
      onScroll={onScroll}
      data-testid={`virtual-scroll-column-${columnId}`}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>{items}</div>
    </div>
  );
}

VirtualScrollColumn.propTypes = {
  cards: PropTypes.array.isRequired,
  renderCard: PropTypes.func.isRequired,
  columnId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default VirtualScrollColumn;
