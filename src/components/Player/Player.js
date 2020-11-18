import React from 'react';
import classes from './Player.module.css';
import artWork from '../../assets/blac-youngsta.jpeg';
import prev from '../../assets/prev.svg';
import play from '../../assets/play.svg';
import next from '../../assets/next.svg';

const Player = props => {

    return (
        <div className={classes.container}>
           <img className={classes.artWork} src={props.currentSong.artWork} alt="artwork"/>
           <div className={classes.details}>
                <p className={classes.name}>{props.currentSong.name}</p>
                <p className={classes.fullName}>{`${props.currentSong.name} - ${props.currentSong.album} (${props.currentSong.year})`}</p>
                <div className={classes.buttons}>
                    <img className={classes.prev} src={prev} alt="prev"/>
                    <img className={classes.play} src={play} alt="play"/>
                    <img className={classes.next} src={next} alt="next"/>
                </div>
                <div>
                    <div className={classes.timing}>
                        <span className={classes.played}>0:00</span>
                        <span className={classes.left}>{Math.floor((props.currentSong.duration/1000/60) << 0) + ":" + Math.floor((props.currentSong.duration/1000) % 60)}</span>
                    
                    </div>
                    <div className={classes.progressBar}></div>
                </div>
           </div>
        </div>
    )
}

export default Player;