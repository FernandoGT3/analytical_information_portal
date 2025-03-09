import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from 'recharts';
import { IconType } from 'react-icons';
import { FaChartBar, FaChartLine } from 'react-icons/fa';
import '../styles/ChartCard.scss';

// Forçando a tipagem para componentes React de SVG, caso necessário
const FaChartBarIcon = FaChartBar as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const FaChartLineIcon = FaChartLine as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

interface ChartData {
  name: string;
  vendas: number;
  instalacoes?: number;
}

interface ChartCardProps {
  title: string;
  chartType: 'bar' | 'line';
  data: ChartData[];
  icon?: IconType; // Ícone opcional
}

const ChartCard: React.FC<ChartCardProps> = ({ title, chartType, data, icon }) => {
  // Caso nenhum ícone seja passado, define ícones padrão dependendo do tipo
  let IconComponent = icon;
  if (!IconComponent) {
    IconComponent = chartType === 'bar' ? FaChartBarIcon : FaChartLineIcon;
  }

  // Força a tipagem se estiver usando IconType
  const IconCast = IconComponent as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <IconCast className="chart-icon" />
        <h3>{title}</h3>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={280}>
          {chartType === 'bar' ? (
            <BarChart
              data={data}
              margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="name"
                stroke="#666"
                tick={{ fill: '#666', fontFamily: 'Roboto', fontSize: 12 }}
              />
              <YAxis
                stroke="#666"
                tick={{ fill: '#666', fontFamily: 'Roboto', fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{ fontSize: 12, fontFamily: 'Roboto' }}
              />
              <Legend
                wrapperStyle={{
                  fontSize: 12,
                  fontFamily: 'Roboto',
                  color: '#666',
                }}
              />
              <Bar dataKey="vendas" name="vendas" fill="#3498db" barSize={75} radius={[6, 6, 0, 0]} />
            </BarChart>
          ) : (
            <LineChart
              data={data}
              margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="name"
                stroke="#666"
                tick={{ fill: '#666', fontFamily: 'Roboto', fontSize: 12 }}
              />
              <YAxis
                stroke="#666"
                tick={{ fill: '#666', fontFamily: 'Roboto', fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{ fontSize: 12, fontFamily: 'Roboto' }}
              />
              <Legend
                wrapperStyle={{
                  fontSize: 12,
                  fontFamily: 'Roboto',
                  color: '#666',
                }}
              />
              <Line
                type="monotone"
                dataKey="vendas"
                name="vendas"
                stroke="#3498db"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="instalacoes"
                name="instalações"
                stroke="#2ecc71"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;
