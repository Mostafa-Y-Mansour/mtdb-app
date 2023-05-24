import React from "react";
import "./ShowHeader.css";
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

export default function ShowHeader(props) {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div className="cover-image">
        <div className="img-overlay"></div>
        <Swiper
          className="main-swiper"
          style={{
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-size": "1.9rem",
          }}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // spaceBetween={5}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="swiper-image">
            <img
              src="https://static.tvmaze.com/uploads/images/original_untouched/368/920896.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-image">
            <img
              src="https://static.tvmaze.com/uploads/images/original_untouched/368/920895.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-image">
            <img
              src="https://static.tvmaze.com/uploads/images/original_untouched/380/950339.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <div className="show-image">
          <img
            src={
              "https://static.tvmaze.com/uploads/images/medium_portrait/359/899785.jpg"
            }
            alt=""
          />
        </div>
      </div>
    </>
  );
}
