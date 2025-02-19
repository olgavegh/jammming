import React, { useState, useCallback } from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import { MdCropOriginal } from "react-icons/md";

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

  const [playlistName, setPlaylistName] = useState("New Playlist");

  const [playlistTracks, setPlaylistTracks] = useState([
    {
      id: 4,
      name: "Peaches",
      artist: "Justin Bieber",
      album: "Justice",
    },
    {
      id: 5,
      name: "Kiss Me More",
      artist: "Doja Cat",
      album: "Planet Her",
    },
    {
      id: 6,
      name: "Montero (Call Me By Your Name)",
      artist: "Lil Nas X",
      album: "Montero",
    },
  ]);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((item) => item.id === track.id)) {
        return;
      }
      setPlaylistTracks([...playlistTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevList) =>
      prevList.filter((item) => item.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  // dummy function to simulate the process
  const Spotify = {
    savePlaylist: (playlistName, trackUris) => {
      return new Promise((resolve) => {
        console.log(`Saving playlist: ${playlistName}`);
        console.log("Tracks:", trackUris);
        setTimeout(() => {
          console.log("Playlist saved successfully!");
          resolve();
        }, 1000); // Simulates a 1-second API call delay
      });
    },
  };

  // sending the playlist to Spotify and resetting the local state
  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

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
          <SearchResults results={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
