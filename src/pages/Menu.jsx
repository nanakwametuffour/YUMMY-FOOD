import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";
import { LiaTimesSolid } from "react-icons/lia";
import { RiMenuFold2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Map from "../components/Map";

export default function Menu() {
  const [locationMap, setLocationMap] = useState(false);
  return (
    <div className="w-full h-auto flex flex-col gap-5 top-0 py-9 px-6 lg:px-10">
      <div className="  w-full h-auto flex justify-between items-center">
        <div className=" relative w-60 lg:w-[600px] border rounded-lg px-2 p-4">
          <input
            type="text"
            placeholder="Search Meal...."
            className="w-full pl-11 focus:outline-none px-3 "
          />
          <div className="flex justify-between absolute w-full top-3 px-4 text-2xl">
            <CiSearch />
            <LiaTimesSolid />
          </div>
        </div>
        <div className="">
          {!locationMap ? (
            <GrMapLocation onClick={() => setLocationMap(true)} className="text-6xl border px-3 cursor-pointer font-semibold rounded-lg"/>
          ) : (
            <RiMenuFold2Line onClick={() => setLocationMap(false)} className="text-6xl border px-3 cursor-pointer font-bolder rounded-lg"/>
          )}
        </div>
      </div>
      <div className="">button header</div>
      <div className="flex-row lg:flex w-full justify-center items-center px-5 gap-5">
        <div className="">
          menu
        </div>
        <div className={` ${!locationMap ? "hidden" : "block"}`}>
        <Map/> 
        </div>
      </div>
    </div>
  );
}
