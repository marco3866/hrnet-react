import React, { useState, useEffect } from 'react';
import SelectMenuComponent from '../../components/SelectMenuComponent/SelectMenuComponent';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';
// Importer votre plugin datepicker
import DatePicker from 'my-datepicker-plugin';
import './FormComponent.css';

const FormComponent = ({ onSubmit }) => {
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [departments, setDepartments] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [errors, setErrors] = useState({});
  const [showErrorModal, setShowErrorModal] = useState(false);

  // Charger les départements
  useEffect(() => {
    fetch('/Data/departments.json')
      .then((response) => response.json())
      .then((data) => {
        setDepartments(data);
        setSelectedDepartment(data[0]);
      });
  }, []);

  // Charger les états
  useEffect(() => {
    fetch('/Data/states.json')
      .then((response) => response.json())
      .then((data) => {
        setStates(data);
        setSelectedState(data[0].abbreviation);
      });
  }, []);

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.street) newErrors.street = 'Street is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.zipCode) newErrors.zipCode = 'Zip Code is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const employeeData = {
      firstName: e.target['first-name'].value,
      lastName: e.target['last-name'].value,
      dateOfBirth,
      startDate,
      department: selectedDepartment,
      street: e.target['street'].value,
      city: e.target['city'].value,
      state: selectedState,
      zipCode: e.target['zip-code'].value,
    };

    if (validateForm(employeeData)) {
      onSubmit(employeeData);
    } else {
      setShowErrorModal(true);
    }
  };

  const closeModal = () => {
    setShowErrorModal(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        {/* Last Name */}
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        {/* Date of Birth */}
        <DatePicker
          label="Date of Birth"
          selectedDate={dateOfBirth}
          onChange={setDateOfBirth}
        />

        {/* Start Date */}
        <DatePicker
          label="Start Date"
          selectedDate={startDate}
          onChange={setStartDate}
        />

        {/* Address Fields */}
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input type="text" id="street" />
          {errors.street && <p className="error">{errors.street}</p>}

          <label htmlFor="city">City</label>
          <input type="text" id="city" />
          {errors.city && <p className="error">{errors.city}</p>}

          <SelectMenuComponent
            label="State"
            options={states.map((state) => state.name)}
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input type="number" id="zip-code" />
          {errors.zipCode && <p className="error">{errors.zipCode}</p>}
        </fieldset>

        {/* Department */}
        <SelectMenuComponent
          label="Department"
          options={departments}
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        />

        <button type="submit">Save</button>
      </form>

      {showErrorModal && (
        <ConfirmationModal
          message="Certaines informations sont manquantes. Veuillez remplir tous les champs obligatoires."
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default FormComponent;