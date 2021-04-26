import React from 'react';
import './navbar.css';

const Navbar = () => (
  <div className="navbar-section page-general-color">
    <div className="toggle-side-bar">
      <i className="fas fa-bars" />
    </div>
    <div className="logo-section">
      <img src="https://img.innoloft.de/logo.svg" alt="Logo" />
    </div>
    <div className="user-profile-section">
      <i
        className="fas fa-user"
      />
    </div>
  </div>
);

export default Navbar;
