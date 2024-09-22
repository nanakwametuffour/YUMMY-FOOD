import React from 'react'
import { FiAlignCenter } from 'react-icons/fi'
import { GiShoppingCart } from 'react-icons/gi'
import img from '../assets/chick.jpg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCartOpen, setIsOpen } from '../redux/cart/cartSlice'
export default function Header() {
    const dispatch =useDispatch()
    const product = useSelector((state)=>state.product.sideState)
    const addProduct =useSelector((state)=>state.product.cartProduct)
           
           
   
  return (
    <div className='bg-white shadow sticky top-0 px-2 z-10'>
        <div className="w-full max-w-6xl mx-auto p-3 flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
            <FiAlignCenter onClick={()=>dispatch(setIsOpen())} className='text-4xl font-semibold active:scale-105 cursor-pointer'/>
               <Link to={'/'}>
            <div className="flex justify-center items-center">
              <h1 className='text-red-600 text-sm lg:text-2xl font-semibold'>YUMMY</h1>
               <img src={img} alt="img" className='w-10 h-10 lg:w-14 lg:h-14 object-cover'/>
            </div>
               </Link>
            </div>
            <div className=" flex  w-auto justify-center border p-2 rounded-lg">
                <input type="text" className='w-24 sm:w-64 focus:outline-none bg-transparent placeholder:text-gray' placeholder='Search meal..' />
            </div>
            <div onClick={()=>dispatch(setCartOpen())}  className="  relative active:scale-105 cursor-pointer">
            <GiShoppingCart  className=' text-5xl text-black font-semibold'/>
              <span className='w-5 h-5 bg-red-700 flex items-center justify-center rounded-full text-white absolute top-0 right-0'>
                 {
                  addProduct.length > 0 ? addProduct.length : 0
                 }
                </span>
            </div>
        </div>
    </div>
  )
}
