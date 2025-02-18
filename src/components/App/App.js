import React from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
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
          <SearchResults />
          <Playlist />
        </div>
      </main>
    </div>
  );
}

export default App;
