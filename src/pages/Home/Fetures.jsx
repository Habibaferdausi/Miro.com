import React from 'react'

export default function Fetures() {
  return (
    <div className='mt-[120px]'>
        <div>
            <div class="flex justify-end items-center pb-5 pe-[270px]">  <img src="../../../public/homepage-33-b.svg.png" alt=""  className='  absolute'/></div>
          
            <h1 className='text-center mt-10 leading-[56px] mx-auto text-[48px] relative font-bold text-[#050038]'>Collaborate without <br/>constraints</h1>
        </div>

        <div className='mt-10 grid grid-cols-3 gap-7'>
            <div className='max-w-[369px] mx-auto'>
                <h1 className='font-bold text-[24px] leading-[28px]'>Free Forever</h1>
                <p className='text-[18px] max-w-[313px] mt-5 text-gray-500'>Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <br/> <span className='text-blue-500'>pricing plans</span> for more features.</p>
            </div>
            <div className='max-w-[369px] mx-auto'>
                <h1 className='font-bold text-[24px] leading-[28px]'>Easy integrations</h1>
                <p className='text-[18px] max-w-[313px] mt-5 text-gray-500'>Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our  <span className='text-blue-500'>Marketplace</span> .</p>
            </div>
            <div className='max-w-[369px] mx-auto'>
                <h1 className='font-bold text-[24px] leading-[28px]'>Security first</h1>
                <p className='text-[18px] max-w-[313px] mt-5 text-gray-500'>We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our  <span className='text-blue-500'>Trust Center</span> .</p>
            </div>

        </div>

        <div className='mt-[80px] flex justify-center'>
        <button className='bg-[#4262FF] rounded-full py-3 px-7 text-white '>Sign up free → <span></span></button>
        </div>

    </div>
  )
}
