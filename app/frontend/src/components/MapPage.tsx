import React, { useState } from 'react';
import { FaDownload, FaShareAlt, FaMapMarkedAlt, FaLayerGroup } from 'react-icons/fa';
import '../styles/MapPage.scss';

// Forçando a tipagem dos ícones para React.FC<SVGProps<SVGSVGElement>>
const FaDownloadIcon = FaDownload as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const FaShareAltIcon = FaShareAlt as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const FaMapMarkedAltIcon = FaMapMarkedAlt as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const FaLayerGroupIcon = FaLayerGroup as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

const MapPage: React.FC = () => {
  // Estado de camadas ativas
  const [activeLayers, setActiveLayers] = useState<string[]>(['CTO']);

  // Lista de camadas com cores
  const layers = [
    { name: 'CTO', color: '#007bff' },
    { name: 'Vendas', color: '#ffc107' },
    { name: 'Desconexão', color: '#dc3545' },
    { name: 'Surveys', color: '#e83e8c' },
    { name: 'HPs', color: '#28a745' },
    { name: 'HCs', color: '#17a2b8' },
  ];

  const toggleLayer = (layerName: string) => {
    setActiveLayers((prev) =>
      prev.includes(layerName)
        ? prev.filter((ln) => ln !== layerName)
        : [...prev, layerName]
    );
  };

  return (
    <div className="map-page">
      {/* Título e subtítulo */}
      <div className="map-page-header">
        <h2>Mapa Interativo</h2>
        <p>Visualize dados geoespaciais por camadas</p>
      </div>

      <div className="map-page-content">
        {/* Painel lateral */}
        <aside className="map-sidebar">
        <h3>
          <FaLayerGroupIcon className="layer-icon" />
          Camadas
        </h3>
          <ul className="layers-list">
            {layers.map((layer) => (
              <li key={layer.name}>
                <label>
                  <input
                    type="checkbox"
                    checked={activeLayers.includes(layer.name)}
                    onChange={() => toggleLayer(layer.name)}
                  />
                  <span
                    className="layer-color"
                    style={{ backgroundColor: layer.color }}
                  />
                  {layer.name}
                </label>
              </li>
            ))}
          </ul>

          <div className="sidebar-actions">
            <button className="download-btn">
              <FaDownloadIcon className="btn-icon" />
              Baixar Dados
            </button>
            <button className="share-btn">
              <FaShareAltIcon className="btn-icon" />
              Compartilhar
            </button>
          </div>
        </aside>

        {/* Área do mapa */}
        <section className="map-view">
          <FaMapMarkedAltIcon className="map-icon" />
          <h4>Visualização do Mapa</h4>
          <span className="active-layers">
            Camadas ativas: {activeLayers.join(', ') || 'Nenhuma'}
          </span>
        </section>
      </div>
    </div>
  );
};

export default MapPage;
