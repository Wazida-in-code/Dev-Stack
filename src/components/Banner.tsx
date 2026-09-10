import React from 'react';
import BannerImg from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='flex w-11/12 mx-auto'>
            {/* left div */}
            <div className='my-20'>
                <h1 className='font-bold text-5xl'>Build Your Ideal <br /> <span className='bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent'>Development Stack</span></h1>
                <p className='my-7 text-[#475569]'>Explore frontend, backend, database, and tooling options,<br /> compare them side by side, and put together the stack that fits your <br/> next project.</p>
                <div>
                    <button className='text-white text-2 font-semibold p-2.5 mt-[40px] mr-[20px] rounded-md bg-gradient-to-r from-[#F97316] to-[#EC4899] '>Explore Technologies</button>
                    <button className='text-[#374151] shadow bg-[#FFFFFF] p-2.5 px-8 rounded-md'>Learn More</button>
                </div>  
            </div>

            {/* right div */}
            <div className='ml-auto'>
                <img src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;