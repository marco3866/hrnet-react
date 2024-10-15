// src/pages/EmployeeList/EmployeeList.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';
import SortFilter from '../../components/SortFilter/SortFilter';
import EntriesPerPage from '../../components/EntriesPerPage/EntriesPerPage';
import './EmployeeList.css';

const EmployeeList = () => {
  // Récupération des employés du store Redux
  const employees = useSelector((state) => state.employee.employees);

  // États pour gérer la pagination, la recherche, le nombre d'employés par page et le critère de tri
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [employeesPerPage, setEmployeesPerPage] = useState(5); // Par défaut, 5 employés par page
  const [sortCriteria, setSortCriteria] = useState('alphabetical'); // Critère de tri par défaut : ordre alphabétique

  // Filtrer les employés selon le terme de recherche saisi
  const filteredEmployees = employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || // Filtre par prénom
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) // Filtre par nom de famille
  );

  // Trier les employés selon le critère de tri sélectionné
  const sortedEmployees = filteredEmployees.sort((a, b) => {
    if (sortCriteria === 'alphabetical') {
      return a.lastName.localeCompare(b.lastName); // Tri par nom de famille (A-Z)
    } else if (sortCriteria === 'reverse-alphabetical') {
      return b.lastName.localeCompare(a.lastName); // Tri par nom de famille (Z-A)
    } else if (sortCriteria === 'date') {
      return new Date(b.startDate) - new Date(a.startDate); // Tri par date de début (nouveaux employés d'abord)
    } else if (sortCriteria === 'reverse-date') {
      return new Date(a.startDate) - new Date(b.startDate); // Tri par date de début (anciens employés d'abord)
    }
    return 0;
  });

  // Gestion de la pagination : définir l'index des employés à afficher sur la page actuelle
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee); // Extraction des employés à afficher sur la page

  return (
    <div className="employee-list-page">
      <h2>Employee List</h2>

      {/* Section des contrôles : tri, recherche et nombre d'entrées par page */}
      <div className="employee-controls">
        <SortFilter sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredEmployees={filteredEmployees.slice(0, 5)} />
        <EntriesPerPage employeesPerPage={employeesPerPage} setEmployeesPerPage={setEmployeesPerPage} />
      </div>

      {/* Affichage des employés filtrés et triés */}
      {filteredEmployees.length > 0 ? (
        <>
          {/* Table des employés */}
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
                  <td>{new Date(employee.dateOfBirth).toLocaleDateString()}</td> {/* Conversion des dates au format lisible */}
                  <td>{new Date(employee.startDate).toLocaleDateString()}</td>
                  <td>{employee.department}</td>
                  <td>{employee.street}</td>
                  <td>{employee.city}</td>
                  <td>{employee.state}</td>
                  <td>{employee.zipCode}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Composant de pagination */}
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