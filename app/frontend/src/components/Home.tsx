import React from 'react';
import DashboardCard from './DashboardCard';
import { useHistory } from 'react-router-dom';
import '../styles/Home.scss';

const Home: React.FC = () => {
  const history = useHistory();

  const handleMapAccess = () => {
    history.push('/map');
  };

  return (
    <div className="home-page">
      <div className="dashboard-cards">
        <DashboardCard title="Vendas Totais" value="R$ 1.000.000" />
        <DashboardCard title="CTOs Disponíveis" value="15" />
        {/* Outros cards com métricas */}
      </div>
      <div className="preview-charts">
        <img src="/charts/bar-chart.png" alt="Gráfico de Barras" />
      </div>
      <button className="btn-map" onClick={handleMapAccess}>
        Acessar Mapa
      </button>
    </div>
  );
};

export default Home;
