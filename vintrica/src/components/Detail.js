import React from 'react'
import { useSelector } from 'react-redux'
import {BiBus,BiTrain} from 'react-icons/bi'
import {GiEuropeanFlag} from 'react-icons/gi'
import {FaMotorcycle} from 'react-icons/fa'
import {AiFillCar} from 'react-icons/ai'
import {BsTruck} from 'react-icons/bs'

const Detail = () => {
  const { details } = useSelector((state) => state.details)
  return (
    <div>
      {details?.vehicle=== 'car'? <div className='flex ml-60 mt-10 w-3/5 py-5 px-5 bg-[#dff0d8] border-2 border-green-500 rounded-2xl'>
           <AiFillCar size={50} color='green' /><div className='text-[30px] pl-2 text-green-700'>{details?.vehicle}</div></div> :
          (details?.vehicle=== 'bike'? <div className='flex ml-60 mt-10 w-3/5 py-5 px-5 bg-[#dff0d8] border-2 border-green-500 rounded-2xl'>
           <FaMotorcycle size={50} color='green'  /><div className='text-[30px] pl-2 text-green-700'>{details?.vehicle}</div></div>:
           (details?.vehicle=== 'bus'? <div className='flex ml-60 mt-10 w-3/5 py-5 px-5 bg-[#dff0d8] border-2 border-green-500 rounded-2xl'>
           <BiBus size={50} color='green' /><div className='text-[30px] pl-2 text-green-700'>{details?.vehicle}</div></div>:
           (details?.vehicle=== 'train'? <div className='flex ml-60 mt-10 w-3/5 py-5 px-5 bg-[#dff0d8] border-2 border-green-500 rounded-2xl'>
           <BiTrain size={50} color='green' /><div className='text-[30px] pl-2 text-green-700'>{details?.vehicle}</div></div>:
           (details?.vehicle=== 'truck'? <div className='flex ml-60 mt-10 w-3/5 py-5 px-5 bg-[#dff0d8] border-2 border-green-500 rounded-2xl'>
           <BsTruck size={50} color='green' /><div className='text-[30px] pl-2 text-green-700'>{details?.vehicle}</div></div>:
           <div className='flex ml-60 mt-10 w-3/5 py-5 px-5 bg-[#dff0d8] border-2 border-green-500 rounded-2xl'>
           <BsTruck size={50} color='green' /><div className='text-[30px] pl-2 text-green-700'>{details?.vehicle}</div></div>))))
        }
    </div>
  )
}

export default Detail