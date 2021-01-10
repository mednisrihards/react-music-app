import React, {useState} from 'react';
import classes from './NavBar.module.css';
import logo from '../../assets/logo.png'
// import styled from 'styled-components';

const NavBar = props => {

    const [value, setvalue] = useState('')

    function updateValue (event){
        setvalue(event.target.value)
        if (event.target.value.length > 0) {
            props.search(event.target.value)
        }
    }

    return (
        <div className={classes.container}>
            <i className={classes.burger} class="fa fa-bars"></i>
            <img className={classes.logo} src={logo} alt='logo'/>
            <div className={classes.navItems}>
                <ul className={classes.navItems__left}>
                    <li className={classes.navItems__item}>Library</li>
                    <li className={`${classes.navItems__item} ${classes.active}`} onClick={() => props.setDisplay('categories')}>Browse</li>     
                </ul>
                <ul className={classes.navItems__right}>
                    <input 
                        className={classes.navItems__search}
                        placeholder='Search'
                        value={value}
                        onChange={updateValue}
                    />
                    <li className={classes.navItems__item}>Log out</li>     
                </ul>
            </div>
        </div>
    )
}

export default NavBar;