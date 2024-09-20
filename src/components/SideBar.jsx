import React from 'react'
import img from '../assets/chick.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { FaTimes } from 'react-icons/fa';
import { setIsClose } from '../redux/cart/cartSlice';

 
 
export default function SideBar() {
      const dispatch =useDispatch()
    const product = useSelector((state)=>state.product.sideState)
         console.log(product);
         
  return (
    <div className={`fixed top-0 left-0 h-screen bg-white z-100 w-[300px] shadow-lg ${!product ? "hidden" :"fixed top-0 transform translate-x transition-all -left-0 h-screen bg-white z-20 w-[300px] shadow-lg duration-300"}`}>
             <div className="border-b flex justify-between items-center p-3">
             <div className="flex justify-center items-center">
              <h1 className='text-red-600 text-sm lg:text-2xl font-semibold'>YUMMY</h1>
               <img src={img} alt="img" className='w-10 h-10 lg:w-14 lg:h-14 object-cover'/>
            </div>
               <div className=" cursor-pointer text-2xl">
                 <FaTimes onClick={()=>dispatch(setIsClose())} className='text-red-700 font-semibold active:scale-110 '/>
               </div>
             </div>
        </div>
  )
}
