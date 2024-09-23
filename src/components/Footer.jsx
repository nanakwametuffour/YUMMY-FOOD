import React from "react";
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-slate-700 w-full  px-4 py-5 h-auto flex-col">
      <div className=" flex-row   lg:flex md:flex    justify-between  border-b-2 w-full border-gray-500 px-4 py-5 items-center">
        <div className=" py-2 lg:py-0 w-full flex flex-col justify-center items-center mb-1">
                  <h3 className="text-yellow-50">Follow Us</h3>
           <div className="flex text-2xl gap-5 text-orange-400 cursor-pointer ">
            <FaFacebook className="hover:scale-110 transition-all duration-300"/>
            <FaX className="hover:scale-110 transition-all duration-300"/>
             <FaYoutube className="hover:scale-110 transition-all duration-300"/>
             <FaInstagram className="hover:scale-110 transition-all duration-300"/>
              <FaSpotify className="hover:scale-110 transition-all duration-300"/>
           </div>
        </div>

        <div className="py-2 lg:py-0 w-full flex justify-center ">
          <div className="border bg-white rounded-lg flex overflow-hidden shadow-md">
            <input
              type="text"
              className="bg-transparent focus:outline-none w-full p-2"
              placeholder="Enter your email.."
            />
            <button className="bg-orange-400 text-white text-1xl uppercase font-semibold p-2">subcribe</button>
          </div>
        </div>
      </div>
       <div className="border-b-2 w-full py-10 border-gray-500 px-4 flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-center w-full items-center h-auto">
              <div className="w-full flex flex-col justify-center items-center">
                   <h1 className="text-white font-semibold text-base ">Our Top Cuisines</h1>
                   
                    <Link>
                     <span className="text-orange-400">Burgers</span>
                    </Link>
                    <Link>
                     <span className="text-orange-400">Fried Chicken</span>
                    </Link>
                    <Link>
                     <span className="text-orange-400">Pizza</span>
                    </Link>
                    <Link to={'/menu'}>
                     <span className="text-orange-400">all categories</span>
                    </Link>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-white font-semibold text-base ">Our Top Cities</h1>
                  <Link>
                   <span className="text-orange-400">London</span>
                  </Link>
                  <Link>
                   <span className="text-orange-400">Birmingham</span>
                  </Link>
                  <Link>
                   <span className="text-orange-400">Manchester</span>
                  </Link>
                  <Link>
                   <span className="text-orange-400">Leeds</span>
                  </Link>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                  <h1 className="text-white font-semibold text-base ">Quick Links</h1>
                   
                   <Link>
                   <span className="text-orange-400">FAQ</span>
                   </Link>
                   <Link>
                   <span className="text-orange-400">Become Partner</span>
                   </Link>
                   <Link>
                   <span className="text-orange-400">Blog</span>
                   </Link>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                  <h1 className="text-white font-semibold text-base">Contact</h1>
                  <Link>
                  <span className="text-orange-400">Help & Support</span>
                  </Link>
                  <Link>
                  <span className="text-orange-400">www.yummy.com</span>
                  </Link>
                  <Link>
                  <span className="text-orange-400">0535949011</span>
                  </Link>
                 
              </div>
          </div>
       </div>
       <div className=" px-0 lg:px-10 w-full flex-row md:flex lg:flex justify-between gap-4 py-4 ">
         <p  className="text-gray-200 flex justify-center items-center gap-2">All Rights Reserved
            <span> &copy; rights YUMMY App, 2024</span>
           </p>
           <p className="text-gray-200 flex justify-center">design by Nana Kwame Tuffour</p>
       </div>
    </div>
  );
}
