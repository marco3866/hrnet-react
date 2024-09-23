import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerComponent.css'; // Importing the CSS file for this component

const DatePickerComponent = ({ label, selectedDate, onChange }) => {
  return (
    <div className="datepicker-container">
      <label>{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="MM/dd/yyyy"
      />
    </div>
  );
};

export default DatePickerComponent;
