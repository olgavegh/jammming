import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = (props) => {
  const handleChange = (e) => {
    props.onNameChange(e.target.value);
  };

  return (
    <div className={styles.playlist}>
      <input type="text" value={props.playlistName} onChange={handleChange} />
      <Tracklist tracks={props.playlistTracks} onRemove={props.onRemove} />
      <button className="secondaryButton">Save to Spotify</button>
    </div>
  );
};

export default Playlist;
