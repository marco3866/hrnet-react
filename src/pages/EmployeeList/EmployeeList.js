// src/pages/EmployeeList/EmployeeList.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';
import SortFilter from '../../components/SortFilter/SortFilter';
import EntriesPerPage from '../../components/EntriesPerPage/EntriesPerPage';
import './EmployeeList.css';

const EmployeeList = () => {
  const employees = useSelector((state) => state.employee.employees);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [employeesPerPage, setEmployeesPerPage] = useState(5); // Default to 5 employees per page
  const [sortCriteria, setSortCriteria] = useState('alphabetical');

  // Filtrer les employés par la barre de recherche
  const filteredEmployees = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Trier les employés par "lastName"
  const sortedEmployees = filteredEmployees.sort((a, b) => {
    if (sortCriteria === 'alphabetical') {
      return a.lastName.localeCompare(b.lastName);
    } else if (sortCriteria === 'reverse-alphabetical') {
      return b.lastName.localeCompare(a.lastName);
    } else if (sortCriteria === 'date') {
      return new Date(b.startDate) - new Date(a.startDate);
    } else if (sortCriteria === 'reverse-date') {
      return new Date(a.startDate) - new Date(b.startDate);
    }
    return 0;
  });

  // Gestion de la pagination
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  return (
    <div className="employee-list-page">
      <h2>Employee List</h2>

      <div className="employee-controls">
        <SortFilter sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredEmployees={filteredEmployees.slice(0, 5)} />
        <EntriesPerPage employeesPerPage={employeesPerPage} setEmployeesPerPage={setEmployeesPerPage} />
      </div>

      {filteredEmployees.length > 0 ? (
        <>
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
              {currentEmployees.map((employee, index) => (
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
          <Pagination
            employeesPerPage={employeesPerPage}
            totalEmployees={filteredEmployees.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeList;
