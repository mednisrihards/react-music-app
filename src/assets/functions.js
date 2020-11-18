import { useState, useEffect } from 'react';
import axios from 'axios';
import { Credentials } from '../assets/Credentials';
import queryString from 'query-string';


const spotify = Credentials();

// ---------------------------------------------------------------------------
//   GET GENRES
// ---------------------------------------------------------------------------
export const setGenresFunc = props => {
      axios(`https://api.spotify.com/v1/browse/categories?locale=LV`, {
        method: 'GET',
        headers: {'Authorization' : 'Bearer ' + props.token}
      }).then (
        genreResponse => {
          props.setGenres(genreResponse.data.categories.items);
        }
      )
 }

// ---------------------------------------------------------------------------
//   GET PLAYLISTS
// ---------------------------------------------------------------------------

export const setPlaylistsFunc = props => {
  axios('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
    },
    data: 'grant_type=client_credentials',
    method: 'POST'
  }).then(tokenResponse => {
      axios(`https://api.spotify.com/v1/browse/categories/${props.currentGenre}/playlists?country=LV
      `, {
        method: 'GET',
        headers: {'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      }).then (
        playlistResponse => {
          props.setPlaylists(playlistResponse.data.playlists.items)
        })
  })
}

// ---------------------------------------------------------------------------
//   GET SONGS
// ---------------------------------------------------------------------------
export const setSongsFunc = props => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    }).then(tokenResponse => {
        axios(`https://api.spotify.com/v1/playlists/${props.currentPlaylist}/tracks?market=US`, {
          method: 'GET',
          headers: {'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
        }).then (
          songsResponse => {
            props.setSongs(songsResponse.data.items)
          })
    })
}

// ---------------------------------------------------------------------------
//   GET ARTIST ALBUMS
// ---------------------------------------------------------------------------

export const setAlbumsFunc = props => {
  axios('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
    },
    data: 'grant_type=client_credentials',
    method: 'POST'
  }).then(tokenResponse => {
      axios(`https://api.spotify.com/v1/artists/${props.artist}/albums
      `, {
        method: 'GET',
        headers: {'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      }).then (
        playlistResponse => {
          props.setAlbums(playlistResponse.data.items)
          // console.log(playlistResponse.data.items)
        })
  })
}




// ---------------------------------------------------------------------------
//   GET USERS PLAYLISTS
// ---------------------------------------------------------------------------

export const setUserPlaylistsFunc = props => {
 axios(`https://api.spotify.com/v1/users/${props.user.data.id}/playlists`, {
        method: 'GET',
        headers: {'Authorization' : 'Bearer ' + props.token}
      }).then (
        playlistResponse => {
          props.setPlaylists(playlistResponse.data.playlists.items)
        })
}

// ---------------------------------------------------------------------------
//   GET USER
// ---------------------------------------------------------------------------

// export const getUser = props => {
//   axios(`https://api.spotify.com/v1/me`, {
//          method: 'GET',
//          headers: {'Authorization' : 'Bearer ' + props}
//        }).then (
//          userResponse => {
//           //  props.setPlaylists(playlistResponse.data.playlists.items)
//           return userResponse
//          })
//  }
//  }