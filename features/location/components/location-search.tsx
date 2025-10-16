import { Button } from '@/components/ui/button';
import { LocateFixedIcon, SearchIcon } from 'lucide-react';

const LocationSearch = () => {
  return (
    <form className='w-2/3 flex items-center gap-2 justify-around p-1 rounded-lg bg-background'>
      <label htmlFor='search'>
        <LocateFixedIcon />
      </label>
      <input
        type='text'
        name='search'
        id='search'
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
