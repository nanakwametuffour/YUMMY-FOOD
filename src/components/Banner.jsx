import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { banner } from "../assets/menuData";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="py-10 ">
      <Carousel
        className=""
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        infinite={true}
       
        
        draggable={true}
        autoPlay={true}
        centerMode={false}
        autoPlaySpeed={4000}
        transitionDuration={5000}
        arrows={false}
      >
        {banner?.map((item) => (
          <div key={item.id} className=" gap-4 relative rounded-lg overflow-hidden">
            <div className="flex  justify-center items-center gap-1">
              <img
                src={item.image}
                alt=""
                className="w-full object-cover h-96 rounded-lg"
              />
               <div className=" absolute w-full h-full bg-black/60 flex flex-col justify-center items-center">
                <h1 className="text-white text-3xl capitalize animate-bounce">{item.name}</h1>
                 <p className="text-yellow-50 text-2xl font-semibold capitalize animate-pulse px-5">{item.des}</p>
                <Link className="py-3">
                 <button className="bg-orange-400 px-2 py-1 rounded-lg text-yellow-50 shadow-lg shadow-orange-200 active:scale-110  ">Order Now</button>
                 </Link>
               </div>
                
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
