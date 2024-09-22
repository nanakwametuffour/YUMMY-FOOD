import React from 'react'
import { FaArrowCircleLeft, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import empty from '../assets/emptybag.png'
export default function Empty() {
  return (
    <div className='w-full h-auto py-5'>
           <div className="flex flex-col justify-center h-96 items-center p-10 gap-5 mt-10">
                  <div className="p-3">
                     <img src={empty} alt="" className='w-full h-full object-cover'/>
                    </div> 
                  <div className="p-3">
                     <Link to={'/'}>
                       
                      <button className='flex  justify-center items-center gap-1 font-semibold active:scale-110 bg-orange-400 w-full px-5 py-1 rounded-lg text-white'>
                      <FaArrowLeft/>
                        Continue Shopping</button>
                     </Link>
                  </div>
           </div>
        </div>
  )
}
