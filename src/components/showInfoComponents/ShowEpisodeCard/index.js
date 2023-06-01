import React from "react";
import "./ShowEpisodeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function ShowEpisodeCard({ number, name, date, rate }) {
  const date1 = new Date(date);
  const date2 = new Date();

  const isReleased = () => {
    if (date1 <= date2) return "Yes";
    return "No";
  };

  return (
    <tr>
      <td>{number}</td>
      <td>
        <span>{name}</span>
        <br />
        <span>
          <FontAwesomeIcon color={"gold"} icon={faStar} /> {rate}
        </span>
      </td>

      <td>{date}</td>
      <td>{isReleased()}</td>
    </tr>
  );
}
