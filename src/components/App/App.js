import React, { useState, useCallback } from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";
import Profile from "../Profile/Profile";

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Example Song 1",
      artist: "The Weeknd",
      album: "After Hours",
    },
    {
      id: 2,
      name: "Example Song 2",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
    },
    {
      id: 3,
      name: "Example Song 2",
      artist: "The Weeknd",
      album: "After Hours",
    },
  ]);

  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

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
        <Profile />
      </header>
      <main>
        <div className={styles.hero}>
          <SearchBar placeholder="Enter a Song Title" onSearch={search} />
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
