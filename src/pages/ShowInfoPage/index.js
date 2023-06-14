import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchShow } from "../../rtk/slices/showInfoSlice";
import { fetchEpisodes } from "../../rtk/slices/showEpisodesSlice";
import ShowInfoHeader from "../../components/showInfoComponents/ShowHeader";
import ShowContent from "../../components/showInfoComponents/ShowContent";
import ShowEpisodes from "../../components/showInfoComponents/ShowEpisodes";
import CardsSlide from "../../components/CardsSlide";
import ShowCast from "../../components/showInfoComponents/ShowCast";
import Loading from "../../components/Loading";

export default function ShowInfoPage(props) {
  const showInfo = useSelector((state) => state.showInfo);
  const showEpisodes = useSelector((state) => state.showEpisodes);
  const dispatch = useDispatch();
  const prams = useParams();
  const [isLoading, setLoading] = useState(true);

  // handle coverImages
  const coverImages = () => {
    if (
      showEpisodes.length === 0 ||
      showEpisodes === "pending" ||
      typeof showEpisodes === "number"
    ) {
      return "";
    } else {
      const lastEpisodeObj =
        showEpisodes[showEpisodes?.length - 2] ||
        showEpisodes[showEpisodes?.length - 1];
      const episodes = showEpisodes.map((episode) =>
        episode?.season === lastEpisodeObj?.season
          ? { id: episode.id, image: episode.image }
          : null
      );
      return episodes.filter((episode) => episode !== null);
    }
  };

  const render = () => {
    if (showInfo.length === 0 || showInfo === "pending") {
      return <Loading />;
    } else if (typeof showInfo === "number") {
      return (
        <h1 style={{ textAlign: "center", margin: "100px", color: "#f00" }}>
          something went wrong X
        </h1>
      );
    } else {
      return (
        <>
          <ShowInfoHeader
            posterOriginal={showInfo?.image?.original}
            posterMedium={showInfo?.image?.medium}
            coverImages={coverImages()}
          />
          <Container className="mb-5">
            <ShowContent showObj={showInfo} />
            <ShowEpisodes showId={prams.showId} />

            <ShowCast showId={prams.showId} />
          </Container>
          <div className="mb-5">
            <CardsSlide
              key={1000}
              id={
                [90, 100, 110, 120, 130, 140, 150, 160, 170, 180][
                  Math.floor(Math.random() * 10)
                ]
              }
              name={"featured"}
            />
          </div>
        </>
      );
    }
  };

  useEffect(() => {
    dispatch(fetchShow(prams.showId));
    dispatch(fetchEpisodes(prams.showId));
    console.log("showInfo", showInfo);
    console.log("showEpisodes", showEpisodes);
    console.log("coverImages", coverImages());
    setLoading(false);
  }, [isLoading, prams]);

  return render();
}
