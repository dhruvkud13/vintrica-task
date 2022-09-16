import React from 'react'
import {TiTick} from 'react-icons/ti'
import Car from '../images/car.jpg'

const Info = () => {
  return (
    <div>
        <div className='flex'>
            <div className='w-1/2 ml-60 mt-20'>
                <div className='text-[35px] font-semibold'>E-vignette: here’s how it works</div>
                <div className='w-4/5 text-[15px]'>With vintrica it’s easy to register your number plate online for all
                    <span className='font-semibold'> motorways and main roads that require a vignette.</span> You can simply buy a 
                    vignette either from home before you start your journey or on the spur of
                     the moment during your journey on your smartphone before you get on the motorway.</div>
                <div className='mt-5 text-[25px] text-green-700'>
                    <div className='flex'><TiTick color='green' size={40} className='mr-3' />Quick to use</div>
                    <div className='flex'><TiTick color='green' size={40} className='mr-3' />Instant activation</div>
                    <div className='flex'><TiTick color='green' size={40} className='mr-3' />Vignette directly on your mobile phone</div>
                    <div className='flex'><TiTick color='green' size={40} className='mr-3' />Secure online payment</div>
                </div>
            </div>
            <div className='w-1/2'>
                <img className='mt-24 object-fit h-3/4 w-3/4 rounded-2xl' src={Car} alt="car" />
            </div>
        </div>
    </div>
  )
}

export default Info