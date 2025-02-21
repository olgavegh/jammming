// Module for Authentication
// to handle authentication and manage the access token. This module will:
// Store the access token.
// Check if a valid token exists.
// Redirect users to Spotify’s authentication page if needed.

const clientId = "23901c99a11a4996b3db3cc9c464ab7e";
const redirectUri = "http://localhost:3000/"; // Adjust for production

// Step 1: Stores the token
let accessTokenCache;

const Spotify = {
  // entry point to get the token

  // Step 2.1 just a check for the token
  checkToken() {
    // If we already have the token, return it
    if (accessTokenCache) return accessTokenCache;

    // Step 3: Check for the access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessTokenCache = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessTokenCache = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/"); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessTokenCache;
    } else {
      return null;
    }
  },
  // Step 2.2: Get the token.
  getAccessToken() {
    const accesstoken = Spotify.checkToken();
    if (accesstoken) return accesstoken;

    // Step 5: If no token, redirect user to Spotify authorization
    const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    window.location = accessUrl;
  },

  search(term) {
    // 1. Get Access Token
    accessTokenCache = Spotify.getAccessToken();

    // 2. Fetch Request to Spotify API
    const encodedTerm = encodeURIComponent(term); // Convert it to URL-safe format
    const endpoint = `https://api.spotify.com/v1/search?type=track&q=${encodedTerm}`;
    const headers = { Authorization: `Bearer ${accessTokenCache}` };
    let userId;

    return fetch(endpoint, {
      headers: headers,
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return [];
        }

        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },

  getUserProfile() {
    accessTokenCache = Spotify.checkToken();
    if (accessTokenCache) {
      const headers = { Authorization: `Bearer ${accessTokenCache}` };
      const endpoint = "https://api.spotify.com/v1/me";

      return fetch(endpoint, { headers })
        .then((response) => response.json())
        .then((jsonResponse) => {
          if (jsonResponse.images && jsonResponse.images.length > 0) {
            return jsonResponse.images[0].url;
          } else {
            return "https://via.placeholder.com/150"; // Placeholder image URL
          }
        });
    } else {
      return null;
    }
  },
  savePlaylist(playlistName, trackUris) {
    if (!playlistName || !trackUris.length) return;
    const accessTokenCache = Spotify.getAccessToken();

    const headers = { Authorization: `Bearer ${accessTokenCache}` };
    const endpoint = "https://api.spotify.com/v1/me";

    let userId;

    return fetch(endpoint, { headers })
      .then((response) => response.json())
      .then((jsonResponse) => {
        userId = jsonResponse.id;
        const endpointPlaylist = `https://api.spotify.com/v1/users/${userId}/playlists`;
        return fetch(endpointPlaylist, {
          headers: headers,
          method: "POST",
          body: JSON.stringify({
            name: playlistName,
            description: "Created with Jammming!",
          }),
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            const playListId = jsonResponse.id;
            const endpointPlaylistTracks = `https://api.spotify.com/v1/users/${userId}/playlists/${playListId}/tracks`;
            return fetch(endpointPlaylistTracks, {
              headers: headers,
              method: "POST",
              body: JSON.stringify({ uris: trackUris }),
            });
          });
      });
  },
};
export default Spotify;
