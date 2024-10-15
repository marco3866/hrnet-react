// src/components/SelectMenuComponent/SelectMenuComponent.js
import React from 'react';
import './SelectMenuComponent.css'; // Importation du fichier CSS pour le style

/**
 * Composant de menu déroulant générique.
 * 
 * Props :
 * - label : Le texte du label associé au menu déroulant
 * - options : Un tableau d'options à afficher dans le menu déroulant
 * - value : La valeur sélectionnée
 * - onChange : Fonction de gestion des changements de sélection
 */
const SelectMenuComponent = ({ label, options, value, onChange }) => {
  return (
    <div className="select-menu-container">
      {/* Label associé au menu déroulant */}
      <label>{label}</label>
      
      {/* Menu déroulant (select) avec les options */}
      <select value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectMenuComponent;

