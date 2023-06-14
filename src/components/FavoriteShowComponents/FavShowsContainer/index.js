import React from "react";
import ShowCard from "../../ShowCard";

export default function FavShowsContainer({ status, filteredData }) {
  const render = () => {
    return filteredData.map((show) => {
      return (
        <ShowCard
          id={show?.id}
          image={show?.image?.medium}
          name={show?.name}
          genre={show?.genres}
          rating={show?.rating?.average}
          overlay={false}
        />
      );
    });
  };

  return (
    <div className="fav-shows-container ">
      <div className="fav-status" style={{ marginTop: "85px" }}>
        <h2 style={{ color: "#fff" }}>{status || "Shows"}</h2>
      </div>
      <div className="fav-list d-flex w-100 flex-wrap" style={{ gap: "15px" }}>
        {render()}
      </div>
    </div>
  );
}
