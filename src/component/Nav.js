import React from 'react'
//import navigation

import {navigation} from '../data'
import { Link } from 'react-scroll'
export default function Nav() {
  return (
    <div className='hidden lg:flex '>
      <ul className=' lg:flex space-x-6 font-body font-semibold text-sm text-primary'>
        {navigation.map((item,i)=>{
            return(
                <li key={i}>
                    <Link to={item.href} smooth={true} offset={-120} activeClass='active' spy={true} className='hover:text-amber-700 text-lg transition-all duration-300 cursor-pointer'>
                        {item.name}
                    </Link>
                </li>
            )
        })}
      </ul>
    </div>
  )
}
