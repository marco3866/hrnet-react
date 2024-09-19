import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderMenu.css'; // Importing CSS for styling

const HeaderMenu = () => {
  return (
    <header className="header-menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Create Employee</Link>
          </li>
          <li>
            <Link to="/employee-list">Employee List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMenu;
