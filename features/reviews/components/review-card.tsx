import { StarRating } from '@/components/ui/star-rating';
import Image from 'next/image';
import type { Review } from '../types/validate';

interface ReviewProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewProps) => {
  const { user, rating, time_created, text } = review;

  const date_created = new Date(time_created);

  return (
    <li>
      <div className='flex items-start gap-2'>
        <Image
          src={user.profile_url}
          alt={user.name}
          className='w-16 h-16 rounded-full object-cover'
        />
        <div>
          <h4 className='text-lg font-semibold'>{user.name}</h4>
          <StarRating rating={rating} />
        </div>
      </div>

      <span className='text-sm text-gray-600 font-semibold'>
        {date_created.toDateString()}
      </span>

      <div>
        <p className='text-sm font-semibold'>{text}</p>
      </div>
    </li>
  );
};

export default ReviewCard;
