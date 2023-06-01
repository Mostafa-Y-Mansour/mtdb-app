import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import FavShowsContainer from "../../components/FavoriteShowComponents/FavShowsContainer";
import { useSelector } from "react-redux";

export default function FavoritePage() {
  const favoriteShows = useSelector((state) => state.favoriteShows);

  const premiereFavShows = (() => {
    return favoriteShows.filter((show) => show?.status === "Running");
  })();
  const runningFavShows = (() => {
    return favoriteShows.filter((show) => show?.status === "Running");
  })();
  const endedFavShows = (() => {
    return favoriteShows.filter((show) => show?.status !== "Running");
  })();

  console.log("runningFavShows", runningFavShows);
  console.log("endedFavShows", endedFavShows);

  return (
    <>
      <Container className="my-5 ">
        <FavShowsContainer
          className="mt-3"
          status={"Running"}
          filteredData={runningFavShows}
        />
        <FavShowsContainer
          className="mt-3"
          status={"Ended"}
          filteredData={endedFavShows}
        />
      </Container>
    </>
  );
}
