import React, { useState } from 'react';
import classes from './SideBar.module.css';
import Modal from 'react-modal';
// import styled from 'styled-components';

const SideBar = props => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div className={classes.container}>

            <Modal
                bodyOpenClassName={classes.modal}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <p>Set the new playlist name</p>
                <input type="text"/>
                <button>Add</button>
            </Modal>

           <ul className={classes.library}>
                <li className={classes.listItem}>Library</li>
                <li className={classes.listItem}>Recently added</li>
                <li className={classes.listItem}>Artists</li>
                <li className={classes.listItem}
                    onClick={() => {
                        // props.setDisplay('albums')
                    }}
                >Albums</li>
                <li className={classes.listItem}
                    onClick={() => {
                        props.setDisplay('songs')
                    }}
                >Songs</li>
                <li className={classes.listItem}
                    onClick={() => {
                        props.setDisplay('categories')
                    }}
                >Categories</li>
           </ul>
            <ul className={classes.playlists}>
                <li className={classes.listItem}>Playlists</li>

                {props.playlists.map(playlist => (
                            <li
                                key={playlist.id}
                                onClick= {() => {
                                    props.setCurrentPlaylist(playlist.id)
                                }}
                                className={`${playlist.id === props.currentPlaylist ? classes.active : '' } ${classes.listItem}`}
                            >
                                {playlist.name}
                            </li>
                        )
                    )
                }

                <li className={classes.listItem} onClick= {() => setModalIsOpen(true)}>
                    <i className="fa fa-plus-circle"></i>New playlist
                </li>
           </ul>
        </div>
    )
}

export default SideBar;