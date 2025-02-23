import React from 'react';
import { MapContainer, TileLayer, LayersControl, LayerGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/MapPage.scss';

const MapPage: React.FC = () => {
  return (
    <div className="map-page">
      <MapContainer center={[-23.5505, -46.6333]} zoom={12} style={{ height: '100vh' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <LayersControl position="topright">
          <LayersControl.Overlay name="CTO" checked>
            <LayerGroup>
              {/* Renderização da camada CTO, por exemplo, usando GeoJSON */}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Vendas" checked>
            <LayerGroup>
              {/* Renderização da camada Vendas */}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Desconexão">
            <LayerGroup>
              {/* Renderização da camada Desconexão */}
            </LayerGroup>
          </LayersControl.Overlay>
          {/* Outras camadas: Surveys, HPs, HCs */}
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default MapPage;
