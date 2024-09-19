import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormComponent from '../../components/FormComponent/FormComponent';
import { addEmployee } from '../../actions/employeeActions';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal'; // Import de la popup
import './CreateEmployee.css';

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false); // Gérer l'état de la popup

  const handleSubmit = (employeeData) => {
    dispatch(addEmployee(employeeData)); // Dispatch l'action pour ajouter l'employé
    setShowModal(true); // Affiche la popup de confirmation après l'enregistrement
  };

  const closeModal = () => {
    setShowModal(false); // Ferme la popup
  };

  return (
    <div className="create-employee-page">
      <h2>Create Employee</h2>
      <FormComponent onSubmit={handleSubmit} />

      {/* Affichage de la popup si l'employé est enregistré */}
      {showModal && (
        <ConfirmationModal
          message="Employé enregistré avec succès !"
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default CreateEmployee;
