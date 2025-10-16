'use client';

import { createContext, useEffect, useState } from 'react';

interface LocationContext {
  location: number[];
  error: GeolocationPositionError | null;
}

export const LocationContext = createContext<LocationContext>({
  location: [],
  error: null,
});

function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState<number[]>([0, 0]);
  const [error, setError] = useState<GeolocationPositionError | null>(null);

  useEffect(() => {
    if (typeof window === undefined) return;

    if (!navigator.geolocation) {
      setError({
        code: 0,
        message: 'Geolocation is not supported by this browser.',
        PERMISSION_DENIED: 1,
        POSITION_UNAVAILABLE: 2,
        TIMEOUT: 3,
      });

      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        setError(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, []);

  return (
    <LocationContext.Provider value={{ location, error }}>
      {children}
    </LocationContext.Provider>
  );
}

export { LocationProvider };
