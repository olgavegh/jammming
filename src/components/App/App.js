import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
    },
    {
      id: 2,
      name: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
    },
    {
      id: 3,
      name: "Save Your Tears",
      artist: "The Weeknd",
      album: "After Hours",
    },
  ]);

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <h1>
          Ja<span>mmm</span>ing
        </h1>
      </header>
      <main>
        <div className={styles.hero}>
          <SearchBar placeholder="Enter a Song Title" />
        </div>
        <div className={styles.appContent}>
          <SearchResults results={searchResults} />
          <Playlist />
        </div>
      </main>
    </div>
  );
}

export default App;
