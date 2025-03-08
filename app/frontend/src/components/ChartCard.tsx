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
import { FaChartBar, FaChartLine } from 'react-icons/fa';
import '../styles/ChartCard.scss';

// Converter o FaChartLine se necessário (erro de tipagem) - só se precisar:
const ChartLineIcon = FaChartLine as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const ChartBarIcon = FaChartBar as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

interface ChartData {
  name: string;
  vendas: number;
  instalacoes?: number;
}

interface ChartCardProps {
  title: string;
  chartType: 'bar' | 'line';
  data: ChartData[];
}

const ChartCard: React.FC<ChartCardProps> = ({ title, chartType, data }) => {
  return (
    <div className="chart-card">
      <div className="chart-card-header">
        {chartType === 'bar' ? (
          <ChartBarIcon className="chart-icon" />
        ) : (
          <ChartLineIcon className="chart-icon" />
        )}
        <h3>{title}</h3>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          {chartType === 'bar' ? (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                stroke="#333"
                tick={{ fill: '#333', fontFamily: 'Roboto', fontSize: 12 }}
              />
              <YAxis
                stroke="#333"
                tick={{ fill: '#333', fontFamily: 'Roboto', fontSize: 12 }}
              />
              <Tooltip />
              <Legend
                wrapperStyle={{
                  color: '#666',
                  fontFamily: 'Roboto',
                  fontSize: 12,
                }}
              />
              <Bar dataKey="vendas" fill="#3498db" />
            </BarChart>
          ) : (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                stroke="#333"
                tick={{ fill: '#333', fontFamily: 'Roboto', fontSize: 12 }}
              />
              <YAxis
                stroke="#333"
                tick={{ fill: '#333', fontFamily: 'Roboto', fontSize: 12 }}
              />
              <Tooltip />
              <Legend
                wrapperStyle={{
                  color: '#666',
                  fontFamily: 'Roboto',
                  fontSize: 12,
                }}
              />
              <Line
                type="monotone"
                dataKey="vendas"
                stroke="#3498db"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="instalacoes"
                stroke="#2ecc71"
                strokeWidth={2}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;
