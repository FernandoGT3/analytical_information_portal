import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardCard from './DashboardCard';
import ChartCard from './ChartCard';
import MapPreview from './MapPreview';

import { FaChartBar, FaSignal, FaWifi, FaDatabase } from 'react-icons/fa'; 

import '../styles/Home.scss';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Dados fictícios para o gráfico de Barras
  const monthlySalesData = [
    { name: 'Jan', vendas: 40 },
    { name: 'Fev', vendas: 70 },
    { name: 'Mar', vendas: 100 },
    { name: 'Abr', vendas: 90 },
    { name: 'Mai', vendas: 120 },
    { name: 'Jun', vendas: 80 },
  ];

  // Dados fictícios para o gráfico de Linhas
  const vendasInstalacoesData = [
    { name: 'Jan', vendas: 40, instalacoes: 25 },
    { name: 'Fev', vendas: 70, instalacoes: 45 },
    { name: 'Mar', vendas: 100, instalacoes: 60 },
    { name: 'Abr', vendas: 90, instalacoes: 55 },
    { name: 'Mai', vendas: 120, instalacoes: 75 },
    { name: 'Jun', vendas: 80, instalacoes: 50 },
  ];

  const handleAccessMap = () => {
    navigate('/map');
  };

  return (
    <div className="home-container">
      <div className="dashboard-header">
        <div className="titles">
          <h2>Dashboard</h2>
          <p>Visão geral dos principais indicadores</p>
        </div>
        <button className="map-button" onClick={handleAccessMap}>
          Acessar Mapa
        </button>
      </div>

      <div className="cards-row">
        <DashboardCard
          title="Vendas Totais"
          value="1,254"
          variation="+12.5% vs. mês anterior"
          icon={FaChartBar}
          positiveVariation={true}
        />
        <DashboardCard
          title="CTOs Disponíveis"
          value="843"
          variation="+1.5% vs. mês anterior"
          icon={FaSignal}
          positiveVariation={true}
        />
        <DashboardCard
          title="Taxa de Desconexão"
          value="2.4%"
          variation="-0.8% vs. mês anterior"
          icon={FaWifi}
          positiveVariation={false}
        />
        <DashboardCard
          title="HPs Cobertos"
          value="13,278"
          variation="+5.7% vs. mês anterior"
          icon={FaDatabase}
          positiveVariation={true}
        />
      </div>

      <div className="charts-row">
        <ChartCard
          title="Vendas Mensais"
          chartType="bar"
          data={monthlySalesData}
        />
        <ChartCard
          title="Vendas vs Instalações"
          chartType="line"
          data={vendasInstalacoesData}
        />
      </div>

      <MapPreview onAccessMap={handleAccessMap} />
    </div>
  );
};

export default Home;
