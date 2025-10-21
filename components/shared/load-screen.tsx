'use client';

import React from 'react';
import Loader from './loader';

const LoadScreen = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <Loader />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoadScreen;
