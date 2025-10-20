'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { LocateFixedIcon, SearchIcon } from 'lucide-react';

const LocationSearch = () => {
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!location) return;
    router.push(`/hubs?location=${encodeURIComponent(location)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className='w-2/3 flex items-center gap-2 justify-around p-1 rounded-lg bg-background'
    >
      <label htmlFor='search'>
        <LocateFixedIcon />
      </label>
      <input
        type='text'
        name='search'
        id='search'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder='Enter your location'
        className='w-full border-none outline-none'
      />
      <Button variant={'default'} size={'icon'}>
        <SearchIcon />
      </Button>
    </form>
  );
};

export default LocationSearch;
