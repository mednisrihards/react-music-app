import React, {useEffect, useState, Component } from 'react';
import queryString from 'query-string';
import './App.css';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Songs from '../Songs/Songs';
import Categories from '../Categories/Categories';
import Player from '../Player/Player';
import Playlists from '../Playlists/Playlists';
import Albums from '../Albums/Albums';
import axios from 'axios';

class App extends Component {

  constructor (props) {
    super(props)
  
    this.setCurrentPlaylist = this.setCurrentPlaylist.bind(this)
    this.setSongs = this.setSongs.bind(this)
    this.setPlaylists = this.setPlaylists.bind(this)
    this.setCurrentCategory = this.setCurrentCategory.bind(this)
    this.setCurrentSong = this.setCurrentSong.bind(this)
    this.setDisplay = this.setDisplay.bind(this)
    this.search = this.search.bind(this)

    this.state = {
      token: queryString.parse(window.location.search).access_token,
      user: {},
      display: 'categories',
      playlists: [],
      myPlaylists: [],
      currentPlaylist: '',
      currentCategory: '',
      categories: [],
      songs: [],
      currentSong: {}
    }

    axios(`https://api.spotify.com/v1/me`, {
          method: 'GET',
          headers: {'Authorization' : 'Bearer ' + this.state.token}
        }).then (
          userResponse => {
            this.setState({
              user: {
                id: userResponse.data.id
              }
            })
        })
    .then(
      axios(`https://api.spotify.com/v1/browse/categories?locale=LV`, {
        method: 'GET',
        headers: {'Authorization' : 'Bearer ' + this.state.token}
      }).then (
        categoriesResponse => {
          this.setState({
            categories: categoriesResponse.data.categories.items
          })
        })
    )
    .then (
      axios(`https://api.spotify.com/v1/me/playlists`, {
        method: 'GET',
        headers: {'Authorization' : 'Bearer ' + this.state.token}
      }).then (
        playlistResponse => {
          this.setState({
            myPlaylists: playlistResponse.data.items
          })
        })
    )
  }

  setCurrentPlaylist(playlist) {
    this.setSongs(playlist)
    this.setState({
      currentPlaylist: playlist,
      display: 'songs'
    })
  }

  setCurrentSong(song) {
    this.setState({
      currentSong:{
        name: song.name,
        album: song.album,
        year: song.year,
        artWork: song.artWork,
        duration: song.duration
      }
    })
  }

  setCurrentCategory(category) {
    this.setPlaylists(category)
    this.setState({
      currentCategory: category,
      display: 'playlists'
    })
  }
 
  setDisplay(display) {
    this.setState({
      display: display
    })
  }

  setPlaylists(categoryId) {
    axios(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists?country=LV`, {
      method: 'GET',
      headers: {'Authorization' : 'Bearer ' + this.state.token}
    }).then (
      playlistResponse => {
        this.setState({
          playlists: playlistResponse.data.playlists.items
        })
      })
  }

  setSongs(playlistId) {
    axios(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?market=US`, {
      method: 'GET',
      headers: {'Authorization' : 'Bearer ' + this.state.token}
    }).then (
      songsResponse => {
        const temp = Object.entries(songsResponse.data.items).map(([song, data])=>{
          return {
            id: data.track.id,
            name: data.track.name,
            artist: data.track.artists[0].name,
            albumName: data.track.album.name,
            albumReleaseDate: data.track.album.release_date,
            albumArtWork: data.track.album.images[0].url,
            durationMs: data.track.duration_ms,
          }
      });
      this.setState({
        songs: temp
      })
    })
  }

  search(query) {    
    axios(`https://api.spotify.com/v1/search/?q=${query}&type=track,album`, {
      method: 'GET',
      headers: {'Authorization' : 'Bearer ' + this.state.token}
    }).then (
      songsResponse => {
        const temp = Object.entries(songsResponse.data.tracks.items).map(([song, data])=>{
          return {
            id: data.id,
            name: data.name,
            artist: data.artists[0].name,
            albumName: data.album.name,
            albumReleaseDate: data.album.release_date,
            albumArtWork: data.album.images[0].url,
            durationMs: data.duration_ms,
          }
        
      });
      this.setState({
        songs: temp,
        display: 'songs'
      })
    })
  }

  render(){

    return(
      <div className="App">
        <NavBar search={this.search} setDisplay={this.setDisplay}/>
        <div className="flexContainer">
          <SideBar setSongs={this.state.songs} setCurrentPlaylist= {this.setCurrentPlaylist}  setDisplay={this.setDisplay} currentPlaylist= {this.state.currentPlaylist} playlists={ this.state.myPlaylists }/>
          <div className="right">
            {this.state.display === 'myPlaylists'
              ? <Playlists setCurrentPlaylist= {this.setCurrentPlaylist} playlists={this.state.myPlaylists} />
              :
                (this.state.display === 'playlists'
                  ? <Playlists setCurrentPlaylist= {this.setCurrentPlaylist} playlists={this.state.playlists} />
                  : 
                    (this.state.display === 'albums'
                      // ? <Albums albums={albums} />
                      ? null
                      : 
                        (this.state.display === 'categories'
                        ? <Categories setCurrentCategory= {this.setCurrentCategory} categories={this.state.categories}/>
                        : <Songs songs={this.state.songs} setCurrentSong={this.setCurrentSong}/>
                        )
                    )
                )           
            }
            <Player currentSong={this.state.currentSong} />
          </div>
        </div>
      </div>
    );
  }

}
export default App;