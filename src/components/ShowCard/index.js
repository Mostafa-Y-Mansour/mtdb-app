import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./ShowCard.css";
import pictureComingSoon from "../../assets/shared/picture coming soon.jpg";

export default function ShowCard({ id, image, name, genre, rating }) {
  return (
    <Link className="show-card" to={`/shows/${id || "1"}`}>
      <div className="poster-image">
        <img src={image || pictureComingSoon} alt="" loading="lazy" />
      </div>
      <div className="overlay"></div>
      <div className="show-data">
        <h2>{name}</h2>
        <p className="show-meta">
          {genre?.join(", ")} - <FontAwesomeIcon color={"gold"} icon={faStar} />{" "}
          {rating || 0}
        </p>
      </div>
    </Link>
  );
}
