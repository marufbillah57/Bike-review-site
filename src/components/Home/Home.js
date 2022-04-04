import React, { useEffect, useState } from 'react';

const Home = () => {
    return (
        <div className='flex justify-between gap-4 mx-20 mt-5'>
            <div className='title text-left pt-20'>
                <h1 className='text-4xl font-sans font-black'>Huge Yamaha test fleet confirmed for<br /> <span className='text-blue-700'>The Devitt MCN Festival</span></h1>
                <p className='max-w-lg pt-2'>The massive Yamaha fleet has something for every taste at the Festival, from the TMAX Tech MAX sports scooter to the blisteringly fast MT-10 and MT-09 SP. With such a wide array of bikes available you could easily spend the whole weekend just test riding the Yamaha fleet. The Devitt MCN Festival is the first opportunity to ride the 2022 MT-10 in the UK so head over to the Yamaha stand early to get on one of the most exciting new models of the year.</p>
                <button className='border border-green-300 rounded mt-4 px-5 py-1 font-mono font-bold bg-sky-200 hover:bg-sky-400'>Details</button>
            </div>
            <div>
                <img src={'https://i.ibb.co/QvTrbkX/bike.jpg'} alt="" />
            </div>
        </div>
    );
};

export default Home;