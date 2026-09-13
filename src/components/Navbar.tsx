import React from 'react';
import Logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <nav className='border-b border-gray-200 sticky top-0 z-5 pt-2 bg-white'>
            <div className="w-11/12 mx-auto flex justify-between items-center m-5 ">
                <img className="h-7.5" src={Logo} alt="" />
                <ul className="flex gap-4">
                    <li className='text-pink-600'>Home</li>
                    <li className='text-slate-600'>Technologies</li>
                    <li className='text-slate-600'>Projects</li>
                    <li className='text-slate-600'>About</li>
                    <li className='text-slate-600'>Contact</li>
                </ul>
                <div className="flex items-center gap-5">
                    <button className='text-[#334155]'>Sign In</button>
                    <button className='text-white bg-[#D91B7E] px-5 py-2 rounded-full border border-black'>Sign Up</button>
                </div>
            </div>
        </nav>
        
    );
};

export default Navbar;