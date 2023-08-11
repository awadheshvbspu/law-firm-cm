import React from 'react';

// import social data
import { social } from '../data';

export default function Contact() {
    return (
        <div className='bg-gray-900  text-white min-h-[732px] section py-12' id='contact'>
            <div className='container mx-auto'>
                <h2 className='text-5xl font-primary font-extrabold mb-4 text-center py-12'>Contact Us</h2>
                <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-16'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <form className='px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-20'>
                    <input type='text' className='h-54 w-full pl-4 rounded-sm outline-none font-body text-sm text-gray focus:ring-1 focus:ring-primary p-4 text-black' placeholder='Full Name' />
                    <input type='text' className='h-54 w-full pl-4 rounded-sm outline-none font-body text-sm text-gray focus:ring-1 focus:ring-primary p-4 text-black' placeholder='Email Address' />
                    <textarea className='w-full pl-4 pt-4 rounded-sm outline-none font-body text-sm text-gray focus:ring-1 focus:ring-primary min-h-[126px] resize-none text-black' placeholder='Your Message'>

                    </textarea>
                    <button className=' font-body font-semibold text-sm tracking-wide rounded-sm w-full flex items-center justify-center uppercase text-white bg-amber-700 hover:bg-amber-800 p-6 transition-all duration-300'>Send Message</button>
                </form>
                {/* social */}
                <div className='flex justify-between items-center max-w-[205px] text-xl mx-auto'>
                    {social.map((item, i) => {

                        return (
                            <a href='#' key={i}>
                                <img src={item.icon} alt='' className=''/>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
