import React from 'react';
import '../styles/DashboardCard.scss';

interface DashboardCardProps {
  title: string;
  value: string;
  variation?: string; // Ex.: "+2.5% vs. mês anterior"
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, variation }) => {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      <p className="value">{value}</p>
      {variation && <p className="variation">{variation}</p>}
    </div>
  );
};

export default DashboardCard;
