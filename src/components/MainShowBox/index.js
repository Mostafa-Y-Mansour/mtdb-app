import React, { useEffect, useState } from "react";
import "./MainShowBox.css";
import { getImagesApi, getShowApi } from "../../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

export default function MainShowBox(props) {
  const [tvShow, setTvShow] = useState({});
  const [episodes, setEpisodes] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [num, setNum] = useState(49964);

  const getTvShow = async () => {
    const data = await getShowApi(num).then((res) => res.data);
    setTvShow(data);
  };

  const getEpisodes = async (id = 1) => {
    const data = await getImagesApi(id).then((res) => res.data[3]);
    setEpisodes(data);
    setIsLoading(false);
  };

  useEffect(() => {
    setNum(49964);

    getTvShow();
    getEpisodes(num);
  }, [isLoading]);

  function getRandomShow() {
    return (
      <div className="show-box">
        <div className="image-holder">
          <img src={episodes?.resolutions?.original?.url} alt="" />
          <div className="image-overlay"></div>
        </div>
        <article className="show-info">
          <p className="show-meta">
            {tvShow?.genres?.join(", ")} -{" "}
            <FontAwesomeIcon color={"gold"} icon={faStar} />{" "}
            {tvShow?.rating?.average}
          </p>
          <h2 className="show-name">{tvShow?.name}</h2>

          {/* <Button variant="light" className="show-details">
            Details <FontAwesomeIcon icon={faArrowRight} />
          </Button> */}
          <button className="show-details">
            Details <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </article>
      </div>
    );
  }

  return isLoading ? <h1>Loading</h1> : getRandomShow();
}
