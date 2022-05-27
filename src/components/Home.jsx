import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profile from '../assets/blackprofile.jpg';
import { FaLinkedin, FaGithub, } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll/modules';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] flex justify-center'>
      <div className='flex flex-col justify-center'>
      <div className='flex md:pt-0 justify-center  flex-col-reverse md:flex-row gap-4 md:gap-30'>
        <div>
          <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#f96a51]'>Hi, I am</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Chirag.</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8b95be]'>Frontend Developer</h2>
            <p className='text-[#8892b0] text-3xl py-4 '>Developer based in Mumbai, India.</p>
            <div className='flex'>
              <div>
                <button className=' text-white text-sm sm:text-lg border-2 py-2 mt-5 px-4  flex items-center hover:bg-[#f96a51] hover:border-[#f96a51]'><Link  to="work"  smooth={true} duration={1000} >View Work</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='md:relative flex flex-col gap-6 lg:gap-0 justify-center items-center md:mr-[40px]'>
          <img src={profile} className='max-w-[235px] md:max-w-[300px] md:z-10  rounded-lg'></img>
          <div className=' absolute  md:w-[315px] md:h-[325px]  md:top-[13%] lg:top-[9%] bg-[#8892b0]  rounded-lg shadow-xl '></div>
        </div>
      </div>
      <div className='lg:hidden flex gap-10 mt-[50px]  justify-center items-center gapm'>
                <a href='https://drive.google.com/file/d/1QdJQ83hHi68uKWTqbDAz0IS1-dPxsSRe/view?usp=sharing'><button className=' text-white hover:text-[#f96a51]'>< BsFillPersonLinesFill size={30}/></button></a>
                <a href='https://github.com/chirag0729?tab=repositories'><button className=' text-white hover:text-[#f96a51]    '>< FaGithub  size={30}/></button></a>
                <a href=''><button className=' text-white hover:text-[#f96a51]'>< FaLinkedin  size={30}/></button></a>
                <a href='mailto:patilchirag1432@gmail.com'><button className='text-white hover:text-[#f96a51]'>< HiOutlineMail  size={30}/></button></a>
      </div>
      </div>
     
    </div>
  )
}

export default Home