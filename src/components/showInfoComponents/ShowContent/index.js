import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ShowContent.css";

export default function ShowContent(props) {
  return (
    <div className="show-content">
      <h2 className="title">Invasion</h2>
      <p className="meta-data">
        <span className="genre">Drama, Science-Fiction</span>
        <span>-</span>
        <span className="channel">On Apple TV+</span>
      </p>
      <p className="rating">
        Rating: 6.5 <FontAwesomeIcon color={"gold"} icon={faStar} />
      </p>
      <p className="status">Status: Running</p>
      <p className="description">
        Earth is visited by an alien species that threatens humanity's
        existence. Events unfold in real time through the eyes of five ordinary
        people across the globe as they struggle to make sense of the chaos
        unraveling around them.
      </p>
    </div>
  );
}
