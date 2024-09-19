// Action type
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

// Action creator for adding an employee
export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE,
    payload: employee
  };
};
