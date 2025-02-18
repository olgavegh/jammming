import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";

const SearchResults = (props) => {
  const mockTracks = [
    { id: 1, name: "Track 1", artist: "Artist 1", album: "Album 1" },
    { id: 2, name: "Track 2", artist: "Artist 2", album: "Album 2" },
    { id: 3, name: "Track 3", artist: "Artist 3", album: "Album 3" },
    { id: 4, name: "Track 4", artist: "Artist 4", album: "Album 4" },
    { id: 5, name: "Track 5", artist: "Artist 5", album: "Album 5" },
  ];

  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <Tracklist tracks={mockTracks} />
    </div>
  );
};

export default SearchResults;
