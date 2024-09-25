import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";
import { LiaTimesSolid } from "react-icons/lia";
import { RiMenuFold2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import { topPicks } from "../assets/mealData";
import Card from "../components/Card";

export default function Menu() {
  const [locationMap, setLocationMap] = useState(false);
  const [searchItem, setSearchItem]=useState("")
  return (
    <div className="w-full h-auto flex flex-col gap-5 top-0 py-9 px-6 lg:px-10">
      <div className="  w-full h-auto flex justify-between items-center">
        <div className=" flex justify-between w-60 lg:w-[600px] border rounded-lg px-2 p-4">
          <input onChange={(e)=>setSearchItem(e.target.value)}
            type="text"
            placeholder="Search Meal...."
            className="w-full focus:outline-none  "
          />
           <div className="flex text-2xl">
            <CiSearch />
           
          </div>
        </div>
        <div className="">
          {!locationMap ? (
            <GrMapLocation
              onClick={() => setLocationMap(true)}
              className="text-6xl border px-3 cursor-pointer font-semibold rounded-lg"
            />
          ) : (
            <RiMenuFold2Line
              onClick={() => setLocationMap(false)}
              className="text-6xl border px-3 cursor-pointer font-bolder rounded-lg"
            />
          )}
        </div>
      </div>
      <div className="border-b-2 py-2">button header</div>
      <div className="flex-row lg:flex w-full justify-center items-center px-2 gap-5">
        <div className="flex flex-wrap gap-8 justify-center">
          {topPicks?.filter((item)=>{
             if(searchItem===""){
              return item
             } else if (item.name.toLowerCase().includes(searchItem.toLocaleLowerCase())){
              return item
             }
          }).map((item) => (
            <div key={item.id} className="shadow-lg shadow-gray-300 w-[300px] rounded-lg overflow-hidden">
              <Card item={item}/>
            </div>
          ))}
        </div>
        <div className={` ${!locationMap ? "hidden" : "block"}`}>
          <Map />
        </div>
      </div>
    </div>
  );
}
