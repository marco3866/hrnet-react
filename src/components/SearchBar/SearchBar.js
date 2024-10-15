// src/components/SearchBar/SearchBar.js
import React from 'react';
import './SearchBar.css'; // Importation du fichier CSS pour le style

/**
 * Composant barre de recherche
 * 
 * Props :
 * - searchTerm : terme recherché, contrôlé par l'état du parent
 * - setSearchTerm : fonction pour mettre à jour le terme recherché
 * - filteredEmployees : liste des employés filtrés selon le terme recherché
 */
const SearchBar = ({ searchTerm, setSearchTerm, filteredEmployees }) => {
  
  /**
   * Fonction qui se déclenche à chaque changement dans le champ de recherche
   * et met à jour le terme de recherche dans l'état parent.
   * 
   * @param {object} e - L'événement déclenché par l'utilisateur
   */
  const handleChange = (e) => {
    setSearchTerm(e.target.value); // Met à jour l'état du terme de recherche
  };

  return (
    <div className="search-bar">
      {/* Champ de saisie pour la recherche */}
      <input
        type="text"
        placeholder="Search employees..." // Texte d'invitation à rechercher
        value={searchTerm} // Valeur actuelle du champ de recherche
        onChange={handleChange} // Mise à jour du terme de recherche à chaque changement
      />
      
      {/* Affichage des résultats filtrés seulement après 3 caractères tapés */}
      {searchTerm.length >= 3 && filteredEmployees.length > 0 && (
        <ul className="search-results">
          {filteredEmployees.map((employee, index) => (
            <li key={index}>
              {employee.firstName} {employee.lastName} {/* Affichage du nom et prénom */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

