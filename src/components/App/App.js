import React, { useState, useCallback } from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";
import Profile from "../Profile/Profile";
import AccessMessage from "../AccessMessage/AccessMessage";

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

  const handleSearch = useCallback(
    (term) => {
      Spotify.search(term).then((arrayTracks) => {
        // avoid duplicates
        const filteredTracks = arrayTracks.filter(
          (track) =>
            !playlistTracks.find((savedTrack) => savedTrack.uri === track.uri)
        );
        setSearchResults(filteredTracks);
      });
    },
    [playlistTracks]
  );

  const addTrack = useCallback(
    (track) => {
      // avoid duplicates
      if (playlistTracks.some((item) => item.id === track.id)) {
        return;
      }
      // add to Playlist
      setPlaylistTracks([...playlistTracks, track]);
      // remove from Search Results
      setSearchResults((prevResults) =>
        prevResults.filter((item) => item.id !== track.id)
      );
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevList) =>
      prevList.filter((item) => item.id !== track.id)
    );
    // add to Search Results
    setSearchResults((prevResults) => [...prevResults, track]);
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

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
      <AccessMessage />
      <main>
        <div className={styles.hero}>
          <SearchBar placeholder="Enter a Song Title" onSearch={handleSearch} />
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
