import React, { useEffect, useState } from "react";
import { getShowCast } from "../../../services/api";
import "./ShowCast.css";
import pictureComingSoon from "../../../assets/shared/picture coming soon.jpg";

export default function ShowCrew({ showId }) {
  const [cast, setCast] = useState([]);

  const getCastApi = async (id) => {
    try {
      const res = await getShowCast(id);
      const data = res.data;
      return setCast(data);
    } catch (err) {
      console.error("Error", err);
    }
  };

  const castCard = () => {
    if (cast.length === 0) return <h1>Cast information is not available.</h1>;
    return cast.map(({ person, character }, index) => {
      return (
        <div className="cast-card" key={index}>
          <div
            className="person-image"
            style={{
              background: `url(${
                character?.image?.medium ||
                person?.image?.medium ||
                pictureComingSoon
              })`,
            }}
          >
            <img
              src={
                character?.image?.original ||
                person?.image?.original ||
                pictureComingSoon
              }
              alt={person?.name}
              loading="lazy"
            />
          </div>
          <h4>{person?.name}</h4>
          <p>{character?.name}</p>
        </div>
      );
    });
  };

  useEffect(() => {
    getCastApi(showId);
  }, []);

  return (
    <div className="cast-container">
      <h3 className="cast-title">Cast</h3>
      <div className="cast-cards-wrapper mt-4">{castCard()}</div>;
    </div>
  );
}
