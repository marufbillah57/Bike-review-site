import React from 'react';

const Review = (props) => {
    const {name, city, country, review} = props.review;
    return (
        <div className='review shadow-lg p-4 border rounded-lg border-grey-800'>
            <h4 className='text-sm font-bold'>Name: {name}</h4>
            <h4 className='text-xs font-semibold'>City: {city}</h4>
            <p className='text-sm'><span className='text-xl font-bold'>Review:</span> {review}</p>
        </div>
    );
};

export default Review;