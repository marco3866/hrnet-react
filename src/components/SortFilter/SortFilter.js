// src/components/SortFilter/SortFilter.js
import React from 'react';
import './SortFilter.css';

const SortFilter = ({ sortCriteria, setSortCriteria }) => {
  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  return (
    <div className="sort-filter">
      <label htmlFor="sort">Sort by: </label>
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
