import React, { useState } from 'react';
import classes from './Albums.module.css';

const Albums = props => {

    return (
        <div className={classes.container}>
            { props.albums.map(album => (


                (album.album_group === 'album'
                    ? <>
                        <p>Album</p>
                        <div className={classes.divider}></div>
                        <div
                            key={album.id}
                            className={classes.card}
                                // onClick={() => {
                                //     props.setCurrentPlaylist(playlist.id)
                                //     props.setDisplay('songs')
                                // }}
                        >
                                <img className={classes.img} src={album.images[0].url} alt="img"/>
                                <p className={classes.name}>{album.name}</p>
                                <p className={classes.release}>{album.release_date.substring(0, 4)}</p>
                        </div>
                    </>
                    :
                    // (display === 'albums'
                    //   ? <Albums albums={albums} />
                    //   :<Songs setArtist={setArtist} setAlbums={setAlbums} setCurrentSong={setCurrentSong} songs={songs} setDisplay={setDisplay}/>
                    // )
                    <p>not an album</p>
                )

                
                ))
            }
        </div>
    )
}

export default Albums;