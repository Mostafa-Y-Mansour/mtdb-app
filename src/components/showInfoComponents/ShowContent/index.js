import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AddToFavorite from "../../AddToFavorite";
import "./ShowContent.css";

export default function ShowContent({ showObj }) {
  return (
    <>
      <div className="show-content">
        <div className="title-container">
          <AddToFavorite showObj={showObj} />

          <h2 className="title">{showObj?.name}</h2>
        </div>
        <p className="meta-data">
          <span className="genre">{showObj?.genres?.join(", ")}</span>
          <span>-</span>
          <span className="channel">
            On{" "}
            {showObj?.network?.name || showObj?.webChannel?.name || "Unknown"}
          </span>
        </p>
        <p className="meta-data">
          country:{" "}
          <span className="country">
            {showObj?.network?.country?.name || " - Unknown"}
          </span>
          <span>-</span>
          <span className="code">{showObj?.network?.country?.timezone}</span>
        </p>
        <p className="rating">
          Rating: <FontAwesomeIcon color={"gold"} icon={faStar} />{" "}
          {showObj?.rating?.average || "0.0"}
        </p>
        <p className="status">Status: {showObj?.status}</p>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: showObj?.summary }}
        ></p>
      </div>
    </>
  );
}
