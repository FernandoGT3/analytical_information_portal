import React from 'react';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span>© 2025 VisualPlex. Todos os direitos reservados.</span>
      </div>
      <div className="footer-right">
        <a href="#dashboard">Dashboard</a>
        <a href="#map">Mapa</a>
        <a href="#suporte">Suporte</a>
      </div>
    </footer>
  );
};

export default Footer;
