import React from 'react'
import banner from '../assets/food-back.jpg'
import { FaHandPointDown } from 'react-icons/fa'
export default function Ordering() {
  return (
    <div>
       <div className="w-full h-auto">
          <div className=" relative w-full ">
            <img src={banner} alt="" className='w-full h-[230px]  object-cover'/>
             <div className=" absolute w-full h-full bg-black/60 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                <div className=" flex flex-col justify-center gap-2">
                 <div className="flex items-center capitalize gap-1">
                  <h1 className='text-orange-400 text-5xl font-bold'>food</h1>
                   <p className='text-white text-5xl'>voucher</p>
                 </div>
                 <div className="flex flex-col gap-2">
                   <span className='text-3xl text-white font-bold animate-pulse'>30% off</span>
                    <div className="flex items-center text-2xl gap-2">

                    <span className=' text-white font-bold'>place your order below</span>
                    <FaHandPointDown className=' animate-bounce text-orange-400 font-semibold text-3xl'/>
                    </div>
                 </div>
                </div>
             </div>
          </div>
        <div className="">add</div>
        <div className="">details</div>
          <div className="">slide</div>
       </div>
    </div>
  )
}

