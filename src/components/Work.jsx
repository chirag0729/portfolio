import React from 'react';
import { gpt, countDown, crypto, skew, dict, math, rest, qg, nasa, sr, robo, mcp, notes, reen, loruki, skate } from '../assets';
import {FaCode, FaGithub} from 'react-icons/fa'


const workData = [
    { type: 'React JS', bgImg: crypto, demoLink: 'HTTPS://CRYPTO-TRACKER-F2337.WEB.APP/', gitLink: 'https://github.com/chirag0729/cr-tracker', title: 'Crypto Tracker' },
    { type: 'React JS', bgImg: rest, demoLink: 'https://restaurantapp-c68cb.web.app/', gitLink: 'https://github.com/chirag0729/restaurant-react', title: 'Food Delivery App' },
    { type: 'React JS', bgImg: notes, demoLink: 'https://chirag0729.github.io/notes/', gitLink: 'https://github.com/chirag0729/notes', title: 'Keep Notes' },
    { type: 'React JS', bgImg: gpt, demoLink: 'https://chirag0729.github.io/react-gpt-3/', gitLink: 'https://github.com/chirag0729/react-gpt-3', title: 'GPT-3' },
    { type: 'Javacript', bgImg: countDown, demoLink: 'https://custom-countdown-js-bs.netlify.app/', gitLink: 'https://github.com/chirag0729/Custom-countdown', title: 'Custom Countdown' },
    { type: 'Javascript', bgImg: dict, demoLink: 'https://chirag-dictionary.netlify.app', gitLink: 'https://github.com/chirag0729/Dictonary', title: 'Dictonary' },
    { type: 'Javascript', bgImg: math, demoLink: 'https://math-sprint-gamer.netlify.app', gitLink: 'https://github.com/chirag0729/math-sprint', title: 'Math-Sprint Game' },
    { type: 'Javascript', bgImg: qg, demoLink: 'https://quote-generator-bs-js.netlify.app/', gitLink: 'https://github.com/chirag0729/Quote-Generator', title: 'Quote-Generator' },
    { type: 'Javascript', bgImg: nasa, demoLink: 'https://nasa-apod-launcher.netlify.app', gitLink: 'https://github.com/chirag0729/nasa-apod', title: 'Nasa-Apod' },
    { type: 'Javascript', bgImg: sr, demoLink: 'https://spock-rock.netlify.app/', gitLink: 'https://github.com/chirag0729/spock-rock', title: 'Spock-Rock Game' },
    { type: 'Javascript', bgImg: robo, demoLink: 'https://robo-joker.netlify.app/', gitLink: 'https://github.com/chirag0729/Robo-joke-teller', title: 'Robo Joke-Teller' },
    { type: 'Javascript', bgImg: mcp, demoLink: 'https://musicplayer-rock.netlify.app/', gitLink: 'https://github.com/chirag0729/musicplayer', title: 'Music Player' },
    { type: 'UI / UX', bgImg: skew, demoLink: 'https://skew-designing-bs-5-project.netlify.app', gitLink: 'https://github.com/chirag0729/sKew-bs-5', title: 'Skew-Website' },
    { type: 'UI / UX', bgImg: reen, demoLink: 'https://reen-design-templete-site.netlify.app/', gitLink: 'https://github.com/chirag0729/reen-design-templete', title: 'Reean Design Temp.' },
    { type: 'UI / UX', bgImg: loruki, demoLink: 'https://loruki-html-css-nf.netlify.app/', gitLink: 'https://github.com/chirag0729/Loruki.1st-website.netlifyapp.com', title: 'Loruki Website' },
    { type: 'UI / UX', bgImg: skate, demoLink: 'https://skete-shop.netlify.app/', gitLink: 'https://github.com/chirag0729/Skete-Shop-and-order', title: 'Skete Shop' },
]

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#f96a51]'>
                        Work
                    </p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-3'>
                    {workData.map((item) => (
                        <div style={{ backgroundImage: `url(${item.bgImg})`, 'backgroundSize': 'cover', 'objectFit': 'cover', 'backgroundPosition': 'center', }}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >

                            <div className= "w-full h-36 opacity-0  transition-smooth  hover:opacity-100 text-center animate-bounce bg-[#0f3165] rounded-md flex flex-col justify-between">
                                <span className='text-2xl font-bold text-[#f96a51] tracking-wider'>
                                    {item.type}
                                </span>
                                <span className='text-xl font-bold text-white tracking-wider'>
                                    {item.title}
                                </span>
                                <div className='text-center'>
                                    <a href={item.demoLink} className=' anime'>
                                        <button className='text-center rounded-lg px-3 py-2 m-3  bg-white text-gray-700 font-bold text-lg'>
                                            <FaCode />
                                        </button>
                                    </a>
                                    <a href={item.gitLink} className=' anime1'>
                                        <button className='text-center rounded-lg px-3 py-2 m-3 bg-white text-gray-700 font-bold text-lg'>
                                           <FaGithub />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Work;





