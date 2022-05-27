import React from 'react';
import { HiOutlineDeviceMobile, HiMail} from 'react-icons/hi'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/ef1f68a2-85f5-4ff9-9638-ce9d38601b40" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-5'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f96a51] text-gray-300'>Contact</p>
                <p className='flex flex-row text-white text-lg mt-10'>{<HiOutlineDeviceMobile className='mt-1 mr-3'/>}+91 7350801347</p>
                <p className='flex flex-row text-white text-lg mt-4'> {<HiMail className='mt-1 mr-3'/>}patilchirag1432@gmail.com</p>
                <p className='text-gray-300 py-4'>// Submit the form below</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 outline-none' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] outline-none' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 outline-none' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#f96a51] hover:border-[#f96a51] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact