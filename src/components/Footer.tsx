import NavLogo from '../assets/logo-text.png'


const Footer = () => {
    return (
        <footer className='flex mt-[40px] w-11/12 mx-auto'>
            <div>
                <img className='mt-[30px] mb-[10px]' src={NavLogo} alt="" />
                <p className='text-[#64748B] mt-[10px] mb-[20px]'>Curated tools, technologies, and resources for  developers  building <br /> modern software.</p>
                <ul className='flex gap-5 mb-24 text-[#475569]'>
                    <li><a href=""></a>GitHub</li>
                    <li><a href=""></a>Twitter</li>
                    <li><a href=""></a>LinkedIn</li>
                </ul>
                <p className='text-[#94A3B8]'>© 2026 Dev Stack. All rights reserved.</p>
            </div>

            <div className='flex m-[40px] gap-28'>
                <div>
                    <p className='text-[#0F172A] font-semibold mb-[15px]'>PRODUCT</p>
                    <p className='text-[#64748B] mb-[13px]'>Home</p>
                    <p className='text-[#64748B] mb-[13px]'>Technologies</p>
                    <p className='text-[#64748B] mb-[13px]'>Projects</p>
                </div>
                <div>
                    <p className='text-[#0F172A] font-semibold mb-[15px]'>COMPANY</p>
                    <p className='text-[#64748B] mb-[13px]'>About</p>
                    <p className='text-[#64748B] mb-[13px]'>Contact</p>
                    <p className='text-[#64748B] mb-[13px]'>Careers</p>
                </div>
                <div>
                    <p className='text-[#0F172A] font-semibold mb-[15px]'>LEGAL</p>
                    <p className='text-[#64748B] mb-[13px] whitespace-nowrap'>Privacy Policy</p>
                    <p  className='text-[#64748B] mb-[13px] whitespace-nowrap'>Terms of Service</p>
                </div>

                <div>
                    <div className='flex gap-8 mt-[253px]'>
                        <p className='text-[#94A3B8]'>Privacy</p>
                        <p className='text-[#94A3B8]'>Terms</p>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;