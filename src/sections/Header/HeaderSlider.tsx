import headerImg from "../../assets/images/img/header-img.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./HeaderSlider.css";
const HeaderSlider = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img className="w-full" src={headerImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={headerImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={headerImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={headerImg} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeaderSlider;
