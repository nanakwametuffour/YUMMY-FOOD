import React from "react";
import banner from "../assets/food-back.jpg";
import { FaHandPointDown } from "react-icons/fa";
import ShowMenu from "../components/ShowMenu";
import meal from "../assets/mealData";
import { IoBagOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
 
export default function Ordering() {
  const dispatch = useDispatch()
  return (
    <div>
      <div className="w-full h-auto">
        <div className=" relative w-full ">
          <img src={banner} alt="" className="w-full h-[230px]  object-cover" />
          <div className=" absolute w-full h-full bg-black/60 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div className=" flex flex-col justify-center gap-2">
              <div className="flex items-center capitalize gap-1">
                <h1 className="text-orange-400 text-5xl font-bold">food</h1>
                <p className="text-white text-5xl">voucher</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl text-white font-bold animate-pulse">
                  30% off
                </span>
                <div className="flex items-center text-2xl gap-2">
                  <span className=" text-white font-bold">
                    place your order below
                  </span>
                  <FaHandPointDown className=" animate-bounce text-orange-400 font-semibold text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full py-10 h-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10">
          {meal?.map((item) => (
            <div key={item.id} className="flex justify-center w-full">
              <div className=" relative flex flex-col w-full rounded-lg gap-3 shadow-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[200px] object-cover hover:scale-110 transition-all duration-300"
                  />
                <div className="p-3">
                  <h3>{item.name}</h3>
                   <span className=" absolute top-3 right-3 bg-orange-400 px-2 text-white text-2xl font-medium">{item.price}</span>
                <button  className="flex items-center gap-1 bg-orange-400 px-2 rounded-lg active:scale-110 transition-all duration-300">
                   <span className="mt-1">Add To Cart</span>
                <IoBagOutline className="text-2xl"/>
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" py-5">
          <ShowMenu />
        </div>
        <div className="">details</div>
      </div>
    </div>
  );
}
