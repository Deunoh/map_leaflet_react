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
  {
    id: 2250,
    name: "Cache d'armes",
    coordinates: [49.439166, 2.101999],
    type: 'Armes',
    description: '',
  },
  {
    id: 2251,
    name: 'Petite cachette ',
    coordinates: [49.44391, 2.077403],
    type: 'Abri',
    description: '',
  },
  {
    id: 2252,
    name: 'Regroupement de zombie ',
    coordinates: [49.453173, 2.067404],
    type: 'Risque',
    description: 'En déplacement vers Beauvais',
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
  Abri: {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3724/3724982.png',
    iconSize: [38, 38],
  },
  Armes: {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3627/3627634.png',
    iconSize: [38, 38],
  },
  Risque: {
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/6725/6725430.png',
    iconSize: [38, 38],
  },
  Rassemblement: {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/5302/5302786.png',
    iconSize: [38, 38],
  },
  Communication: {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/5302/5302786.png',
    iconSize: [38, 38],
  },
  Nourriture: {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1043/1043940.png',
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
