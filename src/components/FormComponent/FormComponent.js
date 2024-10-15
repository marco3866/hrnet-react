import React, { useState, useEffect } from 'react';
import SelectMenuComponent from '../../components/SelectMenuComponent/SelectMenuComponent'; // Importation du composant de sélection
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal'; // Importation de la modale de confirmation
import DatePicker from 'my-datepicker-plugin'; // Importation de votre plugin personnalisé
import './FormComponent.css'; // Importation du fichier CSS pour ce composant

/**
 * Composant Formulaire pour créer un employé
 * 
 * @param {function} onSubmit - Fonction appelée lors de la soumission du formulaire
 */
const FormComponent = ({ onSubmit }) => {
  // États pour gérer les données du formulaire
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [departments, setDepartments] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [errors, setErrors] = useState({});
  const [showErrorModal, setShowErrorModal] = useState(false); // État pour afficher ou non la modale d'erreur

  // Charger les départements depuis un fichier JSON
  useEffect(() => {
    fetch('/Data/departments.json') // Appel pour charger les départements
      .then((response) => response.json())
      .then((data) => {
        setDepartments(data); // Mise à jour de l'état des départements
        setSelectedDepartment(data[0]); // Sélection du premier département par défaut
      });
  }, []);

  // Charger les états depuis un fichier JSON
  useEffect(() => {
    fetch('/Data/states.json') // Appel pour charger les états (provinces/régions)
      .then((response) => response.json())
      .then((data) => {
        setStates(data); // Mise à jour de l'état des états
        setSelectedState(data[0].abbreviation); // Sélection du premier état par défaut
      });
  }, []);

  // Validation du formulaire
  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.street) newErrors.street = 'Street is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.zipCode) newErrors.zipCode = 'Zip Code is required';

    setErrors(newErrors); // Mise à jour des erreurs

    return Object.keys(newErrors).length === 0; // Retourne vrai si aucune erreur
  };

  // Gestion de la soumission du formulaire
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

    // Validation et envoi des données
    if (validateForm(employeeData)) {
      onSubmit(employeeData); // Envoi des données si valide
    } else {
      setShowErrorModal(true); // Afficher la modale si des erreurs sont présentes
    }
  };

  // Fonction pour fermer la modale d'erreur
  const closeModal = () => {
    setShowErrorModal(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />
        {errors.firstName && <p className="error">{errors.firstName}</p>} {/* Affichage de l'erreur si elle existe */}

        {/* Last Name */}
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />
        {errors.lastName && <p className="error">{errors.lastName}</p>} {/* Affichage de l'erreur */}

        {/* Champs pour les dates */}
        <div className="date-row">
          <DatePicker
            label="Date of Birth"
            selectedDate={dateOfBirth}
            onChange={setDateOfBirth} // Fonction pour mettre à jour la date de naissance
          />
          <DatePicker
            label="Start Date"
            selectedDate={startDate}
            onChange={setStartDate} // Fonction pour mettre à jour la date de début
          />
        </div>

        {/* Champs d'adresse */}
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
            options={states.map((state) => state.name)} // Options provenant de l'état 'states'
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)} // Fonction pour mettre à jour l'état sélectionné
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input type="number" id="zip-code" />
          {errors.zipCode && <p className="error">{errors.zipCode}</p>}
        </fieldset>

        {/* Département */}
        <SelectMenuComponent
          label="Department"
          options={departments} // Options provenant de l'état 'departments'
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)} // Fonction pour mettre à jour le département sélectionné
        />

        {/* Bouton pour soumettre */}
        <button type="submit">Save</button>
      </form>

      {/* Affichage de la modale d'erreur si nécessaire */}
      {showErrorModal && (
        <ConfirmationModal
          message="Certaines informations sont manquantes. Veuillez remplir tous les champs obligatoires."
          onClose={closeModal} // Fonction pour fermer la modale
        />
      )}
    </>
  );
};

export default FormComponent;
