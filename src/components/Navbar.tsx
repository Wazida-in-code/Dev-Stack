import Logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <nav className='border-b border-gray-200 sticky top-0 z-5 pt-1 bg-white'>
            <div className="w-11/12 mx-auto flex justify-between items-center m-5 ">
                <img className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 h-5 md:h-7.5" src={Logo} alt="" />
                <ul className="hidden md:absolute md:left-1/2 md:-translate-x-1/2 md:flex gap-4">
                    <li className='text-pink-600'>Home</li>
                    <li className='text-slate-600'>Technologies</li>
                    <li className='text-slate-600'>Projects</li>
                    <li className='text-slate-600'>About</li>
                    <li className='text-slate-600'>Contact</li>
                </ul>
            <span className='inline-block md:hidden'><i className="fa-solid fa-bars"></i></span>

                <div className="ml-auto flex items-center gap-2 md:gap-5">
                    <button className='text-[#334155]'>Sign In</button>
                    <button className='text-white bg-[#D91B7E] px-4 md:px-5 py-2 rounded-full border border-black'>Sign Up</button>
                </div>
            </div>
        </nav>
        
    );
};

export default Navbar;