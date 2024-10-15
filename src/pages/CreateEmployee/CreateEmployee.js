import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Hook pour dispatcher des actions dans le store Redux
import FormComponent from '../../components/FormComponent/FormComponent'; // Import du composant Formulaire
import { addEmployee } from '../../actions/employeeActions'; // Import de l'action pour ajouter un employé
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal'; // Import de la popup de confirmation
import './CreateEmployee.css'; 

const CreateEmployee = () => {
  const dispatch = useDispatch(); // Initialisation du dispatch pour envoyer des actions à Redux
  const [showModal, setShowModal] = useState(false); // Gérer l'état de la popup (affiché ou non)

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (employeeData) => {
    dispatch(addEmployee(employeeData)); // Dispatch de l'action pour ajouter un employé dans le store Redux
    setShowModal(true); // Affichage de la popup de confirmation après soumission réussie
  };

  // Fonction pour fermer la popup de confirmation
  const closeModal = () => {
    setShowModal(false); // Fermeture de la popup
  };

  return (
    <div className="create-employee-page">
      <h2>Create Employee</h2>

      {/* FormComponent reçoit la fonction handleSubmit en tant que prop */}
      <FormComponent onSubmit={handleSubmit} />

      {/* Si l'état showModal est vrai, on affiche la popup de confirmation */}
      {showModal && (
        <ConfirmationModal
          message="Employé enregistré avec succès !" // Message affiché dans la popup
          onClose={closeModal} // Fonction appelée pour fermer la popup
        />
      )}
    </div>
  );
};

export default CreateEmployee;
