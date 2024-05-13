/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import leaflet from 'leaflet';
import icon from './constantes';

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  // const [bbox, setBbox] = useState([]);

  const map = useMap();

  useEffect(() => {
    map.locate().on('locationfound', function (event) {
      setPosition(event.latlng);
      map.flyTo(event.latlng, map.getZoom());
      // const radius = e.accuracy;
      // const circle = leaflet.circle(e.latlng, radius);
      // circle.addTo(map);
      // setBbox(e.bounds.toBBoxString().split(','));
    });
  }, [map]);
  console.log(position);
  return position === null ? null : (
    <Marker position={position} icon={icon}>
      <Popup>
        Latitude : {position.lat}, Longitude : {position.lng}
      </Popup>
    </Marker>
  );
};

export default LocationMarker;
