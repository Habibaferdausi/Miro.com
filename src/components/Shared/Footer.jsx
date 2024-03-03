import React from 'react';

const Footer = () => {
    return (
        <div className='max-w-[1440px] mt-[110px] mx-auto bg-[#02033B] '>
            <div className='max-w-[1120px]  mx-auto '>
                <div className='ps-5 lg:ps-0 grid lg:grid-cols-3 grid-cols-1'>
                    {/* 1st part */}
                    <div>
                    <p className='text-white font-bold lg:text-[23px] text-[16px] pt-[60px] pb-8'>Scan. Detect. Remove.</p>
                 {/* socal logo part */}
                   <div className='flex justify-start gap-10 mb-7'>
                   <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.14 0H3.86C2.83626 0 1.85446 0.406677 1.13057 1.13057C0.406677 1.85446 0 2.83626 0 3.86L0 32.14C0 33.1637 0.406677 34.1455 1.13057 34.8694C1.85446 35.5933 2.83626 36 3.86 36H32.14C33.1637 36 34.1455 35.5933 34.8694 34.8694C35.5933 34.1455 36 33.1637 36 32.14V3.86C36 2.83626 35.5933 1.85446 34.8694 1.13057C34.1455 0.406677 33.1637 0 32.14 0V0ZM28.21 12.76V13.44C28.2245 15.3962 27.8534 17.3361 27.1178 19.1489C26.3823 20.9616 25.2967 22.6117 23.9232 24.0047C22.5497 25.3977 20.9151 26.5064 19.1129 27.2674C17.3107 28.0285 15.3762 28.4269 13.42 28.44C13.3504 28.45 13.2796 28.45 13.21 28.44C10.3425 28.4476 7.53362 27.6282 5.12 26.08C5.54159 26.1282 5.96566 26.1516 6.39 26.15C8.7854 26.1652 11.1153 25.3686 13 23.89C11.8868 23.8862 10.8035 23.53 9.90526 22.8725C9.00703 22.215 8.34007 21.2899 8 20.23C8.78802 20.3672 9.59634 20.3331 10.37 20.13C9.19123 19.8827 8.13304 19.2384 7.37223 18.3047C6.61143 17.3709 6.19411 16.2044 6.19 15V14.93C6.9148 15.3403 7.72769 15.5701 8.56 15.6C7.83928 15.1169 7.24873 14.4635 6.84059 13.6979C6.43245 12.9322 6.2193 12.0777 6.22 11.21C6.21338 10.2756 6.45865 9.35677 6.93 8.55C8.261 10.1669 9.91584 11.4872 11.788 12.4259C13.6601 13.3645 15.7081 13.9007 17.8 14C17.5339 12.867 17.6496 11.6779 18.1291 10.6174C18.6086 9.55696 19.425 8.68464 20.4514 8.13608C21.4778 7.58751 22.6567 7.39344 23.8048 7.58404C24.9529 7.77463 26.0059 8.33921 26.8 9.19C27.9693 8.98445 29.0953 8.58207 30.13 8C29.7383 9.21543 28.9171 10.2464 27.82 10.9C28.8548 10.7751 29.8656 10.4988 30.82 10.08C30.1094 11.1158 29.2266 12.0222 28.21 12.76Z" fill="white"/>
</svg>

                   <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.7337 0H4.45375C3.43001 0 2.44821 0.406677 1.72432 1.13057C1.00043 1.85446 0.59375 2.83626 0.59375 3.86L0.59375 32.14C0.59375 33.1637 1.00043 34.1455 1.72432 34.8694C2.44821 35.5933 3.43001 36 4.45375 36H15.4537V23.76H10.4137V18H15.4838V13.61C15.4838 8.61 18.4837 5.86 23.0037 5.86C24.5013 5.87978 25.9954 6.01014 27.4737 6.25V11.15H24.9538C22.4838 11.15 21.7038 12.68 21.7038 14.26V18H27.2337L26.3538 23.76H21.7038V36H32.7038C33.2132 36.004 33.7183 35.907 34.1901 35.7148C34.6619 35.5226 35.091 35.2389 35.4526 34.8801C35.8142 34.5213 36.1012 34.0944 36.2971 33.6241C36.4929 33.1538 36.5938 32.6494 36.5938 32.14V3.86C36.5938 2.83626 36.1871 1.85446 35.4632 1.13057C34.7393 0.406677 33.7575 0 32.7337 0V0Z" fill="white"/>
</svg>
<svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.3275 36H4.0475C3.02376 36 2.04196 35.5933 1.31807 34.8694C0.594177 34.1455 0.1875 33.1637 0.1875 32.14L0.1875 3.86C0.1875 2.83626 0.594177 1.85446 1.31807 1.13057C2.04196 0.406677 3.02376 0 4.0475 0H32.3275C33.3512 0 34.333 0.406677 35.0569 1.13057C35.7808 1.85446 36.1875 2.83626 36.1875 3.86V32.14C36.1875 33.1637 35.7808 34.1455 35.0569 34.8694C34.333 35.5933 33.3512 36 32.3275 36ZM17.8275 9.14C17.7475 9.14 10.3475 9.14 8.5075 9.64C8.00108 9.77791 7.5397 10.0463 7.16945 10.4183C6.79919 10.7903 6.53302 11.2529 6.3975 11.76C6.0566 13.6676 5.88925 15.6022 5.8975 17.54C5.88881 19.4778 6.05616 21.4124 6.3975 23.32C6.53757 23.8215 6.80577 24.278 7.17573 24.6444C7.54569 25.0109 8.00466 25.2747 8.5075 25.41C10.3475 25.91 17.7475 25.91 17.8275 25.91C17.9075 25.91 25.3075 25.91 27.1375 25.41C27.6431 25.2803 28.105 25.0183 28.4758 24.651C28.8466 24.2837 29.113 23.8243 29.2475 23.32C29.5937 21.4131 29.7611 19.478 29.7475 17.54C29.7613 15.6053 29.5939 13.6735 29.2475 11.77C29.1179 11.267 28.8599 10.8063 28.4988 10.4329C28.1377 10.0595 27.6859 9.78633 27.1875 9.64C25.3075 9.15 17.8975 9.14 17.8275 9.14ZM15.3875 21.14V14L21.6175 17.55L15.3875 21.09V21.14Z" fill="white"/>
</svg>

                   </div>

                   <div className='flex justify-start  gap-7 text-[11px] text-white'>
                    <p className='border-b border-white mt-5'>Privacy Policy</p>
                    <p className='border-b border-white mt-5'>Terms of Service</p>
                   </div>

                   <p className='mt-9 text-white text-[11px] leading-[15px]'>Copyright © 2022 Certo Software Limited | Registered in <br/>England & Wales No. 10072356</p>
                   <p className='mt-5 text-white text-[11px]  leading-[15px]'>Designed & developed by <span className="border-b border-white">Bigger Picture</span> </p>
                   
                    </div>

                    {/* 2nd part */}
<div className='pt-[60px]'>
<h1 className='text-white text-[35px] font-bold leading-[45px]  '>Miro.</h1>

<p className='border-b border-white mt-5 max-w-[178px]'></p>
<div className='mt-9'>
    <p className='text-[#FFC247] text-[19px] font-bold flex justify-start gap-5 items-center'><span><svg width="20" height="3" viewBox="0 0 20 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="20" height="2" fill="#FFC247"/>
</svg>
</span> iPhone</p>
<p className='text-[#FFC247] text-[19px] font-bold mt-3 flex justify-start gap-5 items-center'><span><svg width="20" height="3" viewBox="0 0 20 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="20" height="2" fill="#FFC247"/>
</svg>
</span>Android</p>
<p className='text-[#FFC247] text-[19px] font-bold flex  mt-3 justify-start gap-5 items-center'><span><svg width="20" height="3" viewBox="0 0 20 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="20" height="2" fill="#FFC247"/>
</svg>
</span>Help</p>
<p className='text-[#FFC247] text-[19px] font-bold flex  mt-3 justify-start gap-5 items-center'><span><svg width="20" height="3" viewBox="0 0 20 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="20" height="2" fill="#FFC247"/>
</svg>
</span>About</p>

<p className='text-[#FFC247] text-[19px] font-bold flex  mt-3 justify-start gap-5 items-center'><span><svg width="20" height="3" viewBox="0 0 20 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="20" height="2" fill="#FFC247"/>
</svg>
</span>Insights</p>



</div>



</div>
<div className='pt-[70px]'>
    
    <div className='bg-[#FDB235] rounded-s-[40px] rounded-e-2xl max-w-[436px]'>
        <div className='px-8 py-8'>
        <img src="../../../public/form#newsletter-signup-footer-form_before.png" alt="" />
<h1 className='text-[23px] leading-[30px] font-bold '>Sign up to our newsletter</h1>
<p className='mt-4 text-[15px] leading-[20px] '>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
       
       <div className='flex mt-6 rounded-full'>
       <input type="text" placeholder="Email address" className="input rounded-s-full  input-bordered w-full " />
       <button className='bg-[#02033B] text-[15px] text-white px-5  rounded-r-full py-1'>Submit</button>
       </div>
       
       
       
        </div>
        
    </div>
</div>
                </div>




<p className='text-[12px] ps-5 lg:ps-0 leading-[15px] text-white mt-[70px] pb-[90px] max-w-[550px]'>Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
            </div>
            
        </div>
    );
};

export default Footer;