import React from 'react';
import DataTable from 'react-data-table-component';
import './DataTableComponent.css'; // Importing the CSS file for this component

const DataTableComponent = ({ data, columns }) => {
  return (
    <div className="data-table-container">
      <DataTable
        columns={columns}
        data={data}
        pagination
      />
    </div>
  );
};

export default DataTableComponent;
