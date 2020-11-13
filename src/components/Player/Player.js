import React from 'react';
import classes from './Player.module.css';
import artWork from '../../assets/blac-youngsta.jpeg';
import prev from '../../assets/prev.svg';
import play from '../../assets/play.svg';
import next from '../../assets/next.svg';
// import styled from 'styled-components';

const Player = () => {

    return (
        <div className={classes.container}>
           <img className={classes.artWork} src={artWork} alt="artwork"/>
           <div className={classes.details}>
                <p className={classes.name}>I met Tay Keith first (feat. Lil Baby & Moneybagg Yo)</p>
                <p className={classes.fullName}>Blac Youngsta - I met Tay Keith first (feat. Lil Baby & Moneybagg Yo) - F*ck Everybody 3 (2020)</p>
                <div className={classes.buttons}>
                    <img className={classes.prev} src={prev} alt="prev"/>
                    <img className={classes.play} src={play} alt="play"/>
                    <img className={classes.next} src={next} alt="next"/>
                </div>
                <div>
                    <div className={classes.timing}>
                        <span className={classes.played}>0:53</span>
                        <span className={classes.left}>2:32</span>
                    
                    </div>
                    <div className={classes.progressBar}></div>
                </div>
           </div>
        </div>
    )
}

export default Player;