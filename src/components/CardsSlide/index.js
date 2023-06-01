import React, { useEffect, useState } from "react";
import "./CardsSlide.css";
import ShowCard from "./../ShowCard/index";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { getAllShowsById } from "../../services/api";

SwiperCore.use([Autoplay]);

export default function CardsSlide({ id, name }) {
  const [cardView, setCardView] = useState(window.innerWidth / 220);
  const [showData, setShowData] = useState("pending");

  // fetch the data from getShowPage API
  const getShowList = async (id) => {
    try {
      const data = await getAllShowsById(id).then((res) => res.data);
      return setShowData(data);
    } catch (err) {
      console.error("Error", err.response.data);
      return setShowData(err.response.data);
    }
  };

  useEffect(() => {
    getShowList(id);
  }, [id]);

  // loop on the data list from getShowList
  const showMap = () => {
    if (showData === "pending") return <h1>Loading...</h1>;
    // handle errors
    if (showData.length === 0) return <h1>There are no TV Shows Available</h1>;
    return showData.map((shows, index) => {
      let show = showData[index * 10];
      if (index >= 24) return "";

      return (
        <>
          <SwiperSlide key={show?.name}>
            <ShowCard
              id={show?.id}
              image={show?.image?.medium}
              name={show?.name}
              genre={show?.genres}
              rating={show?.rating?.average}
            />
          </SwiperSlide>
        </>
      );
    });
  };

  return (
    <>
      <main className="main-slide-container">
        <p className="show-list-name">{name}</p>
        <Swiper
          style={{
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-size": "1.9rem",
          }}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // spaceBetween={5}
          slidesPerView={cardView}
          navigation
          onResize={() => {
            return window.innerWidth < 1200
              ? setCardView(window.innerWidth / 220)
              : setCardView(1200 / 220);
          }}
        >
          {showMap()}
        </Swiper>
      </main>
    </>
  );
}
