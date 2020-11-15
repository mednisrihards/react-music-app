import React, { useState } from 'react';
import classes from './Genres.module.css';

const Genres = props => {

    return (
        <div className={classes.container}>
        { props.genres.map(genre => (
            <div
                key={genre.id}
                className={classes.card}
                onClick={() => {
                    props.setCurrentGenre(genre.id)
                    props.setDisplay('playlists')
                }}
            >
                    <img className={classes.img} src={genre.icons[0].url} alt="img"/>
                    <p className={classes.name}>{genre.name}</p>
            </div>
            ))
        }       
        </div>
    )
}

export default Genres;