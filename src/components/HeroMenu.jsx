import React from "react";
import { heroMenu } from "../assets/menuData";
import { truncate } from "lodash";
import { IoBagOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
export default function HeroMenu() {
  const dispatch = useDispatch();
         
         
         
  return (
    <div className="py-10 ">
      <div className="flex justify-center py-2">
        <h1 className=" border-b-2 border-orange-400 text-2xl font-semibold">
          people,s favorate
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-3 lg:p-10 w-full gap-5">
        {heroMenu?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-full h-auto shadow-lg rounded-lg overflow-hidden"
          >
            <div className="w-full h-[200px]">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="p-3 flex flex-col">
              <h1 className="font-semibold">{item.name}</h1>
              <p className="">{truncate(item.desc, { length: 50 })}</p>
              <div className="flex flex-col gap-2 p-1">
                <span className=" font-semibold">${item.price}</span>
                <span className="font-semibold">{item.rating}</span>
              </div>
              <button
                  onClick={()=>dispatch(addToCart({
                    id: item.id,
                    img: item.img,
                     name: item.name,
                      desc: item.desc,
                       price: item.price,
                       quantity: 1,
                  }))}
                className="flex justify-center rounded-lg items-center gap-2 w-full bg-orange-400 py-2 font-semibold active:scale-110 transition-all duration-300 shadow-md shadow-orange-300"
              >
                <span>Add To Cart</span>
                <IoBagOutline className="text-2xl" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
