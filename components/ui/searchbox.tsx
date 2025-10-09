import { SearchIcon } from 'lucide-react';

export default function SearchBox() {
  return (
    <form className='w-md flex items-center gap-2  p-1 rounded-lg text-sm text-white bg-black/20'>
      <label htmlFor='search'>
        <SearchIcon />
      </label>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search'
        className='w-full border-none outline-none'
      />
    </form>
  );
}
