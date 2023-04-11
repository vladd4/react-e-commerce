import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SLiderImg from "../imgs/Group 112.png";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const styles = {
    display: "grid",
    placeItems: "center",
  };
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#9d9d9d",
        "--swiper-pagination-color": "#9d9d9d",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide style={styles}>
        <img className="slider-img" src={SLiderImg} alt=""></img>
      </SwiperSlide>
      <SwiperSlide style={styles}>
        <img className="slider-img" src={SLiderImg} alt=""></img>
      </SwiperSlide>
      <SwiperSlide style={styles}>
        <img className="slider-img" src={SLiderImg} alt=""></img>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
