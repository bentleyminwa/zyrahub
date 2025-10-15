'use client';

import { assets } from '@/assets/assets';
import HubActions from '@/features/hubs/components/hub-actions';
import HubHero from '@/features/hubs/components/hub-hero';
import type { Hub } from '@/features/hubs/types/validate';
import { CompassIcon, Link, PhoneIcon } from 'lucide-react';

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
        <ul className='mt-5 border border-primary/10 w-full flex justify-between items-center p-3'>
          <li className='flex items-center gap-2'>
            <CompassIcon />
            <span>Get Directions</span>
          </li>
          <li className='flex items-center gap-2'>
            <PhoneIcon />
            <span>{hub.phone}</span>
          </li>
          <li className='flex items-center gap-2'>
            <Link />
            <span>Website</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
