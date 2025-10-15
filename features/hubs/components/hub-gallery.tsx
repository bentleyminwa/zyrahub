import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Hub } from '../types/validate';

interface HubGalleryProps {
  hub: Hub;
}

const HubGallery = ({ hub }: HubGalleryProps) => {
  return (
    <div className='my-10'>
      <div className='w-full flex justify-between items-center'>
        <h2 className='text-2xl font-semibold'>Gallery</h2>
        <Button variant={'outline'}>See All Photos</Button>
      </div>

      <ul className='grid grid-cols-3 gap-5 mt-5'>
        {hub.photos.slice(0, 3).map((photo) => (
          <li
            key={photo.id}
            className='rounded-lg overflow-hidden max-h-[400px]'
          >
            <Image
              src={photo.url}
              alt={photo.caption}
              className='w-full min-h-full object-cover'
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HubGallery;
