import { getLastFmData } from "../pages/api/getLastFmData";
import { useEffect, useState } from "react";

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
    <div className="loved-tracks">
      <h1>Loved Tracks</h1>
      <ul>
        {lovedTracks.track.map((track) => {
          return (
            <li key={track.mbid}>
              {track.name} <br />
              {track.artist.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default LovedTracks;
