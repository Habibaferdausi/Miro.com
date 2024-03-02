import React from 'react';

const HeroSection = () => {
    return (
        <div className='mt-11 pt-5'>
            <div className='flex justify-start items-center gap-[60px]'>
                {/* 1st part of the section */}
    <div className='max-w-[440px] text-[#050038] '>
        <h1 className=' font-bold text-[48px] leading-[56px]'>Take ideas from better to best</h1>
   
   <p className='my-6 text-[18px] leading-[24px]'>Miro is your team's visual platform to connect, collaborate, and create — together.</p>
    
   <input type="text" placeholder="Enter your work email" className="input input-bordered mt-2 w-full rounded-full" />
   <button className='bg-[#4262FF] mt-3 w-full rounded-full py-3 px-7 text-white '>Sign up free → <span></span></button>
    <p className='mt-3 text-gray-400 text-[14px] leading-[20px]'>Collaborate with your team within minutes</p>
    

    <div className='bg-[#F5F5F7] max-w-[350px] mt-9 p-3 rounded flex justify-between gap-3'>
        <div className=''>
            <img src="../../../public/star.svg" alt="" className='w-full' />
            <p className='text-[11px]'>Based on 5149+ reviews:</p>
        </div>
      
        <div className='flex justify-center items-center'>
            <img src="../../../public/get.svg" alt="" />

        </div>

    </div>
    </div>
{/* 
    2nd part */}
    <div className='pt-5'>
        <img src="../../../public/headerimage-without-text.png.png" alt="" className='max-w-[640px]' />
    </div>
            </div>
           
        </div>
    );
};

export default HeroSection;