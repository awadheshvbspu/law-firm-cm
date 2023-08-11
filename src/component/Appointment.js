import React from 'react'

export default function Appointment() {
  return (
    <div className='bg-amber-700 w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto'>
      <h3 className='text-white text-[28px] font-bold tracking-[0.3px] text-center'>Get an Appointment</h3>
      <div className='w-[54px] h-[3px] bg-white my-6 mx-auto'>
            </div>
            {/* input */}
            <div className='space-y-[24px]'>
            <input className='h-54 w-full pl-4 p-2 rounded-sm outline-none font-body text-sm text-gray focus:ring-1 focus:ring-primary' placeholder='Full name'  type='text' />
            <input className='h-54 w-full pl-4 p-2 rounded-sm outline-none font-body text-sm text-gray focus:ring-1 focus:ring-primary' placeholder='Phone Number'  type='number' />
            <input className='h-54 w-full pl-4 p-2 rounded-sm outline-none font-body text-sm text-gray focus:ring-1 focus:ring-primary' placeholder='Enter Email'  type='email' />
            <textarea className='resize-none w-full h-[132px] outline-none rounded-sm p-4 font-body text-sm tetx-gray focus:ring-1 focus:ring-primary' placeholder='Your Message'></textarea>
            <button className='h-54 font-body font-semibold text-sm tracking-wide rounded-sm w-full flex items-center justify-center uppercase text-white p-4 bg-gray-900 hover:bg-gray-950 transition-all duration-300'>Send Message</button>
      </div>
    </div>
  )
}
