'use client';

import { useContext } from 'react';

import { LocationContext } from '../context/location-context';

export const useLocationContext = () => {
  const context = useContext(LocationContext);

  if (!context) {
    throw new Error('context is undefined');
  }

  return context;
};
