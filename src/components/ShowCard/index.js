import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./ShowCard.css";

export default function ShowCard({ image, name, genre, rating }) {
  return (
    <Link to="/shows/1">
      <div className="show-card">
        <div className="show-image">
          <img src={image} alt="" />
        </div>
        <div className="overlay"></div>
        <div className="show-data">
          <h2>{name}</h2>
          <p className="show-meta">
            {genre.join(", ")} -{" "}
            <FontAwesomeIcon color={"gold"} icon={faStar} /> {rating || 0}
          </p>
        </div>
      </div>
    </Link>
  );
}
