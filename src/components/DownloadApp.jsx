import React from "react";
import app_img from "../assets/food phone.webp";
import food from '../assets/pizza1.avif'
import { Link } from "react-router-dom";
export default function DownloadApp() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-orange-400 border-b-2 border-orange-400 uppercase">
         
          Quick Delivery App
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-5 gap-8 px-10">
        <div className="w-[100%] p-5 flex justify-center items-center">
          <img src={app_img} alt="" className="w-full h-auto object-cover" />
        </div>
        <div className=" flex flex-col p-1 justify-center  items-center gap-5">
          <Link>
            <h1>Download The App</h1>
          </Link>
          <div className=" flex border rounded-full overflow-hidden ">
            <div className="w-full justify-center items-center animate-spin">
                <img src={food} alt="" className="w-40 h-40 object-cover"/>
            </div>
            
          </div>
          <div className="py-5 w-full p-3 flex justify-center">
               
                   <div className="flex flex-col gap-3 w-[300px]">
                    <h1 className="text-2xl font-semibold">Deliver without limitation</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                         vitae commodi eveniet ipsum 
                        tempore voluptatem fugit quam dolorum esse quibusdam.</p>
                        <button className="bg-orange-400 text-white px-2 py-2 rounded-lg w-30 active:scale-110 shadow-md shadow-orange-300">Get Stated</button>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
}
