import React from 'react';
import { FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import '../styles/MapPreview.scss';

interface MapPreviewProps {
  onAccessMap: () => void;
}

const FaMapMarkerAltIcon = FaMapMarkerAlt as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const FaChevronRightIcon = FaChevronRight as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

const MapPreview: React.FC<MapPreviewProps> = ({ onAccessMap }) => {
  return (
    <div className="map-preview">
      {/* Cabeçalho do cartão */}
      <div className="map-header">
        <div className="map-title">
          <FaMapMarkerAltIcon className="title-icon" />
          <span>Visualização do Mapa</span>
        </div>
        <div className="view-full-map">
          <span>Ver mapa completo</span>
          <FaChevronRightIcon className="arrow-icon" />
        </div>
      </div>

      {/* Área cinza central */}
      <div className="map-content">
        <FaMapMarkerAltIcon className="map-content-icon" />
        <p>Visualize dados geoespaciais no mapa interativo</p>
        <button onClick={onAccessMap}>Acessar Mapa</button>
      </div>
    </div>
  );
};

export default MapPreview;
