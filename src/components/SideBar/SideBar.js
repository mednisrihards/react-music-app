import React from 'react';
import classes from './SideBar.module.css';
// import styled from 'styled-components';

const SideBar = () => {

    return (
        <div className={classes.container}>
           <ul className={classes.library}>
                <li className={classes.listItem}>Library</li>
                <li className={classes.listItem}>Recently added</li>
                <li className={classes.listItem}>Artists</li>
                <li className={classes.listItem}>Albums</li>
                <li className={classes.listItem}>Songs</li>
                <li className={classes.listItem}>Genres</li>
           </ul>
           <ul className={classes.playlists}>
                <li className={classes.listItem}>Playlists</li>
                <li className={classes.listItem}>Hip Hop</li>
                <li className={classes.listItem}>Loved</li>
                <li className={classes.listItem}><i className="fa fa-plus-circle"></i>New playlist</li>
           </ul>
        </div>
    )
}

export default SideBar;