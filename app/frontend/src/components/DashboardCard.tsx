// DashboardCard.tsx
import React from 'react';
import { IconType } from 'react-icons';
import { FaChartBar } from 'react-icons/fa';
import '../styles/DashboardCard.scss';

interface DashboardCardProps {
  title: string;
  value: string;
  variation?: string; // Ex.: "+3.2% vs. mês anterior"
  icon?: IconType;    // Ícone do react-icons
  positiveVariation?: boolean; // Para colorir em verde ou vermelho
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  variation,
  icon: Icon,
  positiveVariation = true,
}) => {
  // Se nenhum ícone for passado, usamos FaChartBar como default
  const IconComponent = Icon || FaChartBar;

  // Força a tipagem para React.FC de SVG
  const IconCast = IconComponent as unknown as React.FC<
    React.SVGProps<SVGSVGElement>
  >;

  return (
    <div className="dashboard-card">
      {Icon && <IconCast className="card-icon" />}
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        <p className="card-value">{value}</p>
        {variation && (
          <p className={`card-variation ${positiveVariation ? 'positive' : 'negative'}`}>
            {variation}
          </p>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
