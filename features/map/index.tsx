'use client';

import { LatLngExpression, LatLngTuple } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  location: LatLngExpression | LatLngTuple;
  hubCoords: LatLngExpression[] | LatLngTuple[];
  zoom?: number;
}

const defaults = {
  zoom: 14,
};

const MapComponent = ({
  location,
  hubCoords,
  zoom = defaults.zoom,
}: MapProps) => {
  return (
    <section>
      <MapContainer
        center={location}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {hubCoords.map((coord, index) => (
          <Marker key={index} position={coord}>
            <Popup>
              <h2>Hub</h2>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default MapComponent;
