import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import EmployeeList from './pages/EmployeeList/EmployeeList';
import HeaderMenu from './components/HeaderMenu/HeaderMenu'; // Import du HeaderMenu
import './App.css'; // Import des styles globaux

function App() {
  return (
    <Router>
      <div className="app">
        <HeaderMenu /> {/* Le menu est ajouté ici */}
        <header className="app-header">
          <h1>HRnet Employee Management</h1>
        </header>

        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

