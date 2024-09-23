import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { meal } from "../assets/mealData";

export default function ShowMenu() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="px-2 md:px-6 lg:px-10 w-full h-auto">
          <Carousel
           responsive={responsive}
           infinite={true}
           autoPlay={false}
           draggable={true}
           centerMode={true}
           arrows={true}
           transitionDuration={1000}
          >
             {
                meal?.map((item)=>(
                    <div className="w-full px-2 h-auto">
                        <div className="w-full relative rounded-lg overflow-hidden h-full">
                            <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover"/>
                            <div className="w-full h-full top-0 right-0 left-0 bottom-0 bg-black/60 absolute flex flex-col items-center justify-center">
                               <h1 className="text-2xl text-orange-400 font-semibold animate-pulse">{item.name}</h1>
                            </div>
                        </div>
                    </div>
                ))
             } 
          </Carousel>
    </div>
  );
}
