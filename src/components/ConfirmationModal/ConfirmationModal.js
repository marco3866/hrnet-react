import React from 'react';
import './ConfirmationModal.css';

const ConfirmationModal = ({ message, onClose }) => {
  return (
    <div className="confirmation-modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
