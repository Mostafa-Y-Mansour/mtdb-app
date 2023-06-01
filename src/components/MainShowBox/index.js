import React, { useEffect, useState } from "react";
import "./MainShowBox.css";
import { getImagesApi, getShow } from "../../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import pictureComingSoon from "../../assets/shared/picture coming soon.jpg";

export default function MainShowBox(props) {
  SwiperCore.use([Autoplay]);

  const [tvShow, setTvShow] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const showIds = [38913, 49964, 170, 21216];

  const getTvShow = async (id) => {
    let data = await getShow(id).then((res) => res.data);
    setTvShow((tvShow) => [...tvShow, data]);
  };

  const getImages = async (id) => {
    const data = await getImagesApi(id).then((res) => res.data);
    const backgroundData = data.filter((obj) => obj?.type === "background");
    return setEpisodes((episodes) => [...episodes, backgroundData[1]]);
  };

  // 38913 49964 52352 67148 170
  useEffect(() => {
    setTvShow([]);
    setEpisodes([]);
    showIds.forEach((id) => {
      if (id !== tvShow[tvShow.length - 1]?.id) {
        getTvShow(id);
        getImages(id);
      }
    });

    setIsLoading(false);
  }, []);

  function getRandomShow() {
    return tvShow.map((show, index) => {
      return (
        <SwiperSlide key={show?.id} className="slide-show-box">
          <div className="show-box">
            <div className="image-holder">
              <img
                src={
                  episodes[index]?.resolutions?.original?.url ||
                  pictureComingSoon
                }
                alt=""
              />
              <div className="image-overlay"></div>
            </div>
            <article className="show-info">
              <p className="show-meta">
                {show?.genres?.join(", ")} {"  "}
                <FontAwesomeIcon color={"gold"} icon={faStar} />{" "}
                {show?.rating?.average}
              </p>
              <h2 className="show-name">{show?.name}</h2>

              <Link
                as={"button"}
                to={`/shows/${show?.id}`}
                className="show-details"
              >
                Details <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </article>
          </div>
        </SwiperSlide>
      );
    });
  }

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
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
      {getRandomShow()}
    </Swiper>
  );
}
