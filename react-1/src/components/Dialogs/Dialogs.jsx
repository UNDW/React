import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                
                <DialogItem name="Oleg" id="1"/>

                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3"> Sveta</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Sasha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">Vlad</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/6">Sergei</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Hi
                </div>
                <div className={classes.message}>
                    How are your ?
                </div>
                <div className={classes.message}>
                    I'm fine
                </div>
            </div>
        </div>
    )
}

export default Dialogs;