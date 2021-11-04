import { getLastFmData } from "../pages/api/getLastFmData";
import { useEffect, useState } from "react";
import styles from "../styles/LovedTracks.module.scss";
import Accordion from "./accordion/Accordion";

const LovedTracks = () => {
  const [lovedTracks, setLovedTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLastFmData("user.getLovedTracks")
      .then((data) => {
        setLovedTracks(data.lovedtracks.track);
      })
      .catch((err) => {
        console.log("rejected", err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={styles.lovedtracks}>
        <h1>Loved Tracks</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.lovedtracks}>
      <h1>Loved Tracks</h1>
      <Accordion items={lovedTracks} />
    </div>
  );
};

export default LovedTracks;
