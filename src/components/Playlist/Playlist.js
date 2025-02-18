import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = (props) => {
  return (
    <div className={styles.playlist}>
      <input placeholder={"New Playlist"} />
      <Tracklist tracks={props.list} onRemove={props.onRemove} />
      <button className="secondaryButton">Save to Spotify</button>
    </div>
  );
};

export default Playlist;
