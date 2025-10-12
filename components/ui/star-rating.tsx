export const StarRating = ({ rating }: { rating: number }) => {
  if (rating < 0 || rating > 5) {
    throw new Error('Rating must be between 0 and 5');
  }

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className='text-yellow-500'>
          {star <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};
