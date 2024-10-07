// src/components/SearchBar/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm, filteredEmployees }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search employees..."
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm.length >= 3 && filteredEmployees.length > 0 && (
        <ul className="search-results">
          {filteredEmployees.map((employee, index) => (
            <li key={index}>
              {employee.firstName} {employee.lastName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
