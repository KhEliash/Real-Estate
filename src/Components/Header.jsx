// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./Header.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "animate.css";

const Header = () => {
  return (
    <div className="h-[]">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div>
            <img
              src="https://i.ibb.co/PwHY8Td/dsd.jpg"
              alt="dsd"
              border="0"
              className="lg:h-[] w-screen 
            rounded-xl"
            />
            <div className="absolute top-0   w-full h-full rounded-xl text-white flex flex-col items-center justify-center md:space-y-3 lg:space-y-5      gradient ">
              <h1 className="animate__animated animate__fadeInLeft md:text-3xl lg:text-5xl font-bold text-orange-500">
                Welcome to Industrial Estates
              </h1>
              <h2 className="text-center animate__animated animate__fadeInRight">
                Explore Our Diverse Range of Industrial Properties
              </h2>
              <p className="text-center hidden lg:block w-3/4">
                At FactoryFusion, we specialize in connecting businesses with
                the perfect industrial spaces to thrive. Whether you're in need
                of a modern factory, a spacious warehouse, or a cutting-edge
                production plant, we've got you covered. Our curated selection
                of industrial estates offers a wide range of options to suit
                your unique requirements.
              </p>
              <button className="btn btn-sm md:btn-md lg:btn-lg text-white  bg-orange-500 border-none animate__animated animate__fadeInUp">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://i.ibb.co/z66tL6m/ew.jpg"
              alt="dsd"
              border="0"
              className="lg:h-[] w-screen 
            rounded-xl"
            />
            <div className="absolute top-0   w-full h-full rounded-xl text-white flex flex-col items-center justify-center md:space-y-3 lg:space-y-5      gradient ">
              <h1 className="animate__animated animate__fadeInLeft md:text-3xl lg:text-5xl font-bold text-orange-500">
                Welcome to Industrial Estates
              </h1>
              <h2 className="text-center animate__animated animate__fadeInRight">
                Explore Our Diverse Range of Industrial Properties
              </h2>
              <p className="text-center hidden lg:block w-3/4">
                At FactoryFusion, we specialize in connecting businesses with
                the perfect industrial spaces to thrive. Whether you're in need
                of a modern factory, a spacious warehouse, or a cutting-edge
                production plant, we've got you covered. Our curated selection
                of industrial estates offers a wide range of options to suit
                your unique requirements.
              </p>
              <button className="btn btn-sm md:btn-md lg:btn-lg text-white  bg-orange-500 border-none animate__animated animate__fadeInUp">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://i.ibb.co/8xQJpT1/1df.jpg"
              alt="dsd"
              border="0"
              className="lg:h-[] w-screen 
            rounded-xl"
            />
            <div className="absolute top-0   w-full h-full rounded-xl text-white flex flex-col items-center justify-center md:space-y-3 lg:space-y-5      gradient ">
              <h1 className="animate__animated animate__fadeInLeft md:text-3xl lg:text-5xl font-bold text-orange-500">
                Welcome to Industrial Estates
              </h1>
              <h2 className="text-center animate__animated animate__fadeInRight">
                Explore Our Diverse Range of Industrial Properties
              </h2>
              <p className="text-center hidden lg:block w-3/4">
                At FactoryFusion, we specialize in connecting businesses with
                the perfect industrial spaces to thrive. Whether you're in need
                of a modern factory, a spacious warehouse, or a cutting-edge
                production plant, we've got you covered. Our curated selection
                of industrial estates offers a wide range of options to suit
                your unique requirements.
              </p>
              <button className="btn btn-sm md:btn-md lg:btn-lg text-white  bg-orange-500 border-none animate__animated animate__fadeInUp">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <p className="text-center">...</p>
      </Swiper>
    </div>
  );
};

export default Header;
