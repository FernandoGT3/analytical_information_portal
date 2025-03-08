import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleAccessMap = () => {
    navigate('/map');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">VisualPlex</div>
      <div className="navbar-links">
        <Link to="/">Dashboard</Link>
        <Link to="/map">Mapa</Link>
        <button onClick={handleAccessMap}>Acessar Mapa</button>
      </div>
    </nav>
  );
};

export default Navbar;
