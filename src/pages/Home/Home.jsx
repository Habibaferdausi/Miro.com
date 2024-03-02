import React from 'react';
import HeroSection from './HeroSection';
import TrustedSection from './TrustedSection';
import Fetures from './Fetures';
import WorkTogether from './WorkTogether';
import Connect from './Connect';
import TheWayWeWork from './TheWayWeWork';
import BuildTheWay from './BuildTheWay';
import BuildFor from './BuildFor';
import LovedBy from './LovedBy';

const Home = () => {
    return (
        <div className='max-w-[1140px] mx-auto'>
           <HeroSection/>
           <TrustedSection/>
           <Fetures/>
           <WorkTogether/>
           <Connect/>
           <TheWayWeWork/>
           <BuildTheWay/>
           <BuildFor/>
           <LovedBy/>
        </div>
    );
};

export default Home;