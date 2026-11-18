import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * InlineEditPanel
 * Props:
 *   value: string (initial value)
 *   onSave: function(newValue)
 *   onClose: function()
 *   ...rest
 */
function InlineEditPanel({ value, onSave, onClose, ...rest }) {
  const [editValue, setEditValue] = useState(value);
  const [hasChanged, setHasChanged] = useState(false);
  const panelRef = useRef(null);
  const blurTimeout = useRef(null);

  // Save changes if value changed
  const autoSave = () => {
    if (hasChanged && editValue !== value) {
      onSave(editValue);
      setHasChanged(false);
    }
  };

  // Handle blur: save if changed
  const handleBlur = (e) => {
    // If focus moves outside the panel, save
    blurTimeout.current = setTimeout(() => {
      if (
        panelRef.current &&
        !panelRef.current.contains(document.activeElement)
      ) {
        autoSave();
        if (onClose) onClose();
      }
    }, 0);
  };

  // Handle close (e.g. close button, esc key)
  const handleClose = () => {
    autoSave();
    if (onClose) onClose();
  };

  // Clean up timeout
  useEffect(() => {
    return () => {
      if (blurTimeout.current) clearTimeout(blurTimeout.current);
    };
  }, []);

  // Listen for ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line
  }, [editValue, hasChanged]);

  // If value prop changes externally, update editValue
  useEffect(() => {
    setEditValue(value);
    setHasChanged(false);
  }, [value]);

  return (
    <div
      ref={panelRef}
      tabIndex={-1}
      onBlur={handleBlur}
      className="inline-edit-panel"
      {...rest}
    >
      <input
        type="text"
        value={editValue}
        onChange={e => {
          setEditValue(e.target.value);
          setHasChanged(true);
        }}
        onBlur={handleBlur}
        autoFocus
      />
      <button
        type="button"
        className="close-btn"
        onClick={handleClose}
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}

InlineEditPanel.propTypes = {
  value: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func,
};

export default InlineEditPanel;
