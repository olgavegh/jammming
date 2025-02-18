import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = (props) => {
  const mockTracks2 = [
    { id: 1, name: "Track 1", artist: "Artist 1", album: "Album 1" },
    { id: 2, name: "Track 2", artist: "Artist 2", album: "Album 2" },
    { id: 3, name: "Track 3", artist: "Artist 3", album: "Album 3" },
  ];

  return (
    <div className={styles.playlist}>
      <h2>playlist</h2>
      <Tracklist tracks={mockTracks2} />
      <button className="secondaryButton">Save to Spotify</button>
    </div>
  );
};

export default Playlist;
