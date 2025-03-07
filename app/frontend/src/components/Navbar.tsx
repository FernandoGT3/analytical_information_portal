import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>VisualPlex</h2>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/map">Mapa</Link>
        </li>
      </ul>
      <div className="navbar-actions">
        <Link to="/map" className="btn-map-access">
          Acessar Mapa
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
