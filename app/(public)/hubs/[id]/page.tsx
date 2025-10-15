'use client';

import { assets } from '@/assets/assets';
import HubActions from '@/features/hubs/components/hub-actions';
import HubContact from '@/features/hubs/components/hub-contact';
import HubGallery from '@/features/hubs/components/hub-gallery';
import HubHero from '@/features/hubs/components/hub-hero';
import HubHours from '@/features/hubs/components/hub-hours';
import HubLocation from '@/features/hubs/components/hub-location';
import type { Hub } from '@/features/hubs/types/validate';
import ReviewCard from '@/features/reviews/components/review-card';

import { useParams } from 'next/navigation';

export default function Hub() {
  const { id } = useParams();
  const { hubs } = assets;

  if (!hubs) return;
  const hub = hubs.find((hub) => hub.id === id) as Hub;

  return (
    <main className='my-5'>
      <HubHero hub={hub} />

      <section className='mt-10 w-[75%] mx-auto'>
        <HubActions />
        <HubContact hub={hub} />
        <section className='mt-10'>
          <h2 className='text-2xl font-semibold'>About the Hub</h2>
          <p className='mt-2'>{hub.description}</p>
        </section>
        <HubGallery hub={hub} />
        <section>
          <h2 className='text-2xl font-semibold'>Hours and Location</h2>
          <section className='w-full grid grid-cols-2 gap-5 mt-5'>
            <HubHours hub={hub} />
            <HubLocation hub={hub} />
          </section>
        </section>

        {/* reviews */}
        <section className='max-w-1/2 mt-10'>
          <h2 className='text-2xl font-semibold'>Reviews</h2>

          <ul className='mt-10'>
            {hub.recent_reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
