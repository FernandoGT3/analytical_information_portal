import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Seção esquerda: Marca e descrição */}
      <div className="footer-left">
        <strong className="footer-brand">Portal Analytics Fibrasil</strong>
        <span className="footer-description">Portal de Análise de Dados</span>
      </div>

      {/* Seção central: Direitos autorais */}
      <div className="footer-center">
        © 2025 Luiz Moloni. Todos os direitos reservados.
      </div>

      {/* Seção direita: Links */}
      <div className="footer-right">
        <Link to="/">Dashboard</Link>
        <Link to="/map">Mapa</Link>
        <Link to="/support">Suporte</Link>
      </div>
    </footer>
  );
};

export default Footer;
