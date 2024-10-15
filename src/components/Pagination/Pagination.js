// src/components/Pagination/Pagination.js
import React from 'react';
import './Pagination.css'; // Importation du fichier CSS pour le style

/**
 * Composant de pagination pour diviser l'affichage des employés en plusieurs pages
 * 
 * Props :
 * - employeesPerPage : le nombre d'employés affichés par page
 * - totalEmployees : le nombre total d'employés
 * - currentPage : la page actuellement affichée
 * - setCurrentPage : fonction pour changer la page actuelle
 */
const Pagination = ({ employeesPerPage, totalEmployees, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  // Calcul du nombre de pages nécessaires en fonction du nombre total d'employés et d'employés par page
  for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++) {
    pageNumbers.push(i); // Remplissage d'un tableau avec les numéros de page
  }

  return (
    <nav className="pagination-nav">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button 
              onClick={() => setCurrentPage(number)} 
              className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

