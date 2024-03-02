import React from 'react';
import HeroSection from './HeroSection';
import TrustedSection from './TrustedSection';
import Fetures from './Fetures';

const Home = () => {
    return (
        <div className='max-w-[1140px] mx-auto'>
           <HeroSection/>
           <TrustedSection/>
           <Fetures/>
        </div>
    );
};

export default Home;