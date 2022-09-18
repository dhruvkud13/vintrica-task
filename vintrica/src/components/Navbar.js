import React from 'react'
import { FaRoad } from 'react-icons/fa'
import { AiOutlineHome,AiOutlineCar,AiOutlineQuestionCircle,AiOutlineShoppingCart } from 'react-icons/ai'
import { BiEuro } from 'react-icons/bi'
import {GiEuropeanFlag} from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className='flex py-3 justify-between bg-white shadow-lg'>
      <div className='flex'>
      <div className='flex'>
        <FaRoad color='orange' size={40} className='ml-2 mt-1'/>
        <div className='ml-2 text-[30px] font-bold mr-10'>VINTRICA</div>
      </div>
      <div className='flex pt-3 text-gray-400'>
        <div className='flex'>
          <AiOutlineHome size={20} color='orange'/>
          <div className='mx-3 text-orange-400'>HOMEPAGE</div>
        </div>
        <div className='flex'>
          <AiOutlineCar size={20}/>
          <div className='mx-3'>HOW IT WORKS</div>
        </div>
        <div className='flex'>
          <AiOutlineQuestionCircle size={20}/>
          <div className='mx-3'>FAQS</div>
        </div>
      </div>
      </div>
      <div className='flex bg-orange-500 mr-5 text-white pt-1 font-semibold text-[20px] border-2 border-orange-400 rounded-2xl'>
        <div className='mx-2'>EUR</div>
        <BiEuro size={30} className='mr-3'/>
        <div className='text-[15px] mt-1'>|</div>
        <GiEuropeanFlag className='ml-3' size={30}/>
        <AiOutlineShoppingCart className='mx-3' size={30}/>
      </div>
    </div>
  )
}

export default Navbar