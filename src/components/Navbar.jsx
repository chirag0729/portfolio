import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub,} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'react-scroll/modules/components/Link';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    
    return (
        <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
            <div className='flex justify-center items-center'>
               <h1 className='font-bold text-3xl logo'>CR</h1>
            </div>
            {/* menu */}

            <ul className='hidden sm:flex'>
                <li className='hover:text-[#f96a51]' ><Link  to="home"  smooth={true} duration={500} >Home</Link></li>
                <li className='hover:text-[#f96a51]' ><Link  to="about"  smooth={true} duration={500} >About</Link></li>
                <li className='hover:text-[#f96a51]' ><Link  to="skills"  smooth={true} duration={500} >Skills</Link></li>
                <li className='hover:text-[#f96a51]' ><Link  to="work"  smooth={true} duration={500} >Work</Link></li>
                <li className='hover:text-[#f96a51]' ><Link  to="contact"  smooth={true} duration={500} >Contact</Link></li>
            </ul>


            {/* hamburger */}
            <div onClick={handleClick} className='sm:hidden z-40'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobi menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-5  text-xl ac'><Link onClick={handleClick} to="home"  smooth={true} duration={500} >Home</Link></li>
                <li className='py-5 text-xl ac'><Link onClick={handleClick} to="about"  smooth={true} duration={500} >About</Link></li>
                <li className='py-5 text-xl ac'><Link onClick={handleClick} to="skills"  smooth={true} duration={500} >Skills</Link></li>
                <li className='py-5 text-xl ac'><Link onClick={handleClick} to="work"  smooth={true} duration={500} >Work</Link></li>
                <li className='py-5 text-xl ac'><Link onClick={handleClick} to="contact"  smooth={true} duration={500} >Contact</Link></li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] p-4 h-[50px] flex gap-1 items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-blue-700'>
                        <a className='flex justify-between items-center
                         w-full text-gray-300' href='/'>
                            Linkedin <FaLinkedin size={30} /></a>
                    </li>
                    <li className='w-[160px] p-4 h-[50px] flex gap-1 items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#524f4f]'>
                        <a className='flex justify-between items-center
                         w-full text-gray-300' href='https://github.com/chirag0729?tab=repositories'>
                            Github <FaGithub size={30} /></a>
                    </li>
                    <li className='w-[160px] p-4 h-[50px] flex gap-1 items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#2fa189]'>
                        <a className='flex justify-between items-center
                         w-full text-gray-300' href='mailto:patilchirag1432@gmail.com'>
                            Email <HiOutlineMail size={30} /></a>
                    </li>
                    <li className='w-[160px] p-4 h-[50px] flex gap-1 items-center ml-[-100px] hover:ml-[-1px] duration-300 bg-[#343232]'>
                        <a className='flex justify-between items-center
                         w-full text-gray-300' href='https://drive.google.com/file/d/1-PAZFEsp4p7GvMg24NS-tftAPn_XME-u/view?usp=sharing'>
                            Resume <BsFillPersonLinesFill size={30} /></a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar