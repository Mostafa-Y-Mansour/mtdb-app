import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import FavShowsContainer from "../../components/FavoriteShowComponents/FavShowsContainer";
import { useSelector } from "react-redux";

export default function FavoritePage() {
  const userInfo = useSelector((state) => state.userInfo);

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

  return (
    <>
      <Container className="py-5 " style={{ minHeight: "100vh" }}>
        {!userInfo.isLogged ? (
          <h2 className="text-center" style={{ marginTop: "40vh" }}>
            You Are Not Logged in.
          </h2>
        ) : (
          <>
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
          </>
        )}
      </Container>
    </>
  );
}
