import Image from 'next/image';
import Link from 'next/link';

import type { Hub } from '../types/validate';

import { StarRating } from '@/components/ui/star-rating';
import { MapPinIcon } from 'lucide-react';

interface Props {
  hub: Hub;
}

export default function HubCard({ hub }: Props) {
  return (
    <Link href={`/hubs/${hub.id}`}>
      {/* image */}
      <Image
        src={hub.photos[0].url}
        alt={hub.photos[0].caption}
        className='rounded-tl-lg rounded-tr-lg'
      />

      <section className='p-5 text-sm space-y-2.5'>
        <h2 className='text-xl font-semibold'>{hub.name}</h2>
        {/* rating */}
        <h4 className='flex items-center gap-2'>
          <StarRating rating={hub.rating} />
          <span className=' font-semibold'>
            {hub.rating}{' '}
            <span className='text-gray-500'>({hub.review_count} Reviews)</span>
          </span>
        </h4>

        {/* address and status */}
        <div className='flex items-center gap-4 font-semibold'>
          <h3 className='flex items-center gap-2'>
            <MapPinIcon width={16} />
            {hub.location.address1}
          </h3>
          |
          <h3
            className={`${hub.is_closed ? 'text-red-500' : 'text-green-500'}`}
          >
            {hub.is_closed ? 'Closed' : 'Open'}
          </h3>
        </div>

        {/* description */}
        <div>
          <p>{hub.description}</p>
        </div>

        {/* tags */}
        <div className='flex items-center gap-3'>
          {hub.more_info.top_tags.map((tag) => (
            <span
              key={tag.tag}
              className='border border-gray-300 rounded-full text-xs text-gray-500 font-semibold p-2'
            >
              {tag.tag}
            </span>
          ))}
        </div>
      </section>
    </Link>
  );
}
