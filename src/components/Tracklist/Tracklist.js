import React from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

const Tracklist = (props) => {
  return (
    <div className={styles.Tracklist}>
      {props.tracks.map((track) => (
        <Track key={track.id} track={track} onAdd={props.onAdd} />
      ))}
    </div>
  );
};

export default Tracklist;
