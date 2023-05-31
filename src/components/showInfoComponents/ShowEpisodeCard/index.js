import React from "react";
import "./ShowEpisodeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function ShowEpisodeCard({ number, name, date, rate }) {
  const date1 = new Date(date);
  const date2 = new Date();
  const date3 = new Date();

  // console.log(date1 <= date2);
  // console.log((date2 - date1) / 1000 / 60 / 60 / 24 / );

  const isReleased = () => {
    if (date1 <= date2) return "Yes";
    return "No";
  };

  return (
    <tr>
      <td>{number}</td>
      <td>{name}</td>
      <td>
        <FontAwesomeIcon color={"gold"} icon={faStar} /> {rate}
      </td>
      <td>{date}</td>
      <td>{isReleased()}</td>
    </tr>
  );
}
