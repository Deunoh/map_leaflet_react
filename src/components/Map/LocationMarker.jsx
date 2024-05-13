/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import leaflet from 'leaflet';
import icon from './constantes';

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const [bbox, setBbox] = useState([]);

  const map = useMap();

  useEffect(() => {
    map.locate().on('locationfound', function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      // const radius = e.accuracy;
      // const circle = leaflet.circle(e.latlng, radius);
      // circle.addTo(map);
      setBbox(e.bounds.toBBoxString().split(','));
    });
  }, [map]);

  return position === null ? null : <Marker position={position} icon={icon} />;
};

export default LocationMarker;
