import React, { useState } from 'react';
import classes from './Playlists.module.css';

const Genres = props => {

    return (
        <div className={classes.container}>
        { props.playlists.map(playlist => (
            <div
                key={playlist.id}
                className={classes.card}
                onClick={() => {
                    props.setCurrentPlaylist(playlist.id)
                    props.setDisplay('songs')
                }}
            >
                    <img className={classes.img} src={playlist.images[0].url} alt="img"/>
                    <p className={classes.name}>{playlist.name}</p>
            </div>
            ))
        }       
        </div>
    )
}

export default Genres;