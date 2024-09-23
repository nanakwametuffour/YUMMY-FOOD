import React from "react";
import { beverage } from "../assets/menuData";

export default function Beverages() {
  return (
    <div className="py-10 w-full h-auto justify-center flex flex-col items-center">
      <h2 className="border-b-2 border-orange-400 text-2xl font-semibold text-orange-400">
        Beverages
      </h2>
      <div className="flex w-full justify-center px-3 py-7">
        {beverage?.map((item) => (
          <div key={item.id} className="w-30 flex flex-col p-3 gap-2 justify-center items-center">
            <img src={item.img} alt="" className="w-full h-auto object-cover hover:scale-110 transition-all duration-300"/>
             <p className="flex items-center w-full justify-center">
                <span className="text-base capitalize">{item.name}</span>
                <span className=" text-sm">&copy;</span>
             </p>
             
          </div>
           
        ))}
      </div>
      <div className="w-full p-3">
           <p className="py-1">
           Enjoy a wide selection of refreshing Coca-Cola soft drinks, frozen drinks, smoothies, teas and more on YUMMY's Drink Menu! Choose from hot or cold beverages, like hot premium coffee or ice cold soft drinks, for a perfect finish to a satisfying meal. Order today in
           </p>
         </div>
    </div>
  );
}
