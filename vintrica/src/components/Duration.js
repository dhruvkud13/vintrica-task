import React from 'react'
import { useSelector } from 'react-redux'
import {BsCalendarCheck} from 'react-icons/bs'
import { BiEuro } from 'react-icons/bi'

const Duration = () => {
  const { details } = useSelector((state) => state.details)
  return (
    <div className='flex justify-evenly'>
        <div className='flex ml-60 mt-10 w-3/5 py-5 px-5 bg-[#dff0d8] border-2 border-green-500 rounded-2xl'>
            <BsCalendarCheck size={50} color='green' />
           {details?.duration} 
        </div>
        <div className='flex'>
            <div>16.00</div><BiEuro />
        </div>
    </div>
  )
}

export default Duration