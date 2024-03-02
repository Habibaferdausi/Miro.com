import React from 'react';

const LovedBy = () => {
    return (
        <div className='mt-[100px]'>
            <h1 className='text-center text-[48px] font-bold text-[#050038] leading-[56px]'>Loved by the world's best teams</h1>
            
            <div className='flex justify-center'>
            <button className='text-[18px] mt-7 btn btn-outline btn-blue-500 rounded-full px-6 py-4 mx-auto text-blue-500'>See all customer stories → </button>
            </div>


            <div className='mt-[70px] grid grid-cols-3'>
                <div>
                    <img src="../../../public/vmware.svg.png" alt="" />
                    <p className='text-gray-500 my-6  max-w-[291px] text-[18px] leading-[24px]'>“When the pandemic hit, those of us  who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>
               
               <div className='flex justify-start mt-[50px] gap-4 items-center'>
                <img src="../../../public/div (3).png" alt="" />
                <h1 className='text-[14px] text-gray-500'>Roxanne Mustafa <br />Design Team Lead at VMware</h1>

               </div>
                </div>
                <div>
                    <img src="../../../public/Docusign-Testimonials-280-60-Baseline.svg.png" alt="" />
                    <p className='text-gray-500 my-6  max-w-[291px] text-[18px] leading-[24px]'>“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”</p>
               
               <div className='flex justify-start mt-[125px] gap-4 items-center'>
                <img src="../../../public/div (4).png" alt="" />
                <h1 className='text-[14px] text-gray-500'>Jane Ashley <br />Head of Design at DocuSign</h1>

               </div>
                </div>
                <div>
                    <img src="../../../public/frog.svg.png" alt="" />
                    <p className='text-gray-500 my-6  max-w-[291px] text-[18px] leading-[24px]'>“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”</p>
               
               <div className='flex justify-start mt-[125px] gap-4 items-center'>
                <img src="../../../public/div (5).png" alt="" />
                <h1 className='text-[14px] text-gray-500'>Laura Baird <br />Associate Design Director at frog</h1>

               </div>
                </div>

            </div>
            
           
        </div>
    );
};

export default LovedBy;