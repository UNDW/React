import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'
const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='./profile' className={navData=>navData.isActive? classes.active:classes.item}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs' className={navData=>navData.isActive? classes.active:classes.item}>Message</NavLink>
        </div>
        <div className={classes.item}>
        <NavLink to='/News' className={navData=>navData.isActive? classes.active:classes.item}>News</NavLink>
        </div>
        <div className={classes.item}>
        <NavLink to='/Music' className={navData=>navData.isActive? classes.active:classes.item}>Music</NavLink>
        </div>
        <div className={classes.item}>
        <NavLink to='/Settings' className={navData=>navData.isActive? classes.active:classes.item}>Settings</NavLink>
        </div>
    </nav>
}
export default Navbar;