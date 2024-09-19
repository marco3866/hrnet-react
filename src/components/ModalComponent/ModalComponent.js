import React from 'react';
import Modal from 'react-modal';
import './ModalComponent.css'; // Importing the CSS file for this component

Modal.setAppElement('#root'); // Necessary for accessibility

const ModalComponent = ({ isOpen, onRequestClose, contentLabel, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="custom-modal"
      overlayClassName="custom-overlay"
      contentLabel={contentLabel}
    >
      <h2>{contentLabel}</h2>
      <div>{children}</div>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ModalComponent;
