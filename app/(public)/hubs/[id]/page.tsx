'use client';

import { assets } from '@/assets/assets';
import HubActions from '@/features/hubs/components/hub-actions';
import HubContact from '@/features/hubs/components/hub-contact';
import HubGallery from '@/features/hubs/components/hub-gallery';
import HubHero from '@/features/hubs/components/hub-hero';
import HubHours from '@/features/hubs/components/hub-hours';
import HubLocation from '@/features/hubs/components/hub-location';
import type { Hub } from '@/features/hubs/types/validate';

import { useParams } from 'next/navigation';

export default function Hub() {
  const { id } = useParams();
  const { hubs } = assets;

  if (!hubs) return;
  const hub = hubs.find((hub) => hub.id === id) as Hub;

  return (
    <main className='my-5'>
      <HubHero hub={hub} />

      <section className='mt-10 w-[68%] mx-auto'>
        {/* actions */}
        <HubActions />

        {/* contact info */}
        <HubContact hub={hub} />

        {/* gallery */}
        <HubGallery hub={hub} />

        {/* hours and location */}
        <section>
          <h2 className='text-2xl font-semibold'>Hours and Location</h2>

          <section className='border border-red-500 w-full grid grid-cols-2 gap-5 mt-5'>
            {/* hours */}
            <HubHours hub={hub} />

            {/* location */}
            <HubLocation hub={hub} />
          </section>
        </section>
      </section>
    </main>
  );
}
