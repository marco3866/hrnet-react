import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux store
import './EmployeeList.css';

const EmployeeList = () => {
  const employees = useSelector(state => state.employee.employees); // Access the employees from the Redux store

  return (
    <div className="employee-list-page">
      <h2>Employee List</h2>
      {employees.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Start Date</th>
              <th>Department</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.dateOfBirth.toLocaleDateString()}</td>
                <td>{employee.startDate.toLocaleDateString()}</td>
                <td>{employee.department}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.zipCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeList;
