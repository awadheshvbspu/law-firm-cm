import React from 'react'
import Header from './Header'
import Appointment from './Appointment';

// import lawyer image
import LawyerImage from '../assets/img/lawyer_banner.png'

export default function Banner() {
  return (
    <div  id='home' className='lg:h-full lg:max-h-800  bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]'>
      <Header/>
      <div className='container mx-auto h-full lg:flex pt-32'>
        <div className='text-center mx-auto h-full lg:text-left px-8 md:p-0'>
        <h1 className='font-gray-900 font-black text-6xl lg:text-7xl text-gray-950  mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]'>Your problem <br/> <span className='text-amber-700'>Our Goal.</span></h1>
        <p className='max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]'>Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='lg:absolute mx-auto max-w-[445px] lg:mx-0'>
         <Appointment/>

        </div>
        </div>
        {/* right side */}
        <div className='hidden flex-1 lg:flex lg:flex-col items-end'>
        <img src={LawyerImage} alt='' />
        </div>
      </div>
    </div>
  )
}
