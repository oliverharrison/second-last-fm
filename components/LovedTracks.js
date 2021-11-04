import { getLastFmData } from "../pages/api/getLastFmData";
import { useEffect, useState } from "react";
import styles from "../styles/LovedTracks.module.scss";
import Accordion from "./accordion/Accordion";

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
      <Accordion items={lovedTracks} />
    </div>
  );
};
export default LovedTracks;
