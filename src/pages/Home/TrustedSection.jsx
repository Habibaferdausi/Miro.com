import React from 'react';

const TrustedSection = () => {
    return (
        <div className='max-w-[1120px] mt-20 mb-20 mx-auto max-h-[164px]'>
            <div className='pt-11 '>
                <p className='text-center text-[18px] mb-2 leading-[24px] text-gray-500'>
                Trusted by 45M+ users
                </p>

                <div className='flex justify-between items-center mt-11 mx-20 '>
                    <img src="../../../public/Walmart_Index_Only.svg.svg" alt="" />
                    <img src="../../../public/cisco.svg.svg" alt="" />
                    <img src="../../../public/Volvo_Index_Only.svg.svg" alt="" />
                    <img src="../../../public/deloitte.svg.svg" alt="" />
                    <img src="../../../public/okta.svg.svg" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default TrustedSection;