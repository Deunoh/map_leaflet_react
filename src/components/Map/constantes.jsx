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
    name: 'Zombie ',
    coordinates: [49.4392, 2.0852],
    type: 'Zombie',
    description: 'Groupe de 3 zombies',
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
    name: 'Maison sécurisée',
    coordinates: [49.44391, 2.077403],
    type: 'Abri',
    description: '',
  },
  {
    id: 2252,
    name: 'Regroupement de zombie ',
    coordinates: [49.453173, 2.067404],
    type: 'Risque',
    description: '',
  },
  {
    id: 2253,
    name: 'Zone de soin ',
    coordinates: [49.448252820088854, 2.06996710732251],
    type: 'Santé',
    description: '',
  },
  {
    id: 2254,
    name: 'Superette ',
    coordinates: [49.4371, 2.0805],
    type: 'Ravitaillement',
    description: '',
  },
  {
    id: 2255,
    name: 'Rassemblement ',
    coordinates: [49.4414, 2.0764],
    type: 'Rassemblement',
    description: '',
  },
  {
    id: 2256,
    name: 'Telephone ',
    coordinates: [49.4426, 2.0789],
    type: 'Communication',
    description: 'Cabine telephonique',
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
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/1233/1233009.png',
    iconSize: [38, 38],
  },
  Abri: {
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/3010/3010995.png',
    iconSize: [38, 38],
  },
  Armes: {
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/427/427276.png',
    iconSize: [38, 38],
  },
  Risque: {
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/1028/1028690.png',
    iconSize: [38, 38],
  },
  Rassemblement: {
    iconUrl: ' https://cdn-icons-png.flaticon.com/128/1581/1581030.png',
    iconSize: [38, 38],
  },
  Communication: {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/5384/5384559.png',
    iconSize: [38, 38],
  },
  Ravitaillement: {
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/4417/4417832.png',
    iconSize: [38, 38],
  },
  Santé: {
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/7196/7196589.png',
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
