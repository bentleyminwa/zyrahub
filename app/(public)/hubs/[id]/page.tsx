'use client';

import { assets } from '@/assets/assets';
import { StarRating } from '@/components/ui/star-rating';
import type { Hub } from '@/features/hubs/types/validate';
import { BadgeCheckIcon } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function Hub() {
  const { id } = useParams();
  const { hubs } = assets;

  if (!hubs) return;
  const hub = hubs.find((hub) => hub.id === id) as Hub;

  return (
    <main className='mt-5'>
      <header className='relative'>
        <Image
          src={hub.photos[0].url}
          alt={hub.photos[0].caption}
          className='w-full h-[45vh] object-cover'
        />

        <div className='absolute inset-0 bg-linear-to-b from-black/0 via-black/50 to-black/80' />

        {/* hub info */}
        <section className='absolute bottom-0 left-60 mb-5 flex gap-5'>
          {/* hub logo */}
          <Image
            src={hub.photos[0].url}
            alt={hub.photos[0].caption}
            className='w-[100px] h-[100px] rounded-full object-cover'
          />

          {/* hub content */}
          <div className='space-y-3 text-white'>
            <h2 className='font-bold text-5xl'>{hub.name}</h2>

            <div className='flex items-center gap-2 text-lg'>
              <StarRating rating={hub.rating} />
              <span className=' font-semibold'>
                {hub.rating}{' '}
                <span className=''>({hub.review_count} Reviews)</span>
              </span>
            </div>

            <div className='flex items-center gap-2'>
              <p
                className={`flex items-center gap-2 ${
                  hub.is_claimed ? 'text-blue-500' : 'text-gray-500'
                }`}
              >
                <BadgeCheckIcon />
                {hub.is_claimed ? 'Claimed' : 'Not Claimed'}
              </p>
              |
              {hub.highlights.map((highlight, index) => (
                <p key={index}>{highlight}. </p>
              ))}
            </div>

            <div className={`flex items-center gap-2`}>
              <span
                className={` ${
                  hub.is_closed ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {hub.is_closed ? 'Closed' : 'Open'}
              </span>

              <span>
                {hub.hours.map((hour, index) => (
                  <p key={index}>
                    {hour.open[0].start} - {hour.open[0].end}
                  </p>
                ))}
              </span>
            </div>
          </div>
        </section>
      </header>
    </main>
  );
}
