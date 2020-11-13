import React from 'react';
import classes from './Content.module.css';
import heart from '../../assets/heart.svg';
// import styled from 'styled-components';

const Content = () => {

    return (
        <div className={classes.container}>
            <table>
                <thead>
                    <tr>
                        <th className={classes.song}>Song</th>
                        <th className={classes.lenght}>Lenght</th>
                        <th className={classes.artist}>Artist</th>
                        <th className={classes.album}>Album</th>
                        <th className={classes.genre}>Genre</th>
                        <th className={classes.love}><img src={heart}/></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className={classes.song}>I met Tay Keith first (feat. Lil Baby & Moneybagg Yo)</td>
                        <td className={classes.lenght}>3:08</td>
                        <td className={classes.artist}>Blac Youngsta</td>
                        <td className={classes.album}>F*ck everybody 3</td>
                        <td className={classes.genre}>Hip-Hop</td>
                        <td className={classes.love}><img src={heart}/></td>
                    </tr>
                    <tr>
                        <td className={classes.song}>I met Tay Keith first (feat. Lil Baby & Moneybagg Yo)</td>
                        <td className={classes.lenght}>3:08</td>
                        <td className={classes.artist}>Blac Youngsta</td>
                        <td className={classes.album}>F*ck everybody 3</td>
                        <td className={classes.genre}>Hip-Hop</td>
                        <td className={classes.love}><img src={heart}/></td>
                    </tr>
                    <tr>
                        <td className={classes.song}>I met Tay Keith first (feat. Lil Baby & Moneybagg Yo)</td>
                        <td className={classes.lenght}>3:08</td>
                        <td className={classes.artist}>Blac Youngsta</td>
                        <td className={classes.album}>F*ck everybody 3</td>
                        <td className={classes.genre}>Hip-Hop</td>
                        <td className={classes.love}><img src={heart}/></td>
                    </tr>
                    <tr>
                        <td className={classes.song}>I met Tay Keith first (feat. Lil Baby & Moneybagg Yo)</td>
                        <td className={classes.lenght}>3:08</td>
                        <td className={classes.artist}>Blac Youngsta</td>
                        <td className={classes.album}>F*ck everybody 3</td>
                        <td className={classes.genre}>Hip-Hop</td>
                        <td className={classes.love}><img src={heart}/></td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default Content;