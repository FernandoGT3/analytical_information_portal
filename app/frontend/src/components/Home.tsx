import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardCard from './DashboardCard';
import ChartCard from './ChartCard';
import MapPreview from './MapPreview';
import '../styles/Home.scss';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleAccessMap = () => {
    navigate('/map');
  };

  return (
    <div className="home-container">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <p>Visão geral dos principais indicadores</p>
      </div>

      <div className="cards-row">
        <DashboardCard 
          title="Vendas Totais" 
          value="1.254" 
          variation="+3.2% vs. mês anterior" 
        />
        <DashboardCard 
          title="CTOs Disponíveis" 
          value="843" 
          variation="+1.5% vs. mês anterior" 
        />
        <DashboardCard 
          title="Taxa de Desconexão" 
          value="2.4%" 
          variation="-0.8% vs. mês anterior" 
        />
        <DashboardCard 
          title="HPs Cobertos" 
          value="35" 
          variation="+2% vs. mês anterior" 
        />
      </div>

      <div className="charts-row">
        <ChartCard 
          title="Vendas Mensais" 
          chartImgSrc="/charts/bar-chart.png" 
        />
        <ChartCard 
          title="Vendas vs Instalações" 
          chartImgSrc="/charts/line-chart.png" 
        />
      </div>

      <MapPreview onAccessMap={handleAccessMap} />
    </div>
  );
};

export default Home;
