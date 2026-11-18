import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * InlineEditPanel component allows inline editing of a value.
 * It auto-saves changes on blur or when the panel is closed.
 */
const InlineEditPanel = ({ value, onSave, onClose }) => {
  const [editValue, setEditValue] = useState(value);
  const [isSaving, setIsSaving] = useState(false);
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const hasSaved = useRef(false);

  // Save changes if value has changed
  const saveChanges = () => {
    if (!hasSaved.current && editValue !== value) {
      setIsSaving(true);
      Promise.resolve(onSave(editValue)).finally(() => {
        setIsSaving(false);
        hasSaved.current = true;
      });
    } else {
      hasSaved.current = true;
    }
  };

  // Handle blur on input
  const handleInputBlur = (e) => {
    // If focus is moving outside the panel, save
    if (
      panelRef.current &&
      !panelRef.current.contains(e.relatedTarget)
    ) {
      saveChanges();
      if (onClose) onClose();
    }
  };

  // Handle close button
  const handleClose = () => {
    saveChanges();
    if (onClose) onClose();
  };

  // Save on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target)
      ) {
        saveChanges();
        if (onClose) onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line
  }, []);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div ref={panelRef} className="inline-edit-panel">
      <input
        ref={inputRef}
        type="text"
        value={editValue}
        onChange={e => setEditValue(e.target.value)}
        onBlur={handleInputBlur}
        disabled={isSaving}
        className="inline-edit-input"
      />
      <button onClick={handleClose} disabled={isSaving} className="inline-edit-close">
        Close
      </button>
      {isSaving && <span className="inline-edit-saving">Saving...</span>}
    </div>
  );
};

InlineEditPanel.propTypes = {
  value: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func,
};

export default InlineEditPanel;
