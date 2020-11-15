import React, {useEffect, useState } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Songs from '../Songs/Songs';
import Genres from '../Genres/Genres';
import Player from '../Player/Player';
import Playlists from '../Playlists/Playlists';
// import SongsData from '../../assets/Songs.json';
import { Credentials } from '../../assets/Credentials';
import axios from 'axios';

function App() {

  const spotify = Credentials();
  const [token, setToken] = useState('');

  const [genres, setGenres] = useState([]);
  const [currentGenre, setCurrentGenre] = useState('at_home');

  const [playlists, setPlaylists] = useState();
  const [myPlaylists, setMyPlaylists] = useState();
  const [currentPlaylist, setCurrentPlaylist] = useState('3cEYpjA9oz9GiPac4AsH4n');

  const [songs, setSongs] = useState({});
  const [display, setDisplay] = useState('genres');

// ---------------------------------------------------------------------------
//   GET CATEGORIES
// ---------------------------------------------------------------------------
  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    }).then(tokenResponse => {
      setToken(tokenResponse.data.access_token)

      axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: {'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      }).then (
        genreResponse => {
          setGenres(genreResponse.data.categories.items);
        }
      )
    });
  }, [spotify.ClientId, spotify.ClientSecret])

// ---------------------------------------------------------------------------
//   GET PLAYLISTS
// ---------------------------------------------------------------------------
  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    }).then(tokenResponse => {
        axios(`https://api.spotify.com/v1/browse/categories/${currentGenre}/playlists?country=LV
        `, {
          method: 'GET',
          headers: {'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
        }).then (
          playlistResponse => {
            setPlaylists(playlistResponse.data.playlists.items)
          })
    })
  }, [currentGenre])

// ---------------------------------------------------------------------------
//   GET SONGS
// ---------------------------------------------------------------------------
useEffect(() => {
  axios('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
    },
    data: 'grant_type=client_credentials',
    method: 'POST'
  }).then(tokenResponse => {
      axios(`https://api.spotify.com/v1/playlists/${currentPlaylist}/tracks?market=US`, {
        method: 'GET',
        headers: {'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      }).then (
        songsResponse => {
          setSongs(songsResponse.data.items)
        })
  })
}, [currentPlaylist])

















  return (
    <div className="App">
      <NavBar setDisplay= {setDisplay}/>
      <div className="flexContainer">
        <SideBar setDisplay= {setDisplay} currentPlaylist= {currentPlaylist} setCurrentPlaylist= {setCurrentPlaylist} playlists={ playlists } />
        <div className="right">
          {display === 'genres' ?
              <Genres genres={genres} setCurrentGenre= {setCurrentGenre} setDisplay={setDisplay} />
            : 
                (display === 'playlists'
                  ? <Playlists setDisplay={setDisplay} playlists={playlists} setCurrentPlaylist={setCurrentPlaylist} />
                  :<Songs songs={songs}/>
                )
          }
      
          <Player />
        </div>
        
      </div>
    </div>
  );
}

export default App;