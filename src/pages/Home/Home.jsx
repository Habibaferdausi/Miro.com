import React from 'react';
import HeroSection from './HeroSection';
import TrustedSection from './TrustedSection';

const Home = () => {
    return (
        <div className='max-w-[1140px] mx-auto'>
           <HeroSection/>
           <TrustedSection/>
        </div>
    );
};

export default Home;