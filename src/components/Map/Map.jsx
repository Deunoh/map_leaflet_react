/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { iconMappings, marqueurs } from './constantes';
import './Map.scss';

const Map = () => {
  const [selectedType, setSelectedType] = useState('Tous');

  const getCustomIcon = (type) => {
    return new Icon(iconMappings[type]);
  };

  const typeOptions = ['Tous', ...Object.keys(iconMappings).sort()];

  const filteredMarkers = marqueurs.filter(
    (marker) => selectedType === 'Tous' || marker.type === selectedType
  );

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };
  const Beauvais = [49.4300997, 2.0823355]; // a mettre dans le state pour definir le lieu par défaut
  return (
    <section className="info-carte">
      <div>
        <label htmlFor="filter">Filtrer par: </label>
        <select id="filter" onChange={handleTypeChange} value={selectedType}>
          {typeOptions.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <MapContainer
        center={Beauvais}
        zoom={13}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerClusterGroup>
          {filteredMarkers.map((city) => (
            <Marker
              key={city.id}
              position={city.coordinates}
              icon={getCustomIcon(city.type)}
            >
              <Popup>{city.description}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </section>
  );
};

export default Map;

// https://www.linkedin.com/pulse/tutoriel-sur-lutilisation-de-leaflet-avec-react-christian-humbert-qoyhe/
