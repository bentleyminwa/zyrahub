'use client';

import { useCategory } from '@/features/hubs/hooks/useCategory';

export default function Hubs() {
  const { currentCategory } = useCategory();

  const formattedCategory = currentCategory?.replace(/-/g, ' ');

  return (
    <main className='grid grid-cols-3 mt-5 border-t border-green-300'>
      <div className='border border-red-300 col-span-2 pl-14 pr-7'>
        <h3 className='capitalize'>{formattedCategory}</h3>
      </div>
      <div className='border border-blue-300'>Map</div>
    </main>
  );
}
