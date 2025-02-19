// Module for Authentication
// to handle authentication and manage the access token. This module will:
// Store the access token.
// Check if a valid token exists.
// Redirect users to Spotify’s authentication page if needed.

const clientId = "23901c99a11a4996b3db3cc9c464ab7e";
const redirectUri = "http://localhost:3000/"; // Adjust for production

// Step 1: Stores the token
let accessToken;

const Spotify = {
  // entry point to get the token
  getAccessToken() {
    // Step 2: If we already have the token, return it
    if (accessToken) return accessToken;

    // Step 3: Check for the access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/"); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      // Step 5: If no token, redirect user to Spotify authorization
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  search(term) {
    // 1. Get Access Token
    accessToken = Spotify.getAccessToken();

    // 2. Fetch Request to Spotify API
    const encodedTerm = encodeURIComponent(term); // Convert it to URL-safe format
    const endpoint = `https://api.spotify.com/v1/search?type=track&q=${encodedTerm}`;
    const headers = { Authorization: `Bearer ${accessToken}` };
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
};

export default Spotify;
