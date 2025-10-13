'use client';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { LatLngExpression } from 'leaflet';

interface Props {
  coordinates: LatLngExpression[];
}

export default function Map({ coordinates }: Props) {
  return (
    <MapContainer
      center={coordinates[1]}
      zoom={13}
      className='absolute w-full h-full'
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {coordinates.map((coord, index) => (
        <Marker key={index} position={coord}>
          <Popup>Still working on it</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
