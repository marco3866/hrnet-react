import React from 'react';
import Modal from 'react-modal';
import './ModalComponent.css'; // Importation du fichier CSS pour le style

// Important pour l'accessibilité : définit l'élément racine de l'application
Modal.setAppElement('#root');

/**
 * Composant ModalComponent pour afficher une fenêtre modale
 * 
 * Props :
 * - isOpen : booléen indiquant si la modale est ouverte ou fermée
 * - onRequestClose : fonction appelée pour fermer la modale
 * - contentLabel : texte pour le titre de la modale (utile pour l'accessibilité)
 * - children : contenu à afficher dans la modale
 */
const ModalComponent = ({ isOpen, onRequestClose, contentLabel, children }) => {
  return (
    <Modal
      isOpen={isOpen} // Contrôle si la modale est visible ou non
      onRequestClose={onRequestClose} // Fonction déclenchée pour fermer la modale
      className="custom-modal" // Classe CSS pour la modale
      overlayClassName="custom-overlay" // Classe CSS pour le fond de la modale
      contentLabel={contentLabel} // Label pour l'accessibilité
    >
      <h2>{contentLabel}</h2>
      <div>{children}</div> {/* Contenu passé en tant qu'enfant de la modale */}
      <button onClick={onRequestClose}>Close</button> {/* Bouton pour fermer la modale */}
    </Modal>
  );
};

export default ModalComponent;
