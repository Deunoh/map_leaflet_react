/* eslint-disable prettier/prettier */
import leaflet from 'leaflet';
// marqueurs sont les données recuperé en API
export const marqueurs = [
  {
    id: 2215,
    name: 'Source eau',
    coordinates: [49.449, 2.0568],
    type: 'Eau',
    description: "Source d'eau beauvais",
  },

  {
    id: 2228,
    name: 'Aéroport de Beauvais',
    coordinates: [49.4541, 2.1114],
    type: 'Aéroport',
    description: 'Aeroport de beauvais',
  },

  {
    id: 2248,
    name: 'Gros zombie',
    coordinates: [49.4282, 2.0821],
    type: 'Zombie',
    description: 'vraiment un gros zombie',
  },

  // etc
];

export const iconMappings = {
  Eau: {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/824/824239.png',
    iconSize: [38, 38],
  },

  Aéroport: {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2169/2169353.png',
    iconSize: [38, 38],
  },
  Zombie: {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/218/218153.png',
    iconSize: [38, 38],
  },
};

export default leaflet.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
});
