import React, { useState, useEffect } from 'react';
import DatePickerComponent from '../../components/DatePickerComponent/DatePickerComponent';
import SelectMenuComponent from '../../components/SelectMenuComponent/SelectMenuComponent';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';
import './FormComponent.css';

const FormComponent = ({ onSubmit }) => {
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [departments, setDepartments] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [errors, setErrors] = useState({});
  const [showErrorModal, setShowErrorModal] = useState(false); // État pour gérer la popup d'erreur

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
      zipCode: e.target['zip-code'].value
    };

    if (validateForm(employeeData)) {
      onSubmit(employeeData); // Si le formulaire est valide, soumettre les données
    } else {
      setShowErrorModal(true); // Afficher la popup si le formulaire n'est pas valide
    }
  };

  const closeModal = () => {
    setShowErrorModal(false); // Fermer la popup d'erreur
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />
        {errors.firstName && <p className="error">{errors.firstName}</p>} {/* Affiche l'erreur */}

        {/* Last Name */}
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />
        {errors.lastName && <p className="error">{errors.lastName}</p>} {/* Affiche l'erreur */}

        {/* Date of Birth */}
        <DatePickerComponent
          label="Date of Birth"
          selectedDate={dateOfBirth}
          onChange={setDateOfBirth}
        />

        {/* Start Date */}
        <DatePickerComponent
          label="Start Date"
          selectedDate={startDate}
          onChange={setStartDate}
        />

        {/* Address Fields */}
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input type="text" id="street" />
          {errors.street && <p className="error">{errors.street}</p>} {/* Affiche l'erreur */}

          <label htmlFor="city">City</label>
          <input type="text" id="city" />
          {errors.city && <p className="error">{errors.city}</p>} {/* Affiche l'erreur */}

          <SelectMenuComponent
            label="State"
            options={states.map((state) => state.name)}
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input type="number" id="zip-code" />
          {errors.zipCode && <p className="error">{errors.zipCode}</p>} {/* Affiche l'erreur */}
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

      {/* Modale d'erreur */}
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
