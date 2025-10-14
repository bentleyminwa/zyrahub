'use client';

import { LatLngExpression, LatLngTuple } from 'leaflet';
import { useEffect, useState } from 'react';

export function useLocation() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  // const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      });
    }
  }, []);

  const coordinates: LatLngTuple | LatLngExpression = [
    position.lat,
    position.lng,
  ];

  return {
    coordinates,
  };
}
