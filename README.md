# jammming

## Overview

In this project, I will build a React web application called Jammming. I will use your knowledge of React components, passing state, and requests with the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.

🚀 Accessing This App

This app is currently in development mode and not publicly available.

🔹 Want to try it?

Send me your email address, and I'll grant you access.
A banner will appear at the top of the page with this information when you visit the site.

![Jammming Project Preview](https://static-assets.codecademy.com/Courses/react/projects/previews/jamming-project-four-three-preview.gif)

## Features

- Users can search for songs by song title.
- Users can see information about each song like preview image, title, artist, and album for songs they queried
- Users can export their custom playlist to their personal Spotify account
- Only display songs not currently present in the playlist in the search results

## Technologies

- HTML
- CSS
- JavaScript
- React
- HTTP Requests and Responses
- Authentication

## Steps

- [x] Set Up Local Environment
- using create-react-app from parent directory - `npx create-react-app jamming`
- start a development from project root - `npm start`

- [x] Create Static Components
- Core components of the interface: App, SearchBar, SearchResults, Playlist, Tracklist, Track. These components should be static and may contain mock data. At this point focus on how components will interact with the data rather than on how they will retrieve data from APIs.

- [x] Implementing Track Listing in the Component Tree
- In this step, ensure that search results from Spotify are properly displayed as a list of tracks.
- The root component manages the search results state and passes data down the component tree.
- Each track in the result list includes: 🎵 Song Name 🎤 Artist 💿 Album

- [x] Implement Playlists in The Component Tree
- Users should be able to customize their playlist name and tracks, and the app should display the playlist title and selected tracks.
- The data should flow unidirectionally from the root component (App.js) to relevant child components.

- [x] Implement Adding Songs To a Custom Playlist
- Users should be able to add songs from the search results to their custom playlist.
- Each track in the search results should have an "Add" button, which, when clicked, adds the track to the playlist only if it isn’t already present.

- [x] Implement Removing Songs From a Custom Playlist
- Users should be able to remove songs from their custom playlists.
- Each track in the playlist should have a "Remove" button, which, when clicked, removes the track from the playlist.

- [x] Implement Playlist Renaming
- Displaying the playlist title with the input element can allow users to click on the title of their playlist and edit it directly on the page.

- [x] Implement Saving the Playlist to a User's Account
- To enable users to save their custom playlist to Spotify, you need to extract the required track information and prepare the data for submission.
- Each track has a unique uri (Uniform Resource Identifier) that Spotify uses to identify songs.

- [x] Obtain a Spotify Access Token
- To interact with the Spotify API, the app needs to obtain and store a user's access token.
- 1. Store the token in a variable so we don't have to keep requesting it.
- 2. Check if the token is already stored—if yes, return it.
- 3. Extract the token from the URL when Spotify redirects the user after login.
- 4. Handle expiration (clear the token after it expires).
- 5. If there's no token, redirect the user to Spotify's login page.

- [x] Implement Spotify Search Request
- Connect the search bar to Spotify's API, allowing users to search for tracks and display results.

- [x] Display a Spotify User's Avatar Picture
- Integrating functionality to fetch and display the user's avatar picture from their Spotify profile.
- Handling cases where the user does not have an avatar by providing a default image.

- [x] Save a User's Playlist
- Allow users to save their custom playlist to their Spotify account.
- Ensure the playlist data is correctly formatted and sent to Spotify's API.

[def]: /public/jamming-project-four-three-preview.gif
