import React, { useState } from 'react';
import classes from './Songs.module.css';
import heart from '../../assets/heart.svg';

const Songs = props => {

    return (
        <div className={classes.container}>
            <table>
                <thead>
                    <tr>
                        <th className={classes.song}>Song</th>
                        <th className={classes.lenght}>Lenght</th>
                        <th className={classes.artist}>Artist</th>
                        <th className={classes.album}>Album</th>
                        {/* <th className={classes.genre}>Genre</th> */}
                        <th className={classes.love}><img src={heart} alt='love'/></th>
                    </tr>
                </thead>
                <tbody>

                { props.songs.map(item => (
                            <tr key={item.track.id}>
                                <td className={classes.song}>{item.track.name}</td>
                                <td className={classes.lenght}>{Math.floor((item.track.duration_ms/1000/60) << 0) + ":" + Math.floor((item.track.duration_ms/1000) % 60)}</td>
                                <td className={classes.artist}>{item.track.artists[0].name}</td>
                                <td className={classes.album}>{item.track.album.name}</td>
                                {/* <td className={classes.genre}>{item.genre}</td> */}
                                <td className={classes.love}><img src={heart} alt='love'/></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Songs;