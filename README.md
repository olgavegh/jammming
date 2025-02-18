# jammming

## Overview

In this project, I will build a React web application called Jammming. I will use your knowledge of React components, passing state, and requests with the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.

## Features

- Users can search for songs by song title.
- You can also include functionality to search by other attributes like artist’s name, genre, etc.
- Users can see information about each song like title, artist, and album for songs they queried
- Users can export their custom playlist to their personal Spotify account

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
