import React from 'react'

export default function NewsLetter() {
  return (
    <div id='' className='bg-amber-700 pt-[54px] pb-[74px]'>
    <div className='container mx-auto px-8 text-center'>
        <h3 className='font-primary text-[40px] font-extrabold leading-[1.2] text-white mb-[12px]'>Subscribe to our NewsLetter</h3>
        <p className='mb-[40px] text-white tetx-sm'>Be first to get the latest news about us.</p>
        <form className='max-w-[600px] mx-auto flex flex-col md:flex-row'>
            <input type='text' className=' h-54 w-full pl-4 rounded-sm outline-none font-body text-sm text-gray focus:ring-1 focus:ring-primary p-3 ' placeholder='Your Email Address'/>
            <button className='h-54 font-body font-semibold text-sm tracking-wide rounded-sm w-full flex items-center justify-center uppercase text-white bg-gray-900 hover:bg-gray-950 lg:max-w-[150px] md:ml-4 p-4 md:mt-0 mt-3'>Join</button>
        </form>
    </div>
      
    </div>
  )
}
