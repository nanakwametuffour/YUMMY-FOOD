import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { topSlider } from "../assets/menuData";

export default function TopSlider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  return (
    <div className="">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        draggable={true}
        centerMode={true}
        arrows={false}
        transitionDuration={1000}
      >
        {
            topSlider?.map((item, i)=>(
                <div key={i} className="flex items-center gap-1">
                    <img src={item.image} alt="" className="w-10 h-10 md:w-13 md:w-13 lg:w-15 lg:h-15 object-cover rounded-full"/>
                     <p className=" font-medium">{item.title}</p>
                </div>
            ))
        }
      </Carousel>
    </div>
  );
}
