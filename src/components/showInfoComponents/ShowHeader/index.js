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

export default function ShowHeader({ poster, coverImages }) {
  SwiperCore.use([Autoplay]);

  const coverSlide = () => {
    if (coverImages[coverImages.length - 1]?.image) {
      return coverImages.map((coverImage) => {
        return (
          <SwiperSlide key={coverImage.id} className="swiper-image">
            <img
              src={coverImage?.image?.original || coverImage?.image?.medium}
              alt=""
            />
          </SwiperSlide>
        );
      });
    } else {
      return (
        <SwiperSlide className="swiper-image">
          <h1
            style={{ color: "#333", marginTop: "100px", textAlign: "center" }}
          >
            Cover Images are Not Available.
          </h1>
        </SwiperSlide>
      );
    }
  };

  return (
    <>
      <div className="cover-image">
        <div className="img-overlay"></div>
        <Swiper
          className="main-swiper"
          style={{
            "--swiper-pagination-bullet-inactive-color": "#fff",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
            "--swiper-pagination-bullet-opacity": "1",
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-size": "1.9rem",
          }}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          // navigation={true}
          pagination={{ clickable: true, tabindex: 3 }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {coverSlide()}
        </Swiper>
        <div className="show-image">
          <img src={poster} alt="poster" />
        </div>
      </div>
    </>
  );
}
