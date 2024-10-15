import React from 'react';
import DataTable from 'react-data-table-component';
import './DataTableComponent.css'; // Importing the CSS file for this component

/**
 * Composant de tableau de données avec pagination
 * 
 * Ce composant affiche un tableau de données utilisant la bibliothèque `react-data-table-component`,
 * avec pagination incluse par défaut.
 * 
 * @param {Array} data - Les données à afficher dans le tableau
 * @param {Array} columns - La définition des colonnes du tableau
 */
const DataTableComponent = ({ data, columns }) => {
  return (
    <div className="data-table-container"> {/* Conteneur principal pour le style */}
      <DataTable
        columns={columns}  // Les colonnes du tableau, définies par le parent
        data={data}        // Les données du tableau, définies par le parent
        pagination         // Active la pagination par défaut
      />
    </div>
  );
};

export default DataTableComponent;
