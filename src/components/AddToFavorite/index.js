import React, { useEffect, useState } from "react";
import "./AddToFavorite.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteShow,
  removeFavoriteShow,
} from "../../rtk/slices/favoriteShowSlice";

export default function AddToFavorite({ showObj }) {
  const favoriteShows = useSelector((state) => state.favoriteShows);
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);

  const addShowToFavorites = (show) => {
    dispatch(addFavoriteShow(show));
  };

  const removeShowFromFavorites = (show) => {
    dispatch(removeFavoriteShow(show));
  };

  console.log(favoriteShows);

  // console.log(showObj);

  const favoriteStateHandler = () => {
    if (isFavorite && !favoriteShows.includes(showObj)) {
      addShowToFavorites(showObj);
      setIsFavorite(true);
    } else {
      removeShowFromFavorites(showObj);
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    console.log("now", favoriteShows.includes(showObj));

    favoriteShows.forEach((show) => {
      console.log("show", show);
      console.log("showObj", showObj);
      if (show.id === showObj.id) {
        console.log(isFavorite);
        return setIsFavorite(true);
      }
    });
  }, [isFavorite]);

  return (
    <div className="add-favorite">
      <input
        type="checkbox"
        defaultChecked={false}
        id="favorite"
        name="favorite-checkbox"
        defaultValue="favorite-button"
        onClick={() => {
          setIsFavorite(!isFavorite);
          favoriteStateHandler();
        }}
        // checked={isFavorite}
      />
      <label htmlFor="favorite" className="container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-heart"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        <div className="action">
          <span className="option-1">Add to Favorites</span>
          <span className="option-2">Added to Favorites</span>
        </div>
      </label>
    </div>
  );
}
