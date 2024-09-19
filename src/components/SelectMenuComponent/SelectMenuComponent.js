import React from 'react';
import './SelectMenuComponent.css'; // Importing the CSS file for this component

const SelectMenuComponent = ({ label, options, value, onChange }) => {
  return (
    <div className="select-menu-container">
      <label>{label}</label>
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
