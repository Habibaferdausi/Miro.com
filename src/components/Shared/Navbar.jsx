import React from 'react';

const Navbar = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
           <div className="navbar max-w-[1380px] max-h-[91px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      {/* mobile responsive */}
      <div tabIndex={0} role="button" className="btn btn-ghost p-4 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content gap-4 p-4  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>Products</li>
        <li>Solutions</li>
        <li>Resources</li>
        <li>Enterprise</li>
        <li>pricing</li>
        
      </ul>
    </div>
    {/* logo */}
    <svg width="91" height="32" viewBox="0 0 91 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.5113 0.918836C38.2772 2.1019 38.2772 4.12974 39.5113 5.35423C40.7454 6.57935 42.7882 6.57935 44.0223 5.35423C45.2558 4.12974 45.2558 2.1019 44.0223 0.918836C42.7882 -0.306279 40.7454 -0.306279 39.5113 0.918836ZM64.3065 9.2083L61.4128 9.67274C55.8926 10.9214 52.3061 12.7105 52.3061 18.7254V30.7947L57.3279 31.8083V19.4792C57.3279 16.6684 58.9265 15.3988 61.4128 14.9294L64.3065 14.4031V9.2083ZM26.0854 30.8442L31.1073 31.8578V18.2133C31.1073 11.6653 26.0007 9.29983 22.4684 9.29983C20.0855 9.29983 18.2135 9.89105 16.5109 11.5386C14.7665 9.89105 12.6814 9.25778 10.9788 9.25778C8.55352 9.25778 6.42542 10.3134 5.02122 12.0036V9.72222L0 10.6938V30.8442L5.02122 31.8578V18.0018C5.02122 15.8051 6.63848 14.2423 9.06437 14.2423C11.4473 14.2423 13.0645 15.8051 13.0645 18.0018V30.8442L18.0857 31.8578V18.0018C18.0857 15.8051 19.7024 14.2423 22.0859 14.2423C24.4688 14.2423 26.0854 15.8051 26.0854 18.0018V30.8442ZM91 20.6079C91 26.8905 85.8529 32 79.5664 32C73.2376 32 68.0905 26.8905 68.0905 20.6079C68.0905 14.3673 73.2376 9.25778 79.5664 9.25778C85.8529 9.25778 91 14.3673 91 20.6079ZM79.5664 27.2671C75.8958 27.2671 72.8999 24.2937 72.8999 20.6079C72.8999 16.9641 75.8958 14.0321 79.5664 14.0321C83.237 14.0321 86.19 16.9641 86.19 20.6079C86.19 24.2937 83.237 27.2671 79.5664 27.2671ZM44.2347 32L39.2135 30.8442V10.5503L44.2347 9.53669V32Z" fill="#050038"/>
</svg>
{/* other content */}
<div className='lg:flex gap-5 text-[#050038] mt-2 text-[16px]  ms-8 justify-start items-center  hidden'>
<div className='lg:flex  hidden justify-between items-center gap-2'>
        <h1 className='text-[16px] '>Product</h1>
        <div className='pt-2'>         <svg  width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_356)">
<path d="M1.39062 2L6.39062 7L11.3906 2" stroke="#050038" stroke-width="1.5"/>
</g>
<defs>
<clipPath id="clip0_1_356">
<rect width="12" height="8" fill="white" transform="translate(0.390625 1)"/>
</clipPath>
</defs>
</svg></div>

</div>
    <p>Solutions</p>
    <div className='flex justify-between items-center gap-2'>
        <h1 className='text-[16px] '>Resources</h1>
        <div className='pt-2'>         <svg  width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_356)">
<path d="M1.39062 2L6.39062 7L11.3906 2" stroke="#050038" stroke-width="1.5"/>
</g>
<defs>
<clipPath id="clip0_1_356">
<rect width="12" height="8" fill="white" transform="translate(0.390625 1)"/>
</clipPath>
</defs>
</svg></div>

</div>
    <p>Enterprise</p>
    <p>Pricing</p>
</div>
  </div>
 

 {/* end side */}

  <div className="navbar-end gap-5   text-[#050038] mt-2 text-[10px] lg:text-[16px]">
    
    <div className='lg:flex hidden justify-start gap-2 items-end'>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6275 18.6275 24 12 24C5.37259 24 0 18.6275 0 12C0 5.37259 5.37259 0 12 0C18.6275 0 24 5.37259 24 12ZM6.12377 14C6.04208 13.3448 6 12.6773 6 12C6 11.3227 6.04209 10.6552 6.1238 10H2.20004C2.06887 10.6462 2 11.3151 2 12C2 12.6849 2.06887 13.3537 2.20004 14H6.12377ZM6.50405 16H2.83209C4.0096 18.6951 6.34063 20.7707 9.20108 21.6031C7.96156 19.9536 7.03345 18.0568 6.50405 16ZM8.57976 16H15.4203C14.7623 18.2109 13.5728 20.1929 12 21.798C10.4272 20.1929 9.23776 18.2109 8.57976 16ZM15.8583 14H8.14179C8.04836 13.3468 8 12.679 8 12C8 11.321 8.04836 10.6532 8.14179 10H15.8583C15.9516 10.6532 16 11.321 16 12C16 12.679 15.9516 13.3468 15.8583 14ZM17.8763 14C17.9579 13.3448 18 12.6773 18 12C18 11.3227 17.9579 10.6552 17.8763 10H21.8C21.9312 10.6462 22 11.3151 22 12C22 12.6849 21.9312 13.3537 21.8 14H17.8763ZM17.496 16H21.1679C19.9904 18.6951 17.6593 20.7707 14.7989 21.6031C16.0384 19.9536 16.9665 18.0568 17.496 16ZM12 2.20204C10.4272 3.80704 9.23776 5.78908 8.57976 8H15.4203C14.7623 5.78908 13.5728 3.80704 12 2.20204ZM14.7989 2.39697C16.0384 4.04639 16.9665 5.94316 17.4959 8H21.1679C19.9904 5.30497 17.6593 3.22927 14.7989 2.39697ZM2.83209 8H6.50408C7.03348 5.94316 7.9616 4.04639 9.20111 2.39697C6.34064 3.22927 4.0096 5.30497 2.83209 8Z" fill="#050038"/>
</svg>
<p>EN</p>

    </div>
    <p>Contact Sales</p>
    <p>Login</p>
    <button className='bg-[#4262FF] rounded-full py-3 lg:px-7 px-4 text-white '>Sign up free → <span></span></button>
  </div>
</div>
        </div>
    );
};

export default Navbar;