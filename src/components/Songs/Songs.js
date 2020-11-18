import React, { useState } from 'react';
import classes from './Songs.module.css';

const Songs = props => {

    return (
        <div className={classes.container}>
            <table>
                <thead>
                    <tr>
                        <th className={classes.add}></th>
                        <th className={classes.song}>Song</th>
                        <th className={classes.lenght}>Lenght</th>
                        <th className={classes.artist}>Artist</th>
                        <th className={classes.album}>Album</th>
                    </tr>
                </thead>
                <tbody>
                { props.songs.map(item => (
                    
                            <tr key={item.id}>
                                <td className={classes.add}><i className="fa fa-plus"></i></td>
                                <td className={classes.song} onClick={() => {
                                    props.setCurrentSong({
                                        name: item.name,
                                        album: item.albumName,
                                        year: item.albumReleaseDate.substring(0, 4),
                                        artWork: item.albumArtWork,
                                        duration: item.durationMs
                                    })
                                }}>{item.name}</td>
                                <td className={classes.lenght}>{Math.floor((item.durationMs/1000/60) << 0) + ":" + Math.floor((item.durationMs/1000) % 60)}</td>
                                <td className={classes.artist} onClick={() => {
                                //    props.setArtist(item.artist)
                                //    props.setDisplay('albums')
                                }}>{item.artist}</td>
                                <td className={classes.album}>{item.albumName}</td>
                            </tr>
                        ))
                        
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Songs;