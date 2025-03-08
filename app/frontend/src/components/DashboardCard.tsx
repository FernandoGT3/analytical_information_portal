// DashboardCard.tsx
import React from 'react';
import { IconType } from 'react-icons';
import { FaChartBar } from 'react-icons/fa';
import '../styles/DashboardCard.scss';

interface DashboardCardProps {
  title: string;
  value: string;
  variation?: string;
  icon?: IconType; // Mantemos IconType
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  variation,
  icon
}) => {
  // Se nenhum ícone for passado, usamos FaChartBar como default
  const IconComponent = icon || FaChartBar;

  // Força a tipagem para React.FC de SVG
  const IconComponentAsAny = IconComponent as unknown as React.FC<
    React.SVGProps<SVGSVGElement>
  >;

  return (
    <div className="dashboard-card">
      <div className="card-header">
        <IconComponentAsAny className="card-icon" />
        <h3>{title}</h3>
      </div>
      <p className="value">{value}</p>
      {variation && <p className="variation">{variation}</p>}
    </div>
  );
};

export default DashboardCard;
