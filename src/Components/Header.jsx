// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

 
const Header = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/PwHY8Td/dsd.jpg"
            alt="dsd"
            border="0"
            className="lg:h-[600px] w-screen 
            rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/z66tL6m/ew.jpg"
            alt="ew"
            border="0"
            className="lg:h-[600px] w-screen rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/8xQJpT1/1df.jpg"
            alt="1df"
            border="0"
            className="lg:h-[600px] w-screen rounded-xl"
          />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Header;
