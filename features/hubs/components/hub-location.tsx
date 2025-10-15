'use client';

import { Hub } from '../types/validate';

import { LatLngExpression, LatLngTuple } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';

interface HubLocationProps {
  hub: Hub;
}

const HubLocation = ({ hub }: HubLocationProps) => {
  const { coordinates } = hub;

  const location: LatLngTuple | LatLngExpression = [
    coordinates.latitude,
    coordinates.longitude,
  ];

  return (
    <div>
      <MapContainer
        center={location}
        zoom={19}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={location}>
          <Popup>
            <h2>{hub.name}</h2>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default HubLocation;
