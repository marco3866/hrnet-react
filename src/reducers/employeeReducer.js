import { ADD_EMPLOYEE } from '../actions/employeeActions';

const initialState = {
  employees: [] // Liste initiale vide
};

// Reducer pour gérer les actions liées aux employés
const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload] // Ajoute l'employé au tableau
      };
    default:
      return state;
  }
};

export default employeeReducer;
