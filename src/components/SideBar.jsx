import React from 'react'
import img from '../assets/chick.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { FaTimes, FaUser } from 'react-icons/fa';
import { setIsClose } from '../redux/cart/cartSlice';
import { MdAccountCircle, MdOutlineTableRestaurant, MdRestaurantMenu } from 'react-icons/md';
import { CiDeliveryTruck } from 'react-icons/ci';
import { GrFavorite, GrRestaurant } from 'react-icons/gr';
import { RiWallet3Line } from 'react-icons/ri';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { LiaUserCircleSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { IoRestaurantOutline } from 'react-icons/io5';
import { PiHamburgerLight, PiPizzaLight } from 'react-icons/pi';
import { GiChickenOven, GiSteak } from 'react-icons/gi';
import { BsCake2 } from 'react-icons/bs';

 
 
export default function SideBar() {
      const dispatch =useDispatch()
    const product = useSelector((state)=>state.product.sideState)
         console.log(product);
         
  return (
    <div className={`fixed flex flex-col top-0 left-0 h-screen bg-white z-100 w-[300px] shadow-lg ${!product ? "hidden" :"fixed top-0 transform translate-x transition-all -left-0 h-screen bg-white z-20 w-[300px] shadow-lg duration-300"}`}>
             <div className="border-b flex justify-between items-center p-3">
             <div className="flex justify-center items-center">
              <h1 className='text-red-600 text-sm lg:text-2xl font-semibold'>YUMMY</h1>
               <img src={img} alt="img" className='w-10 h-10 lg:w-14 lg:h-14 object-cover'/>
            </div>
               <div className=" cursor-pointer text-2xl">
                 <FaTimes onClick={()=>dispatch(setIsClose())} className='text-red-700 font-semibold active:scale-110 '/>
               </div>
             </div>
             <div className="w-full gap-5 lg:gap-1 flex flex-col py-7 lg:py-3 justify-center">
               
               <div className="w-full flex justify-center hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
                 <Link onClick={()=>dispatch(setIsClose())} to={'/menu'} className='flex items-center'>
                 <GrRestaurant className=""/>

                    <h2 className="px-2  w-30 text-base">Menu</h2>
                 </Link>
               </div>
               <div className="w-full flex justify-center hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
                <Link onClick={()=>dispatch(setIsClose())} to={'/burger'} className='flex items-center'>
               <PiHamburgerLight className=""/>
               <h2 className="px-2  w-30 text-base">Burger</h2>
                </Link>
               </div>
               <div className="w-full flex justify-center hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
               <Link onClick={()=>dispatch(setIsClose())} to={'/chicken'} className='flex items-center  pl-2'>
               <GiChickenOven className=""/>
                <h2 className="px-2  w-30 text-base">Chicken</h2>
               </Link>
               </div>
               <div className="w-full flex justify-center hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
               <Link onClick={()=>dispatch(setIsClose())} to={'/pizza'} className='flex items-center pr-1'>
               <PiPizzaLight className=""/>
                <h2 className="px-2  w-30 text-base">Pizza</h2>
               </Link>
               </div>
               <div className="w-full flex justify-center hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
               <Link onClick={()=>dispatch(setIsClose())} to={'/steak'} className='flex items-center  pr-1'>
               <GiSteak className=""/>
                <h2 className="px-2  w-30 text-base">Steak</h2>
               </Link>
               </div>
               <div className="w-full flex justify-center hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
               <Link onClick={()=>dispatch(setIsClose())} to={'/cake'} className='flex items-center  pr-1'>
               <BsCake2 className=""/>
                  <h2 className="px-2  w-30 text-base">Cake</h2>
               </Link>

               </div>
               <div className="w-full flex justify-center items-center gap-3 hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
                 <div onClick={()=>dispatch(setIsClose())} className="flex  gap-1 pl-1">
                 <LiaUserCircleSolid/>
                 <h2 className='text-base'>My Account</h2>
                 </div>
              
               </div>
               <div className="w-full flex justify-center items-center gap-3 pr-2 hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
                 <div onClick={()=>dispatch(setIsClose())} className="flex items-center gap-1">

               <CiDeliveryTruck className='text-3xl'/>
                  <h2 className='text-base'>Delivery</h2>
               </div>
                 </div>
               <div className="w-full flex justify-center items-center gap-1 hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
                <div onClick={()=>dispatch(setIsClose())} className="flex items-center pl-2 gap-1">

               <GrFavorite/>
                <h2 className='text-base'>My Favorite</h2>
                </div>
               </div>
               <div className="w-full flex justify-center items-center gap-3 hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
                  <div onClick={()=>dispatch(setIsClose())} className="flex items-center gap-1">

               <RiWallet3Line/>
                 <h2 className='text-base'>My Wallet</h2>
                  </div>
               </div>
               <div className="w-full flex justify-center items-center gap-3 hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
                 <div onClick={()=>dispatch(setIsClose())} className="flex items-center pr-10">

               <IoIosHelpCircleOutline className='text-3xl'/>
                <h2 className='text-base'>Help</h2>
                 </div>
               </div>
             </div>
        </div>
  )
}
