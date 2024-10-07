// src/components/EntriesPerPage/EntriesPerPage.js
import React from 'react';
import './EntriesPerPage.css';

const EntriesPerPage = ({ employeesPerPage, setEmployeesPerPage }) => {
  const handleEntriesChange = (e) => {
    setEmployeesPerPage(Number(e.target.value));
  };

  return (
    <div className="entries-per-page">
      <label htmlFor="entries">Show: </label>
      <select id="entries" value={employeesPerPage} onChange={handleEntriesChange}>
        <option value="5">5 entries per page</option>
        <option value="10">10 entries per page</option>
        <option value="20">20 entries per page</option>
      </select>
    </div>
  );
};

export default EntriesPerPage;
