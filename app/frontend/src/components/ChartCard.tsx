import React from 'react';
import '../styles/ChartCard.scss';

interface ChartCardProps {
  title: string;
  chartImgSrc: string; // caminho da imagem do gráfico
}

const ChartCard: React.FC<ChartCardProps> = ({ title, chartImgSrc }) => {
  return (
    <div className="chart-card">
      <h3>{title}</h3>
      <img src={chartImgSrc} alt={title} />
    </div>
  );
};

export default ChartCard;
