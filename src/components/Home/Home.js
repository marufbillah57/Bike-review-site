import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReview from '../hooks/useReview';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='pt-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4  mt-5'>
                <div className='title text-left pt-20 order-2 md:order-1'>
                    <h1 className='text-4xl font-sans font-black'>Huge Yamaha test fleet confirmed for<br /> <span className='text-blue-700'>The Devitt MCN Festival</span></h1>
                    <p className='max-w-lg pt-2'>The massive Yamaha fleet has something for every taste at the Festival, from the TMAX Tech MAX sports scooter to the blisteringly fast MT-10 and MT-09 SP. With such a wide array of bikes available you could easily spend the whole weekend just test riding the Yamaha fleet. The Devitt MCN Festival is the first opportunity to ride the 2022 MT-10 in the UK so head over to the Yamaha stand early to get on one of the most exciting new models of the year.</p>
                    <button className='border border-green-300 rounded mt-4 px-5 py-1 font-mono font-bold bg-sky-200 hover:bg-sky-400'>Details</button>
                </div>
                <div className='order-1'>
                    <img src={'https://i.ibb.co/QvTrbkX/bike.jpg'} alt="" />
                </div>
            </div>
            <div className='reviewsContainer flex justify-center items-center pt-20'>
                <Reviews></Reviews>
            </div>
            <div className='flex justify-center items-center mb-5 md:mb-8'>
                <Link to='/reviews'  className='  py-1 px-3 text-white mt-3 mx-1 bg-cyan-600 w-auto sm:mb-0'>Review All</Link>
            </div>
        </div>
    );
};

export default Home;