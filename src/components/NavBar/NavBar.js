import React from 'react';
import classes from './NavBar.module.css';
import logo from '../../assets/apple-itunes.svg'
// import styled from 'styled-components';

const NavBar = () => {

    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <img src={logo}/>
            </div>
            <div className={classes.navItems}>
                <ul className={classes.navItems__left}>
                    <li className={classes.navItems__item}>Library</li>
                    <li className={classes.navItems__item}>Browse</li>     
                </ul>
                <ul className={classes.navItems__right}>
                    <input className={classes.navItems__search} placeholder='Search' />
                    <li className={classes.navItems__item}>Log out</li>     
                </ul>
            </div>
        </div>
    )
}

export default NavBar;