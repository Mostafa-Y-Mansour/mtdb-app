import React, { useEffect, useState } from "react";
import { searchShowsByNameApi } from "../../../services/api";
import ShowCard from "../../ShowCard";
import "./Result.css";

export default function Result({ searchText }) {
  const [showsArr, setShowsArr] = useState([]);

  const getShowsBySearch = async (name) => {
    try {
      const res = await searchShowsByNameApi(name);
      const data = res.data;
      console.log(data);
      return setShowsArr(data);
    } catch (err) {
      console.error("Error", err);
      return setShowsArr({ type: "error", ...err });
    }
  };

  const showsCards = () => {
    if (showsArr.type === "error")
      return <h1 style={{ textAlign: "center" }}>something went wrong.</h1>;
    if (showsArr.length === 0 && searchText.length !== 0)
      return (
        <h1 style={{ textAlign: "center" }}>{searchText}: is not Available.</h1>
      );

    if (showsArr.length === 0 && searchText.length === 0)
      return (
        <h1 style={{ textAlign: "center" }}>Please Enter TV-Show Name.</h1>
      );

    return showsArr.map(({ show }) => (
      <ShowCard
        id={show?.id}
        image={show?.image?.original || show?.image?.medium}
        name={show?.name}
        genre={show?.genres}
        rating={show?.rating?.average}
      />
    ));
  };

  useEffect(() => {
    getShowsBySearch(searchText);
  }, [searchText]);

  return <div className="results-container">{showsCards()}</div>;
}
