import { getLastFmData } from "../pages/api/getLastFmData";
import { useEffect, useState } from "react";
import styles from "../styles/LovedTracks.module.scss";

const LovedTracks = () => {
  const [lovedTracks, setLovedTracks] = useState({ track: [] });

  useEffect(() => {
    getLastFmData("user.getLovedTracks")
      .then((data) => {
        setLovedTracks(data.lovedtracks);
      })
      .catch((err) => {
        console.log("rejected", err.message);
      });
  }, []);

  return (
    <div className={styles.lovedtracks}>
      <h1>Loved Tracks</h1>
      <ul>
        {lovedTracks.track.map((track) => {
          return (
            <li key={track.mbid}>
              <a href={track.url}>
                {track.name} <br />
                {track.artist.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default LovedTracks;
