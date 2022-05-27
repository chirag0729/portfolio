import React from 'react';

import { HTML, CSS, JavaScript, ReactImg, GitHub, Tailwind, Bs } from '../assets'

const skillsData = [
    { imgSrc: HTML, skillName: 'HTML5' },
    { imgSrc: CSS, skillName: 'CSS 3' },
    { imgSrc: JavaScript, skillName: 'Javascript' },
    { imgSrc: ReactImg, skillName: 'React Js' },
    { imgSrc: Bs, skillName: 'Bootstrap' },
    { imgSrc: Tailwind, skillName: 'Tailwind Css' },
    { imgSrc: GitHub, skillName: 'Git' },
]

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#f96a51] '>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {skillsData.map((sk) => {
                        return (

                            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                                <img className='w-20 mx-auto' src={sk.imgSrc} alt="icon" />
                                <p className='my-4'>{sk.skillName}</p>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;

