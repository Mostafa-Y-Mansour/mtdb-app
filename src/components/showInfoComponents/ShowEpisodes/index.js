import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "../../../rtk/slices/showEpisodesSlice";
import { getSeasonsApi } from "../../../services/api";
import "./ShowEpisodes.css";
import ShowEpisodeCard from "../ShowEpisodeCard";
import { Table } from "react-bootstrap";

export default function ShowEpisodes({ showId }) {
  const showEpisodesArr = useSelector((state) => state.showEpisodes);
  const dispatch = useDispatch();
  const [seasonsArr, setSeasonArr] = useState([]);
  const [seasonNum, setSeasonNum] = useState(1);

  const sessionsApi = async (num) => {
    try {
      const data = await getSeasonsApi(num).then((res) => res.data);
      return setSeasonArr(data);
    } catch (err) {
      return err;
    }
  };

  const sessionCount = seasonsArr.map((season) => (
    <span key={season.id} onClick={() => setSeasonNum(season?.number)}>
      season {season?.number}
    </span>
  ));

  const ShowSessionEpisode = () => {
    // handle errors
    if (showEpisodesArr === "pending")
      return (
        <tr>
          <td>Loading...</td>
        </tr>
      );
    if (showEpisodesArr.length === 0)
      return (
        <tr>
          <td>There are no TV Shows Available</td>
        </tr>
      );

    const episodesFilter = showEpisodesArr.filter(
      (episode) => episode?.season === seasonNum
    );

    return episodesFilter.map((episode) => {
      return (
        <ShowEpisodeCard
          key={episode?.id}
          number={episode?.number}
          name={episode?.name}
          rate={episode.rating.average || "0.0"}
          date={episode?.airdate}
        />
      );
    });
  };

  useEffect(() => {
    dispatch(fetchEpisodes(showId));
    sessionsApi(showId);
  }, [seasonNum]);

  return (
    <>
      <div className="sessions-container">{sessionCount}</div>
      <div className="episodes-container">
        <Table className="mt-4" variant="dark" striped bordered hover>
          <thead>
            <tr>
              <th>EP.</th>
              <th>Name</th>
              <th>Release Date</th>
              <th>Aired</th>
            </tr>
          </thead>
          <tbody>{ShowSessionEpisode()}</tbody>
        </Table>
      </div>
    </>
  );
}
