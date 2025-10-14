'use client';

import { assets } from '@/assets/assets';
import HubCard from '@/features/hubs/components/hub-card';
import { useCategory } from '@/features/hubs/hooks/useCategory';

import type { Hub } from '@/features/hubs/types/validate';
import Map from '@/features/map';

import type { LatLngExpression } from 'leaflet';

export default function Hubs() {
  const { currentCategory } = useCategory();

  const formattedCategory = currentCategory?.replace(/-/g, ' ');

  const hubs: Hub[] = currentCategory
    ? assets.hubs.filter((hub) => hub.categories[0].alias === currentCategory)
    : assets.hubs;

  const hubCoordinates: LatLngExpression[] = hubs.map((hub) => [
    hub.coordinates.latitude,
    hub.coordinates.longitude,
  ]);

  console.log(hubCoordinates);

  if (!hubs.length) {
    return (
      <main className='mt-5'>
        <section className='pl-14 pr-7 py-10'>
          <h3 className='capitalize text-sm text-gray-400 font-semibold'>
            {formattedCategory}
          </h3>
          <h2 className='capitalize text-2xl font-bold'>
            No {formattedCategory} Hubs found near you.
          </h2>
        </section>
      </main>
    );
  }

  return (
    <main className='grid grid-cols-3 mt-5 border-t border-gray-300'>
      <section className='col-span-2 pl-14 pr-7 py-10'>
        <h3 className='capitalize text-sm text-gray-400 font-semibold'>
          {formattedCategory}
        </h3>
        <h2 className='capitalize text-2xl font-bold'>
          Top {formattedCategory} Hubs near you.
        </h2>

        <ul className='mt-10 grid grid-cols-2 gap-4'>
          {hubs.map((hub) => (
            <li
              key={hub.id}
              className='border border-gray-300 rounded-lg hover:shadow hover:shadow-primary/20 duration-200 ease-in-out'
            >
              <HubCard hub={hub} />
            </li>
          ))}
        </ul>
      </section>

      <Map location={[51.505, -0.09]} />
    </main>
  );
}
