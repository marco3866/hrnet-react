// src/components/SortFilter/SortFilter.js
import React from 'react';
import './SortFilter.css'; // Importation du fichier CSS pour le style

/**
 * Composant de filtre et tri pour les employés.
 * 
 * Props :
 * - sortCriteria : Le critère actuel de tri sélectionné
 * - setSortCriteria : Fonction permettant de mettre à jour le critère de tri
 */
const SortFilter = ({ sortCriteria, setSortCriteria }) => {

  // Fonction pour gérer le changement de critère de tri
  const handleSortChange = (e) => {
    setSortCriteria(e.target.value); // Mise à jour du critère de tri
  };

  return (
    <div className="sort-filter">
      {/* Label pour le menu déroulant de tri */}
      <label htmlFor="sort">Sort by: </label>
      
      {/* Menu déroulant permettant de sélectionner le critère de tri */}
      <select id="sort" value={sortCriteria} onChange={handleSortChange}>
        <option value="alphabetical">Alphabetical (A-Z)</option>
        <option value="reverse-alphabetical">Alphabetical (Z-A)</option>
        <option value="date">Date of Creation (Newest First)</option>
        <option value="reverse-date">Date of Creation (Oldest First)</option>
      </select>
    </div>
  );
};

export default SortFilter;
