'use client';

import { assets } from '@/assets/assets';
import HubActions from '@/features/hubs/components/hub-actions';
import HubContact from '@/features/hubs/components/hub-contact';
import HubGallery from '@/features/hubs/components/hub-gallery';
import HubHero from '@/features/hubs/components/hub-hero';
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
      </section>
    </main>
  );
}
