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
             <div className="w-full gap-1 flex flex-col py-3 justify-center">
               
               <div className="w-full flex justify-center hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
                 <Link to={'/menu'} className='flex gap-3 items-center'>
                 <GrRestaurant/>

                    <h2>Menu</h2>
                 </Link>
               </div>
               <div className="w-full flex justify-center hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
                <Link to={'/burger'} className='flex items-center gap-3'>
               <PiHamburgerLight/>
               <h2>Burger</h2>
                </Link>
               </div>
               <div className="w-full flex justify-center hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
               <Link to={'/chicken'} className='flex items-center gap-3 pl-2'>
               <GiChickenOven/>
                <h2>Chicken</h2>
               </Link>
               </div>
               <div className="w-full flex justify-center hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
               <Link to={'/pizza'} className='flex items-center gap-3 pr-3'>
               <PiPizzaLight/>
                <h2>Pizza</h2>
               </Link>
               </div>
               <div className="w-full flex justify-center hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
               <Link to={'/steak'} className='flex items-center gap-3 pr-1'>
               <GiSteak/>
                <h2>Steak</h2>
               </Link>
               </div>
               <div className="w-full flex justify-center hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
               <Link to={'/cake'} className='flex items-center gap-3 pr-1'>
               <BsCake2/>
                  <h2>Cake</h2>
               </Link>

               </div>
               <div className="w-full flex justify-center items-center gap-3 hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
               <LiaUserCircleSolid/>
                 <h2>My Account</h2>
               </div>
               <div className="w-full flex justify-center items-center gap-3 pr-9 hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
               <CiDeliveryTruck className='text-3xl'/>
                  <h2>Delivery</h2>
               </div>
               <div className="w-full flex justify-center items-center gap-3 hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
               <GrFavorite/>
                <h2>My Favorite</h2>
               </div>
               <div className="w-full flex justify-center items-center gap-3 pr-7 hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
               <RiWallet3Line/>
                 <h2>My Wallet</h2>
               </div>
               <div className="w-full flex justify-center items-center gap-3 pr-20 hover:bg-orange-400 py-1 transition-all duration-300 text-2xl px-2">
               <IoIosHelpCircleOutline className='text-3xl'/>
                <h2>help</h2>
               </div>
             </div>
        </div>
  )
}
