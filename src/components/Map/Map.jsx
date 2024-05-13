/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { iconMappings, marqueurs } from './constantes';
import './Map.scss';
import LocationMarker from './LocationMarker';

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
  const Strasbourg = [48.584614, 7.7507127]; // a mettre dans le state pour definir le lieu par défaut
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
        center={Strasbourg}
        zoom={13}
        style={{ height: '500px', width: '100%' }}
      >
        {/* alternative skin for the map */}
        <TileLayer
          url="https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=b55abed522d84edb9019094f729d1a50"
          attribution='&copy; <a href="https://www.thunderforest.com/maps/mobile-atlas/">Thunderforest.MobileAtlas</a> contributors'
        />

        {/* Default skin */}
        {/* <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        /> */}
        <MarkerClusterGroup>
          {filteredMarkers.map((city) => (
            <Marker
              key={city.id}
              position={city.coordinates}
              icon={getCustomIcon(city.type)}
            >
              <Popup>
                {city.name}
                {city.description}
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
        <LocationMarker />
      </MapContainer>
    </section>
  );
};

export default Map;

// https://www.linkedin.com/pulse/tutoriel-sur-lutilisation-de-leaflet-avec-react-christian-humbert-qoyhe/

// https://stackoverflow.com/questions/66500181/how-to-locate-react-leaflet-map-to-users-current-position-and-get-the-borders-f
