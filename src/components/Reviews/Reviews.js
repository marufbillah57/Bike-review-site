import React from 'react';
import useReview from '../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='reviews-container'>
            <h2 className='text-4xl text-center mb-4 md:mb-4'>Customer Reviews {reviews.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                reviews.map(review => <Review
                key={review.id}
                review={review}
                ></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;