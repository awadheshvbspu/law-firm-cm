import React from 'react';

//import team data
import { team } from '../data';

export default function Team() {
  return (
    <div id='team' className='section'>
      <div className='container mx-auto text-center'>
     <h2 className='text-5xl font-primary font-extrabold mb-4'>Our Attourneys</h2>
     <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

     {/* team member */}
    <div className='lg:grid lg:grid-cols-3 lg:gap-x-[30px]'>
    {team.map((item,i)=>{
      const{image, name, position, description} = item;
      return(
        <div key={i} className='text-center lg:tetx-left mb-12'>
            <img src={image} alt='' className='mx-auto mg:m-0 mb-6'/>
            <h4 className='text-2xl mb-2 font-primary font-bold'>{name}</h4>
            <p className='text-sm uppercase tracking-[0.3px] mb-4 opacity-[0.8]'>{position}</p>
            <p className='max-w-[332px] lg:max-w-[350px] mx-auto lg:mx-0'>{description}</p>
        </div>
      )
     })}
    </div>
      </div>
    </div>
  )
}
