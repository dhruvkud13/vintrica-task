import React from 'react'
import {TiTick} from 'react-icons/ti'

const Tracking = () => {
  return (
    <div>
        <div className='ml-60'>
            <div className='mt-10 mb-5 text-[30px]'>Register e-vignette</div>
            <div>
                <div className='flex'>
                    <div className='w-1/8 flex py-2 border-2 rounded-2xl bg-[#dadada] mr-5 text-gray-500'>
                        <div><TiTick size={40} /></div>
                        <div className='pt-2 pr-2'>Select e-vignette</div>
                    </div>
                    <div className='w-1/8 flex py-2 border-2 rounded-2xl bg-[#fc8c2e] mr-5 text-white'>
                        <div className='text-[25px] px-2'>2</div>
                        <div className='pt-2 pr-2'>number & validity</div>
                    </div>
                    <div className='w-1/8 flex py-2 border-2 rounded-2xl text-gray-500 bg-[#dadada] mr-5'>
                        <div className='text-[25px] px-2'>3</div>
                        <div className='pt-2 pr-2'>Shopping cart</div>
                    </div>
                    <div className='w-1/8 flex py-2 border-2 rounded-2xl text-gray-500 bg-[#dadada] mr-5'>
                        <div className='text-[25px] px-2'>4</div>
                        <div className='pt-2 pr-2'>E-mail address</div>
                    </div>
                    <div className='w-1/8 flex py-2 border-2 rounded-2xl text-gray-500 bg-[#dadada] mr-5'>
                        <div className='text-[25px] px-2'>5</div>
                        <div className='pt-2 pr-2'>Overview, T&C</div>
                    </div>
                    <div className='w-1/8 flex py-2 border-2 rounded-2xl text-gray-500 bg-[#dadada]'>
                        <div className='text-[25px] px-2'>6</div>
                        <div className='pt-2 pr-2'>Pay & go</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tracking