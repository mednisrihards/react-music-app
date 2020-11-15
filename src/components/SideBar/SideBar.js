import React, { useState } from 'react';
import classes from './SideBar.module.css';
import Modal from 'react-modal';

const SideBar = props => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div className={classes.container}>

            <Modal
                bodyOpenClassName={classes.modal}
                isOpen={modalIsOpen}
                onRequestClose={() => props.setModalIsOpen(false)}
            >
                <p>Set the new playlist name</p>
                <input type="text"/>
                <button>Add</button>
            </Modal>

           <ul className={classes.library}>
                <li className={classes.listItem}>Library</li>
                <li className={classes.listItem}>Recently added</li>
                <li className={classes.listItem}>Artists</li>
                <li className={classes.listItem}>Albums</li>
                <li className={classes.listItem}>Songs</li>
                <li className={classes.listItem}
                    onClick={() => {
                        props.setDisplay('genres')
                    }}
                >Genres</li>
           </ul>
            <ul className={classes.playlists}>
                <li className={classes.listItem}>Playlists</li>

                {/* {props.playlists.map((playlist, index) => (
                            <li
                                key={playlist}
                                onClick= {() => {
                                    props.setCurrentPlaylist(playlist)
                                }}
                                className={`${playlist === props.currentPlaylist ? classes.active : '' } ${classes.listItem}`}
                            >
                                {playlist}
                            </li>
                        )
                    )
                } */}
                <li className={classes.listItem} onClick= {() => setModalIsOpen(true)}>
                    <i className="fa fa-plus-circle"></i>New playlist
                </li>
           </ul>
        </div>
    )
}

export default SideBar;