import React from 'react';
import '../styles/MapPreview.scss';

interface MapPreviewProps {
  onAccessMap: () => void;
}

const MapPreview: React.FC<MapPreviewProps> = ({ onAccessMap }) => {
  return (
    <div className="map-preview">
      <h3>Visualização do Mapa</h3>
      <div className="map-area">
        <p>Visualize dados geoespaciais no mapa interativo</p>
        <button onClick={onAccessMap}>Acessar Mapa</button>
      </div>
      <p className="view-full-map">Ver mapa completo</p>
    </div>
  );
};

export default MapPreview;
