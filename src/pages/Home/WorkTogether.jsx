import React from 'react'

export default function WorkTogether() {
  return (
    <div className='mt-[80px]'>
        <div className='grid grid-cols-2'>
            <div className='mt-[120px]'>
           <h1 className='text-[48px] font-bold text-[#050038] max-w-[440px] leading-[56px]'>Work together, wherever you work</h1> 
          <p className='text-[18px] max-w-[453px] mt-5 text-gray-500'>In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
           <p className='text-blue-500 text-[18px] mt-8 border-b-blue-500 '>Learn More →</p>
            </div>
            <div>
                <img src="../../../public/hybridwork.png.png" alt="" />
            </div>

        </div>

    </div>
  )
}
