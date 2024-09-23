import React from "react";
import { categories } from "../assets/mealData";

export default function Trending() {
  return (
    <div className="w-full py-10 h-auto flex flex-col justify-center gap-5">
      <h1 className="text-2xl uppercase text-orange-400 border-b-2 border-orange-400 font-semibold self-center">
        Trending Categories
      </h1>
      <div className="w-full justify-center items-center">
        <div className="py-2 w-full h-auto p-3 grid grid-cols-3 md:grid-cols-4 sm:grid-cols-3 gap-3">
          {categories?.map((item) => (
            <div key={item.id} className="flex justify-center w-full items-center">
                <img src={item.image} alt="" className="w-28 h-30 object-cover"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
