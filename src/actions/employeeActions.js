// Déclaration du type d'action pour ajouter un employé
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

/**
 * Créateur d'action pour ajouter un employé
 * 
 * Cette fonction renvoie un objet action qui sera utilisé par Redux pour
 * ajouter un nouvel employé au store.
 * 
 * @param {Object} employee - Les détails de l'employé à ajouter
 * @returns {Object} Une action avec le type 'ADD_EMPLOYEE' et les données de l'employé
 */
export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE, // Le type d'action (obligatoire pour que Redux sache quoi faire)
    payload: employee    // Les données de l'employé à ajouter au store (la charge utile)
  };
};
