import React, { useState } from 'react'
// import icons 
import BarsIcon from '../assets/img/bars.png';
import CloseIcon from '../assets/img/close.png';

//import navigation
import { navigation } from '../data';

// import link 
import { Link } from 'react-scroll';

export default function NavMobile() {
    const [isOpen, SetIsOpen] = useState(false)
    return (
        <div className='lg:hidden relative z-20'>
            {/* menu icons */}
            <button onClick={() => SetIsOpen(true)}>
                <img src={BarsIcon} alt='' />
            </button>

            {/* nav list  */}
            <ul className={`${isOpen ? 'right-0' : '-right-full'} bg-gray-900 fixed top-0 w-full h-screen text-white transition-all flex flex-col justify-center items-center
       space-y-8 text-lg`}>
                {/* close button  */}
                <button onClick={() => SetIsOpen(false)} className='absolute top-6 left-6'>
                    <img src={CloseIcon} alt='' />
                </button>
                {navigation.map((item,i)=>{
                    return(
                        <li key={i}>
                        <Link to={item.href} activeClass='active' spy={true} offset={-200} className='cursor-pointer hover:text-amber-700 text-lg transition-all duration-300'>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
