'use client';

import { assets } from '@/assets/assets';
import HubHero from '@/features/hubs/components/hub-hero';
import type { Hub } from '@/features/hubs/types/validate';

import { useParams } from 'next/navigation';

export default function Hub() {
  const { id } = useParams();
  const { hubs } = assets;

  if (!hubs) return;
  const hub = hubs.find((hub) => hub.id === id) as Hub;

  return (
    <main className='mt-5'>
      <HubHero hub={hub} />
    </main>
  );
}
